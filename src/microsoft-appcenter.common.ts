import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';

export class Common extends Observable {

  protected configuration: IAppCenterConfiguration = {
    enableAnalytics: false
  };
  
  constructor(config: IAppCenterConfiguration) {
    super();
    
    this.configuration =  Object.assign(this.configuration, config);
  }
}

export interface IAppCenterConfiguration {
  applicationKey?: string;
  enableAnalytics?: boolean;
}