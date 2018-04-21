import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import {HelloWorldModel} from './main-view-model';
import { Analytics, HashMap } from 'nativescript-microsoft-appcenter';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();

    let data: HashMap[] = new Array<HashMap>();
    data.push({ key: "AnyKey", value: "It works!" });

    let analytics = new Analytics();
    analytics.trackEvent("MainPageLoaded", data);
}
