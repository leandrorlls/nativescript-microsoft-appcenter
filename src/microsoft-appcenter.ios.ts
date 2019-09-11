import { AppCenterSettings, TrackProperties } from './microsoft-appcenter.common';
import * as application from "tns-core-modules/application";

declare const MSAppCenter: any;
declare const MSAnalytics: any;
declare const MSCrashes: any;
declare const MSDistribute: any;

export class AppCenter {    
    public start(settings: AppCenterSettings): void {
        const services = NSMutableArray.alloc().init();

        if (settings.analytics) {
            services.addObject(MSAnalytics);
        }

        if (settings.crashes) {
            services.addObject(MSCrashes);
        }

        if (settings.distribute) {
            services.addObject(MSDistribute);
        }

        MSAppCenter.startWithServices(settings.appSecret, services);
    }

    public startWithAppDelegate(settings: AppCenterSettings): void {
        AppCenterDelegate.setup(settings);
        application.ios.delegate = AppCenterDelegate;
    }

    public getInstallId(): string {
        return MSAppCenter.installId();
    }

    public isEnabled(): boolean {
        return MSAppCenter.isEnabled();
    }

    public disable(): void {
        MSAppCenter.setEnabled(false);
    }
}

export class AppCenterAnalytics {
    public disable(): void {
        MSAnalytics.setEnabled(false);
    }

    public enable(): void {
        MSAnalytics.setEnabled(true);
    }

    public isEnabled(): boolean {
        return MSAnalytics.isEnabled();
    }

    public trackEvent(eventName: string, properties?: TrackProperties[]): void {
        if (properties && properties.length > 0) {
            let hashMap = NSMutableDictionary.alloc().init();

            properties.forEach(property => {
                hashMap.setValueForKey(property.value, property.key);
            });

            MSAnalytics.trackEventWithProperties(eventName, hashMap);
        } else {
            MSAnalytics.trackEvent(eventName);
        }
    }
}

export class AppCenterCrashes {
    
    public disable(): void {
        MSCrashes.setEnabled(false);
    }

    public enable(): void {
        MSCrashes.setEnabled(true);
    }

    public isEnabled(): boolean {
        return MSCrashes.isEnabled();
    }

    public hasCrashedInLastSession(): boolean {
        return MSCrashes.hasCrashedInLastSession();
    }

    public generateTestCrash(): void {
        MSCrashes.generateTestCrash();
    }
}

export class AppCenterDistribute {

    public disable(): void {
        MSDistribute.setEnabled(false);
    }

    public enable(): void {
        MSDistribute.setEnabled(true);
    }

    public isEnabled(): boolean {
        return MSDistribute.isEnabled();
    }
}

export class AppCenterDelegate extends UIResponder implements UIApplicationDelegate {
    private static settings: AppCenterSettings;
    public static ObjCProtocols = [UIApplicationDelegate];
        
    public static setup(settings: AppCenterSettings): void {
        this.settings = settings;
    }

    applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean {
        const services = NSMutableArray.alloc().init();

        if (AppCenterDelegate.settings.analytics) {
            services.addObject(MSAnalytics);
        }

        if (AppCenterDelegate.settings.crashes) {
            services.addObject(MSCrashes);
        }

        if (AppCenterDelegate.settings.distribute) {
            services.addObject(MSDistribute);
        }

        MSAppCenter.startWithServices(AppCenterDelegate.settings.appSecret, services);
        return true;
    }
}