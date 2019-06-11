import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import {AppCenter, AppCenterAnalytics, AppCenterCrashes, AppCenterDistribute} from "nativescript-microsoft-appcenter";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        AppCenter, 
        AppCenterAnalytics, 
        AppCenterCrashes,
        AppCenterDistribute
    ]
})
export class AppModule { }
