import { Application, isAndroid } from '@nativescript/core';
import { AppCenter, AppCenterSettings } from 'nativescript-microsoft-appcenter';

let appCenterConfig: AppCenterSettings = {
    appSecret: "<YOUR-APP-KEY-HERE>",
    analytics: true,
    crashes: true
};

/*
ANDROID
    -> appCenter.start() should be used
    -> appCenter.startWithAppDelegate() will call appCenter.start()

IOS
    -> appCenter.startWithAppDelegate() will create a custom AppDelegate class and start the App Center
    -> appCenter.start() should be used only if you want to use your own custom AppDelegate
    Example:
    
*/

// AppCenter Start
let appCenter = new AppCenter();
if (isAndroid) {
    setTimeout(() => { appCenter.start(appCenterConfig); }, 300);
} else {
    appCenter.startWithAppDelegate(appCenterConfig);
}

// Start
Application.run({ moduleName: "app-root" });
