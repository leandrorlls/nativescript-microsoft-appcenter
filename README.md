# Microsoft App Center plugin for NativeScript

## Requirements
Before you begin, please make sure that the following prerequisites are met:

### Node.js
- [Node.js®](https://nodejs.org)
is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

### NativeScript
 - [NativeScript](https://github.com/NativeScript/NativeScript/blob/master/README.md)
is a framework for building native iOS and Android apps using JavaScript and CSS.

    NativeScript renders UIs with the native platform’s rendering engine, no WebViews, resulting in native-like performance and UX.

### Microsoft App Center

- Android Version 4.0.3 (API level 15) or later.

- [App Center](https://appcenter.ms) brings together multiple services, commonly used by mobile developers, into a single, integrated product. You can build, test, distribute, and monitor your mobile apps, and also implement push notifications.

- Create your app in the App Center Portal to obtain the App Secret **(if you have already created your app in the App Center portal, you can skip this step)**.

- Head over to [Microsoft App Center](https://appcenter.ms).

- Sign up or log in and hit the blue button on the top right corner of the portal that says `Add new` and select `Add new app` from the dropdown menu.

- Enter a name and an optional desciption for your app.

- Select `Android` and `Java` **or** `iOS` and `Objective-C/Swift` as a platform.

- Hit the button at the bottom right that says Add new app.

- Once you have created an app, you can obtain its App Secret on the Getting Started page or Settings page on the App Center Portal.

## Installation

```javascript
tns plugin add nativescript-microsoft-appcenter
```

## Configuration

### NativeScript + Angular

Inside your `main.ts` file set up your app secret and any options you want enabled.
```javascript
import { AppCenterSettings, AppCenter } from "nativescript-microsoft-appcenter";

if (isIOS) {
    let appCenterSettings: AppCenterSettings = {
        appSecret: <Your ios app secret>,
        analytics: true,
        crashes: true,
        distribute: true
    }

    let appCenter = new AppCenter();
    appCenter.startWithAppDelegate(appCenterSettings);
} else {
    let appCenterSettings: AppCenterSettings = {
        appSecret: <Your android app secret>,
        analytics: true,
        crashes: true,
        distribute: true
    }

    let appCenter = new AppCenter();
    appCenter.start(appCenterSettings);
}

```

Then inside your `app.component.ts` you can import some of the plugin's modules and use these lines to verify your configuration is correct.
```javascript
import { AppCenter, AppCenterAnalytics, AppCenterCrashes, AppCenterDistribute } from "nativescript-microsoft-appcenter";

export class AppComponent {
    public appCenterInstallId: string;
    public appCenterIsEnabled: string;
    public analyticsIsEnabled: string;
    public crashesIsEnabled: string;
    public distributeIsEnabled: string;

    constructor(
        private appCenter: AppCenter,
        private analytics: AppCenterAnalytics,
        private crashes: AppCenterCrashes,
        private distribute: AppCenterDistribute
    ) {

        this.appCenterInstallId = this.appCenter.getInstallId();
        this.appCenterIsEnabled = this.appCenter.isEnabled() ? "Enabled" : "Disabled";
        this.analyticsIsEnabled = this.analytics.isEnabled() ? "Enabled" : "Disabled";
        this.crashesIsEnabled = this.crashes.isEnabled() ? "Enabled" : "Disabled";
        this.distributeIsEnabled = this.distribute.isEnabled() ? "Enabled" : "Disabled";
        console.log(`AppCenter is enabled: ${this.appCenterIsEnabled}`);
        console.log(`AppCenter installId: ${this.appCenterInstallId}`);
        console.log(`AppCenter analytics are enabled: ${this.analyticsIsEnabled}`);
        console.log(`AppCenter crashes are enabled: ${this.crashesIsEnabled}`);
        console.log(`AppCenter distribute is enabled: ${this.distributeIsEnabled}`);
        console.log(`Testing on ${isIOS ? 'iOS' : 'Android'} in ${environment.name}`);

        // trackEvent() will log the event inside of AppCenter if you want to manually track events.
        this.analytics.trackEvent(`Testing on ${isIOS ? 'iOS' : 'Android'}, InstallId: ${this.appCenterInstallId}`);
    }
```


### Distribute Features
| Android | iOS |
| --- | --- |
| YES | YES |

### Diagnostics Features
| Feature | Android | iOS |
| --- | --- | --- |
| Crashes | YES | YES |

### Analytics Features
| Feature | Android | iOS |
| --- | --- | --- |
| **Overview:** Active users, daily sessions per user, session duration, top devices, countries, languages and active users per version. | YES | YES |
| **Events:** Event name, Count, Trend, Users, User Change and Per User. | YES | YES |
| **Log flow** | YES | YES |

### Push Features
| Feature | Android | iOS |
| --- | --- | --- |
| Notifications | COMING SOON | COMING SOON |
| Audiences | COMING SOON | COMING SOON |
    
## License

Apache License Version 2.0, January 2004
