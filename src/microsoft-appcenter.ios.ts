import { Common, IAppCenterConfiguration } from './microsoft-appcenter.common';

export class AppCenter extends Common {
    
    public static init(config: IAppCenterConfiguration): void {
        // Not implemented yet
    }

    public static getInstallId(): string {
        return "not implemented yet";
    }

    public static isEnabled(): boolean {
        return false;
    }

    public static disable(): void {
        // Not implemented yet
    }
}

export class Analytics {
    public static disable(): void {
        // Not implemented yet
    }

    public static enable(): void {
        // Not implemented yet
    }

    public static getClass(): any {
        return "not implemented yet";
    }

    public static isEnabled(): boolean {
        return false;
    }

    public static trackEvent(eventName: string, properties?: HashMap[]): void {
        // Not implemented yet
    }
}

export interface HashMap {
    key: string;
    value: string;
}