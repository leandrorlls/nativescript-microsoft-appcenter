// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import * as application from 'tns-core-modules/application';
import { AppCenterSettings, AppCenter } from "nativescript-microsoft-appcenter";

if (application.ios){
    let appCenterSettings: AppCenterSettings = {
        appSecret: "<YOUR-APP-KEY-HERE>",
        analytics: true,
        crashes: true,
        distribute: true,
    }

    let appCenter = new AppCenter();
    appCenter.startWithAppDelegate(appCenterSettings);
}

platformNativeScriptDynamic().bootstrapModule(AppModule);