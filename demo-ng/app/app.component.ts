import { Component, OnInit } from "@angular/core";
import { AppCenter, AppCenterSettings } from "nativescript-microsoft-appcenter";
import * as application from 'tns-core-modules/application';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit { 
    ngOnInit(): void {
        if (application.android){
            let appCenter: AppCenter = new AppCenter();

            let appCenterSettings: AppCenterSettings = {
                appSecret: "<YOUR-APP-KEY-HERE>",
                analytics: true,
                crashes: true
            }
    
            appCenter.start(appCenterSettings);
        }
    }
}
