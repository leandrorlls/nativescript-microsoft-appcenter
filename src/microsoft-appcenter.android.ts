import { IAppCenterConfig, HashMap } from './microsoft-appcenter.common';
import * as app from "tns-core-modules/application";

declare var com: any;

export class AppCenter {
    appCenter: any = com.microsoft.appcenter.AppCenter;
    analytics: any = com.microsoft.appcenter.analytics.Analytics;

    public start(config: IAppCenterConfig): void {
        let enabledServices: Array<any> = new Array<any>();

        if (config.analytics) {
            enabledServices.push(this.analytics.class);
        }

        this.appCenter.start(app.android.context, config.appSecret, enabledServices);
    }

    public getInstallId(): string {
        return this.appCenter.getInstallId().get();
    }

    public isEnabled(): boolean {
        return this.appCenter.isEnabled().get();
    }

    public disable(): void {
        this.appCenter.setEnabled(false);
    }
}

export class Analytics {
    analytics: any = com.microsoft.appcenter.analytics.Analytics;

    public disable(): void {
        this.analytics.setEnabled(false);
    }

    public enable(): void {
        this.analytics.setEnabled(true);
    }

    public getClass(): any {
        return this.analytics.class;
    }

    public isEnabled(): boolean {
        return this.analytics.isEnabled().get();
    }

    public trackEvent(eventName: string, properties?: HashMap[]): void {
        let hashMap = new java.util.HashMap<string, string>();

        if (properties && properties.length > 0) {
            properties.forEach(element => hashMap.put(element.key, element.value));
        }

        this.analytics.trackEvent(eventName, hashMap);
    }
}