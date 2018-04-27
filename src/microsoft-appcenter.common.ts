import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';

export interface AppCenterSettings {
  appSecret?: string;
  analytics?: boolean;
  crashes?: boolean;
}

export interface TrackProperties {
  key: string;
  value: string;
}