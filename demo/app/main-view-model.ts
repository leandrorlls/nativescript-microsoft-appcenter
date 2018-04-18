import { Observable } from 'tns-core-modules/data/observable';
import { AppCenter, IAppCenterConfiguration } from 'nativescript-microsoft-appcenter';

export class HelloWorldModel extends Observable {
  public message: string;
  private appCenterConfig: IAppCenterConfiguration;

  constructor() {
    super();

    this.message = "App Center plugin is working!";

    this.appCenterConfig = {
      applicationKey: "<YOUR-APP-KEY-HERE>",
      enableAnalytics: true
    };

    AppCenter.init(this.appCenterConfig);
  }
}
