nativescript-microsoft-appcenter
==============================

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