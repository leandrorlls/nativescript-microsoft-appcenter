nativescript-microsoft-appcenter
==============================

# 1.2.0 (2018, April 27)

- New release 1.2.0

## New

- Added new method `startWithAppDelegate` in the class `AppCenter` to be used to start the App Center on iOS
- Added new class `AppCenterCrashes` for iOS / Android
- Added a new angular project `demo-ng`

## Updates
- The interface `IAppCenterConfig` was renamed to `AppCenterSettings`
- The class `HashMap` was renamed to `TrackProperties`
- The class `Analytics` was renamed to `AppCenterAnalytics`

# 1.1.0 (2018, April 21)

- New release 1.1.0

## New

- Included `analytics` for iOS

## Updates
- The interface `IAppCenterConfiguration` was renamed to `IAppCenterConfig`

- The method `init(config: IAppCenterConfig)` from AppCenter was renamed to `start(config: IAppCenterConfig)` like the original [Android SDK](https://github.com/Microsoft/AppCenter-SDK-Android) and [iOS SDK](https://github.com/Microsoft/AppCenter-SDK-Apple)
- Demo project was updated (`app.ts`, `main-page.xml` and `main-view-model.ts`)

# 1.0.0 (2018, April 18)

- New release 1.0.0

## New

- Included `analytics` for Android

## 1.0.2 (2018, April 19)

### Fixed
- Analytics was raising an error on iOS