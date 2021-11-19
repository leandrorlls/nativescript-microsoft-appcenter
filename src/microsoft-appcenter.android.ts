import { AppCenterSettings, TrackProperties } from './microsoft-appcenter.common';

export class AppCenter {
    public start(settings: AppCenterSettings): void {
        let services: Array<any> = new Array<any>();

        if (settings.analytics) {
            services.push(com.microsoft.appcenter.analytics.Analytics.class);
        }

        if (settings.crashes) {
            services.push(com.microsoft.appcenter.crashes.Crashes.class);
        }

        if (settings.distribute) {
            services.push(com.microsoft.appcenter.distribute.Distribute.class);
        }

        com.microsoft.appcenter.AppCenter.start((<any>com).tns.NativeScriptApplication.getInstance(), settings.appSecret, services);
    }

    public startWithAppDelegate(settings: AppCenterSettings): void {
        this.start(settings);
    }

    public getInstallId(): string {
        return com.microsoft.appcenter.AppCenter.getInstallId().get().toString();
    }

    public isEnabled(): boolean {
        return com.microsoft.appcenter.AppCenter.isEnabled().get().booleanValue();
    }

    public disable(): void {
        com.microsoft.appcenter.AppCenter.setEnabled(false);
    }
}

export class AppCenterAnalytics {
    public disable(): void {
        com.microsoft.appcenter.analytics.Analytics.setEnabled(false);
    }

    public enable(): void {
        com.microsoft.appcenter.analytics.Analytics.setEnabled(true);
    }

    public isEnabled(): boolean {
        return com.microsoft.appcenter.analytics.Analytics.isEnabled().get().booleanValue();
    }

    public trackEvent(eventName: string, properties?: TrackProperties[]): void {
        let hashMap = new java.util.HashMap<string, string>();

        if (properties && properties.length > 0) {
            properties.forEach(element => hashMap.put(element.key, element.value));
        }

        com.microsoft.appcenter.analytics.Analytics.trackEvent(eventName, hashMap);
    }
}

export class AppCenterCrashes {
    public disable(): void {
        com.microsoft.appcenter.crashes.Crashes.setEnabled(false);
    }

    public enable(): void {
        com.microsoft.appcenter.crashes.Crashes.setEnabled(true);
    }

    public isEnabled(): boolean {
        return com.microsoft.appcenter.crashes.Crashes.isEnabled().get().booleanValue();
    }

    public hasCrashedInLastSession(): boolean {
        return com.microsoft.appcenter.crashes.Crashes.hasCrashedInLastSession().get().booleanValue();
    }

    public generateTestCrash(): void {
        com.microsoft.appcenter.crashes.Crashes.generateTestCrash();
    }
}

export class AppCenterDistribute {
    public disable(): void {
        com.microsoft.appcenter.distribute.Distribute.setEnabled(false);
    }

    public enable(): void {
        com.microsoft.appcenter.distribute.Distribute.setEnabled(true);
    }

    public isEnabled(): boolean {
        return com.microsoft.appcenter.distribute.Distribute.isEnabled().get().booleanValue();
    }
}