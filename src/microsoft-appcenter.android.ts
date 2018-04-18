import { Common, IAppCenterConfiguration } from './microsoft-appcenter.common';
import * as app from "tns-core-modules/application";

declare var com: any;

export class AppCenter extends Common {
    static appCenter: any = com.microsoft.appcenter.AppCenter;

    public static init(config: IAppCenterConfiguration): void {
        let enabledServices: Array<any> = new Array<any>();

        if (config.enableAnalytics) {
            enabledServices.push(Analytics.getClass());
        }

        this.appCenter.start(app.android.context, config.applicationKey, enabledServices);
    }

    public static getInstallId(): string {
        return this.appCenter.getInstallId().get();
    }

    public static isEnabled(): boolean {
        return this.appCenter.isEnabled().get();
    }

    public static disable(): void {
        this.appCenter.setEnabled(false);
    }
}

export class Analytics {
    static sdk: any = com.microsoft.appcenter.analytics.Analytics;

    public static disable(): void {
        this.sdk.setEnabled(false);
    }

    public static enable(): void {
        this.sdk.setEnabled(true);
    }

    public static getClass(): any {
        return this.sdk.class;
    }

    public static isEnabled(): boolean {
        return this.sdk.isEnabled().get();
    }

    public static trackEvent(eventName: string, properties?: HashMap[]): void {
        let hashMap = new java.util.HashMap<string, string>();

        if (properties && properties.length > 0) {
            properties.forEach(element => hashMap.put(element.key, element.value));
        }

        this.sdk.trackEvent(eventName, hashMap);
    }
}

export interface HashMap {
    key: string;
    value: string;
}