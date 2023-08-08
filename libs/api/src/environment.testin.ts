import { Injectable } from '@angular/core';
import { Environment } from '@app/types';

export const environment: Environment = {
  production: true,
  apiBase: 'https://testin.terax.in/api'
};

@Injectable({
  providedIn: 'root'
})
export class EnvironmentServices {
}
