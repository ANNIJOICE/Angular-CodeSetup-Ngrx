import { Injectable } from '@angular/core';
import { Environment} from '@app/types';

export const environment: Environment = {
  production: false,
  apiBase: 'http://localhost:3000/api'
}

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

}
