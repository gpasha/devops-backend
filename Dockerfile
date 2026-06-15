# Stage 1: сборка NestJS
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./ 

# Принудительно ставим ВСЕ пакеты, включая nest/cli
RUN npm ci --include=dev

COPY . .
RUN npm run build

# Stage 2: запуск с production-зависимостями
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev --no-audit
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/main"]