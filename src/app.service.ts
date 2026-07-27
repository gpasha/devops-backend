import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hi from week7! Deployed for k8s! + Helm (Charts) + SOPS + AGE + ARGOCD!';
  }
}
