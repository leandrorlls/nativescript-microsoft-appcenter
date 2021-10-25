import { Observable } from '@nativescript/core';
import { AppCenter, AppCenterSettings, AppCenterAnalytics, AppCenterCrashes, AppCenterDistribute } from 'nativescript-microsoft-appcenter';

export class HelloWorldModel extends Observable {
  public appCenterInstallId: string;
  public appCenterIsEnabled: string;
  public analyticsIsEnabled: string;
  public crashesIsEnabled: string;
  public distributeIsEnabled: string;

  appCenter = new AppCenter();
  analytics = new AppCenterAnalytics();
  crashes = new AppCenterCrashes();
  distribute = new AppCenterDistribute();

  constructor() {
    super();

    this.appCenterInstallId = this.appCenter.getInstallId();
    this.appCenterIsEnabled = this.appCenter.isEnabled() ? "Enabled" : "Disabled";

    this.analyticsIsEnabled = this.analytics.isEnabled() ? "Enabled" : "Disabled";
    this.analytics.trackEvent("main-view-model starts");

    this.crashesIsEnabled = this.crashes.isEnabled() ? "Enabled" : "Disabled";
    this.distributeIsEnabled = this.distribute.isEnabled() ? "Enabled" : "Disabled";
  }
}
