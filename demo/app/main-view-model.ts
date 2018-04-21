import { Observable } from 'tns-core-modules/data/observable';
import { AppCenter, Analytics, IAppCenterConfig, HashMap } from 'nativescript-microsoft-appcenter';

export class HelloWorldModel extends Observable {
  public message: string;
  public appCenterInstallId: string;
  public appCenterIsEnabled: string;
  public analyticsIsEnabled: string;

  appCenter = new AppCenter();
  analytics = new Analytics();

  constructor() {
    super();

    this.message = "App Center plugin is working!";

    this.appCenterInstallId = this.appCenter.getInstallId();
    this.appCenterIsEnabled = this.appCenter.isEnabled() ? "Enabled" : "Disabled";

    this.analyticsIsEnabled = this.analytics.isEnabled() ? "Enabled" : "Disabled";
    this.analytics.trackEvent("main-view-model starts");
  }
}
