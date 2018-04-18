import { Observable } from "tns-core-modules/data/observable";

export declare class Common extends Observable {
    protected configuration: IAppCenterConfiguration;
    constructor(config: IAppCenterConfiguration);
}

export interface IAppCenterConfiguration {
    applicationKey?: string;
    enableAnalytics?: boolean;
}

export declare class AppCenter extends Common {
    static appCenter: any;
    static init(config: IAppCenterConfiguration): void;
    static getInstallId(): string;
    static isEnabled(): boolean;
    static disable(): void;
}
export declare class Analytics {
    static sdk: any;
    static disable(): void;
    static enable(): void;
    static getClass(): any;
    static isEnabled(): boolean;
    static trackEvent(eventName: string, properties?: HashMap[]): void;
}
export interface HashMap {
    key: string;
    value: string;
}