import { AppCenterSettings, TrackProperties } from './microsoft-appcenter.common';
import { Application } from "@nativescript/core";

export class AppCenter {    
    public start(settings: AppCenterSettings): void {
        const services = []

        if (settings.analytics) {
            services.push(MSACAnalytics);
        }

        if (settings.crashes) {
            services.push(MSACCrashes);
        }

        if (settings.distribute) {
            services.push(MSACDistribute);
        }

        MSACAppCenter.startWithServices(settings.appSecret, NSArray.arrayWithArray(services));
    }

    public startWithAppDelegate(settings: AppCenterSettings): void {
        AppCenterDelegate.setup(settings);
        Application.ios.delegate = AppCenterDelegate;
    }

    public getInstallId(): string {
        return MSACAppCenter.installId.UUIDString;
    }

    public isEnabled(): boolean {
        return MSACAppCenter.enabled;
    }

    public enable(): void {
        MSACAppCenter.enabled = true;
    }

    public disable(): void {
        MSACAppCenter.enabled = false;
    }
}

export class AppCenterAnalytics {
    public disable(): void {
        MSACAnalytics.enabled = false;
    }

    public enable(): void {
        MSACAnalytics.enabled = true;
    }

    public isEnabled(): boolean {
        return MSACAnalytics.enabled;
    }

    public trackEvent(eventName: string, properties?: TrackProperties[]): void {
        if (properties && properties.length > 0) {
            const hashMap: any = {}

            properties.forEach(property => {
                hashMap[property.key] = property.value;
            });

            MSACAnalytics.trackEventWithProperties(eventName, NSDictionary.dictionaryWithDictionary(hashMap));
        } else {
            MSACAnalytics.trackEvent(eventName);
        }
    }
}

export class AppCenterCrashes {
    
    public disable(): void {
        MSACCrashes.enabled = false;
    }

    public enable(): void {
        MSACCrashes.enabled = true;
    }

    public isEnabled(): boolean {
        return MSACCrashes.enabled;
    }

    public hasCrashedInLastSession(): boolean {
        return MSACCrashes.hasCrashedInLastSession;
    }

    public generateTestCrash(): void {
        MSACCrashes.generateTestCrash();
    }
}

export class AppCenterDistribute {

    public disable(): void {
        MSACDistribute.enabled = false;
    }

    public enable(): void {
        MSACDistribute.enabled = true;
    }

    public isEnabled(): boolean {
        return MSACDistribute.enabled;
    }
}

@NativeClass()
class AppCenterDelegate extends UIResponder implements UIApplicationDelegate {
    private static settings: AppCenterSettings;
    public static ObjCProtocols = [UIApplicationDelegate];
        
    public static setup(settings: AppCenterSettings): void {
        this.settings = settings;
    }

    applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean {
        const services = []

        if (AppCenterDelegate.settings.analytics) {
            services.push(MSACAnalytics);
        }

        if (AppCenterDelegate.settings.crashes) {
            services.push(MSACCrashes);
        }

        if (AppCenterDelegate.settings.distribute) {
            services.push(MSACDistribute);
        }

        MSACAppCenter.startWithServices(AppCenterDelegate.settings.appSecret, NSArray.arrayWithArray(services));
        return true;
    }
}

export { AppCenterDelegate };