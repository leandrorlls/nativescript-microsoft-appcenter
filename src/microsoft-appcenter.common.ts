export interface AppCenterSettings {
  appSecret?: string;
  analytics?: boolean;
  crashes?: boolean;
  distribute?: boolean;
}

export interface TrackProperties {
  key: string;
  value: string;
}