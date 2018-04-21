import "./bundle-config";
import * as application from 'tns-core-modules/application';
import { AppCenter, Analytics } from 'nativescript-microsoft-appcenter';

let appCenterConfig = {
    appSecret: "<YOUR-APP-KEY-HERE>",
    analytics: true
};

// AppCenter Start
let appCenter = new AppCenter();
appCenter.start(appCenterConfig);

// Start
application.start({ moduleName: "main-page" });
