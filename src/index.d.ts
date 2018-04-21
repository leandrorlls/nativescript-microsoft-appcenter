import { Observable } from "tns-core-modules/data/observable";

export interface IAppCenterConfig {
    appSecret?: string;
    analytics?: boolean;
}
export interface HashMap {
    key: string;
    value: string;
}
export declare class AppCenter {
    start(config: IAppCenterConfig): void;
    getInstallId(): string;
    isEnabled(): boolean;
    disable(): void;
}
export declare class Analytics {
    disable(): void;
    enable(): void;
    getClass(): any;
    isEnabled(): boolean;
    trackEvent(eventName: string, properties?: HashMap[]): void;
}