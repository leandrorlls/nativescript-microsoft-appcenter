import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';

export interface IAppCenterConfig {
  appSecret?: string;
  analytics?: boolean;
}

export interface HashMap {
  key: string;
  value: string;
}