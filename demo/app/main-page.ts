import * as observable from '@nativescript/core/data/observable';
import * as pages from '@nativescript/core/ui/page';
import {HelloWorldModel} from './main-view-model';
import { AppCenterAnalytics, TrackProperties,  AppCenterCrashes } from 'nativescript-microsoft-appcenter';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();

    let data: TrackProperties[] = new Array<TrackProperties>();
    data.push({ key: "AnyKey", value: "It works!" });

    let analytics = new  AppCenterAnalytics();
    analytics.trackEvent("MainPageLoaded", data);
}

export function crashesTap(args: observable.EventData){
    let crashes = new  AppCenterCrashes();
    crashes.generateTestCrash();
}
