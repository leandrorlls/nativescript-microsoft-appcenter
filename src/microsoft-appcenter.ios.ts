import { IAppCenterConfig, HashMap } from './microsoft-appcenter.common';
import * as application from "tns-core-modules/application";

declare const MSAppCenter: any;
declare const MSAnalytics: any;
declare var UIResponder: any;
declare var UIApplicationDelegate: any;

export class AppCenter {    
    public start(config: IAppCenterConfig): void {
        let customAppDelegate = UIResponder.extend({
            applicationDidFinishLaunchingWithOptions: function (application, launchOptions) {

                const services = NSMutableArray.alloc().init();

                if (config.analytics) {
                    services.addObject(MSAnalytics);
                }

                MSAppCenter.startWithServices(config.appSecret, services);

                return true;
            }
        }, {
                name: "AppDelegate",
                protocols: [UIApplicationDelegate],
            }
        );


        application.ios.delegate = customAppDelegate;
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

export class Analytics {
    public disable(): void {
        MSAnalytics.setEnabled(false);
    }

    public enable(): void {
        MSAnalytics.setEnabled(true);
    }

    public getClass(): any {
        return MSAnalytics.self;
    }

    public isEnabled(): boolean {
        return MSAnalytics.isEnabled();
    }

    public trackEvent(eventName: string, properties?: HashMap[]): void {
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