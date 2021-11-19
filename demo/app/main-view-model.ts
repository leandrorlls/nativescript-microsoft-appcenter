import { EventData, Observable } from "@nativescript/core";
import {
  AppCenter,
  AppCenterSettings,
  AppCenterAnalytics,
  AppCenterCrashes,
  AppCenterDistribute,
  TrackProperties,
} from "nativescript-microsoft-appcenter";

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

    let data: TrackProperties[] = new Array<TrackProperties>();
    data.push({ key: "AnyKey", value: "It works!" });

    let analytics = new AppCenterAnalytics();
    analytics.trackEvent("MainPageLoaded", data);
  }

  check() {
    this.set("appCenterInstallId", this.appCenter.getInstallId());

    this.set(
      "appCenterIsEnabled",
      this.appCenter.isEnabled() ? "Enabled" : "Disabled"
    );

    this.set(
      "analyticsIsEnabled",
      this.analytics.isEnabled() ? "Enabled" : "Disabled"
    );
    this.analytics.trackEvent("main-view-model starts");

    this.set(
      "crashesIsEnabled",
      this.crashes.isEnabled() ? "Enabled" : "Disabled"
    );
    this.set(
      "distributeIsEnabled",
      this.distribute.isEnabled() ? "Enabled" : "Disabled"
    );
  }

  crashesTap(args: EventData) {
    this.crashes.generateTestCrash();
  }
}
