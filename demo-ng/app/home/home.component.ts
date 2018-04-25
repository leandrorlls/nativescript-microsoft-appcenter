import { Component, OnInit } from "@angular/core";
import { AppCenter, AppCenterAnalytics, AppCenterCrashes } from "nativescript-microsoft-appcenter";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    public appCenterInstallId: string;
    public appCenterIsEnabled: string;
    public analyticsIsEnabled: string;
    public crashesIsEnabled: string;

    constructor(
        private appCenter: AppCenter,
        private analytics: AppCenterAnalytics,
        private crashes: AppCenterCrashes) {
    }

    ngOnInit(): void {
        this.appCenterInstallId = this.appCenter.getInstallId();
        this.appCenterIsEnabled = this.appCenter.isEnabled() ? "Enabled" : "Disabled";
        this.analyticsIsEnabled = this.analytics.isEnabled() ? "Enabled" : "Disabled";
        this.crashesIsEnabled = this.crashes.isEnabled() ? "Enabled" : "Disabled";
        this.analytics.trackEvent("Testing...");
    }

    public crashesTap(): void {
        this.crashes.generateTestCrash();
    }
}
