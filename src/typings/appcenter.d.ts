declare module com {
	export module microsoft {
		export module appcenter {
			export abstract class AbstractAppCenterService extends com.microsoft.appcenter.AppCenterService {
				public static class: java.lang.Class<com.microsoft.appcenter.AbstractAppCenterService>;
				public mChannel: com.microsoft.appcenter.channel.Channel;
				public getGroupName(): string;
				public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
				public setInstanceEnabled(param0: boolean): void;
				public onActivityResumed(param0: globalAndroid.app.Activity): void;
				public onActivityStarted(param0: globalAndroid.app.Activity): void;
				public constructor();
				public isInstanceEnabled(): boolean;
				public isAppSecretRequired(): boolean;
				public onStarted(param0: globalAndroid.content.Context, param1: com.microsoft.appcenter.channel.Channel, param2: string, param3: string, param4: boolean): void;
				public postAsyncGetter(param0: java.lang.Runnable, param1: com.microsoft.appcenter.utils.async.DefaultAppCenterFuture<any>, param2: any): void;
				public getChannelListener(): com.microsoft.appcenter.channel.Channel.GroupListener;
				public applyEnabledState(param0: boolean): void;
				public onApplicationEnterBackground(): void;
				public getEnabledPreferenceKey(): string;
				public getTriggerMaxParallelRequests(): number;
				public getServiceName(): string;
				public onApplicationEnterForeground(): void;
				public post(param0: java.lang.Runnable, param1: java.lang.Runnable, param2: java.lang.Runnable): boolean;
				public onConfigurationUpdated(param0: string, param1: string): void;
				public getLoggerTag(): string;
				public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
				public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
				public getTriggerCount(): number;
				public onStarting(param0: com.microsoft.appcenter.AppCenterHandler): void;
				public onActivityPaused(param0: globalAndroid.app.Activity): void;
				public getTriggerInterval(): number;
				public postOnUiThread(param0: java.lang.Runnable): void;
				public isInstanceEnabledAsync(): com.microsoft.appcenter.utils.async.AppCenterFuture<java.lang.Boolean>;
				public setInstanceEnabledAsync(param0: boolean): com.microsoft.appcenter.utils.async.AppCenterFuture<java.lang.Void>;
				public onActivityStopped(param0: globalAndroid.app.Activity): void;
				public post(param0: java.lang.Runnable): void;
				public getLogFactories(): java.util.Map<string,com.microsoft.appcenter.ingestion.models.json.LogFactory>;
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export class AppCenter {
				public static class: java.lang.Class<com.microsoft.appcenter.AppCenter>;
				public static LOG_TAG: string;
				public static getInstallId(): com.microsoft.appcenter.utils.async.AppCenterFuture<java.util.UUID>;
				public static getInstance(): com.microsoft.appcenter.AppCenter;
				public static setLogUrl(param0: string): void;
				public static setLogLevel(param0: number): void;
				public static setWrapperSdk(param0: com.microsoft.appcenter.ingestion.models.WrapperSdk): void;
				public static startFromLibrary(param0: globalAndroid.content.Context, param1: native.Array<java.lang.Class<any>>): void;
				public static start(param0: native.Array<java.lang.Class<any>>): void;
				public constructor();
				public static isConfigured(): boolean;
				public static configure(param0: globalAndroid.app.Application, param1: string): void;
				public static configure(param0: globalAndroid.app.Application): void;
				public static setMaxStorageSize(param0: number): com.microsoft.appcenter.utils.async.AppCenterFuture<java.lang.Boolean>;
				public static getLogLevel(): number;
				public static isEnabled(): com.microsoft.appcenter.utils.async.AppCenterFuture<java.lang.Boolean>;
				public setChannel(param0: com.microsoft.appcenter.channel.Channel): void;
				public static isRunningInAppCenterTestCloud(): boolean;
				public static getSdkVersion(): string;
				public static setEnabled(param0: boolean): com.microsoft.appcenter.utils.async.AppCenterFuture<java.lang.Void>;
				public static setUserId(param0: string): void;
				public static start(param0: globalAndroid.app.Application, param1: native.Array<java.lang.Class<any>>): void;
				public static setCustomProperties(param0: com.microsoft.appcenter.CustomProperties): void;
				public static start(param0: globalAndroid.app.Application, param1: string, param2: native.Array<java.lang.Class<any>>): void;
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export class AppCenterHandler {
				public static class: java.lang.Class<com.microsoft.appcenter.AppCenterHandler>;
				/**
				 * Constructs a new instance of the com.microsoft.appcenter.AppCenterHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					post(param0: java.lang.Runnable, param1: java.lang.Runnable): void;
				});
				public constructor();
				public post(param0: java.lang.Runnable, param1: java.lang.Runnable): void;
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export class AppCenterService extends com.microsoft.appcenter.utils.ApplicationLifecycleListener.ApplicationLifecycleCallbacks {
				public static class: java.lang.Class<com.microsoft.appcenter.AppCenterService>;
				/**
				 * Constructs a new instance of the com.microsoft.appcenter.AppCenterService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					isInstanceEnabled(): boolean;
					setInstanceEnabled(param0: boolean): void;
					isAppSecretRequired(): boolean;
					getServiceName(): string;
					getLogFactories(): java.util.Map<string,com.microsoft.appcenter.ingestion.models.json.LogFactory>;
					onStarting(param0: com.microsoft.appcenter.AppCenterHandler): void;
					onStarted(param0: globalAndroid.content.Context, param1: com.microsoft.appcenter.channel.Channel, param2: string, param3: string, param4: boolean): void;
					onConfigurationUpdated(param0: string, param1: string): void;
					onApplicationEnterForeground(): void;
					onApplicationEnterBackground(): void;
				});
				public constructor();
				public isInstanceEnabled(): boolean;
				public getServiceName(): string;
				public isAppSecretRequired(): boolean;
				public onApplicationEnterForeground(): void;
				public onConfigurationUpdated(param0: string, param1: string): void;
				public setInstanceEnabled(param0: boolean): void;
				public onStarted(param0: globalAndroid.content.Context, param1: com.microsoft.appcenter.channel.Channel, param2: string, param3: string, param4: boolean): void;
				public onApplicationEnterBackground(): void;
				public getLogFactories(): java.util.Map<string,com.microsoft.appcenter.ingestion.models.json.LogFactory>;
				public onStarting(param0: com.microsoft.appcenter.AppCenterHandler): void;
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export class BuildConfig {
				public static class: java.lang.Class<com.microsoft.appcenter.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public static SDK_NAME: string;
				public static MIN_SDK_VERSION: number;
				public static TARGET_SDK_VERSION: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export class CancellationException {
				public static class: java.lang.Class<com.microsoft.appcenter.CancellationException>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export class Constants {
				public static class: java.lang.Class<com.microsoft.appcenter.Constants>;
				public static APP_SECRET: string;
				public static COMMON_SCHEMA_PREFIX_SEPARATOR: string;
				public static AUTHORIZATION_HEADER: string;
				public static DATABASE: string;
				public static READONLY_TABLE: string;
				public static USER_TABLE_FORMAT: string;
				public static FILES_PATH: string;
				public static WRAPPER_SDK_NAME_NDK: string;
				public static APPLICATION_DEBUGGABLE: boolean;
				public static DEFAULT_TRIGGER_INTERVAL: number;
				public static loadFromContext(param0: globalAndroid.content.Context): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export class CustomProperties {
				public static class: java.lang.Class<com.microsoft.appcenter.CustomProperties>;
				public set(param0: string, param1: boolean): com.microsoft.appcenter.CustomProperties;
				public clear(param0: string): com.microsoft.appcenter.CustomProperties;
				public set(param0: string, param1: java.util.Date): com.microsoft.appcenter.CustomProperties;
				public set(param0: string, param1: string): com.microsoft.appcenter.CustomProperties;
				public set(param0: string, param1: java.lang.Number): com.microsoft.appcenter.CustomProperties;
				public constructor();
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export class DependencyConfiguration {
				public static class: java.lang.Class<com.microsoft.appcenter.DependencyConfiguration>;
				public static getHttpClient(): com.microsoft.appcenter.http.HttpClient;
				public static setHttpClient(param0: com.microsoft.appcenter.http.HttpClient): void;
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export class Flags {
				public static class: java.lang.Class<com.microsoft.appcenter.Flags>;
				public static NORMAL: number;
				public static PERSISTENCE_NORMAL: number;
				public static CRITICAL: number;
				public static PERSISTENCE_CRITICAL: number;
				public static DEFAULTS: number;
				public static getPersistenceFlag(param0: number, param1: boolean): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export class ServiceInstrumentationUtils {
				public static class: java.lang.Class<com.microsoft.appcenter.ServiceInstrumentationUtils>;
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export class UncaughtExceptionHandler {
				public static class: java.lang.Class<com.microsoft.appcenter.UncaughtExceptionHandler>;
				public uncaughtException(param0: java.lang.Thread, param1: java.lang.Throwable): void;
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module analytics {
				export class Analytics extends com.microsoft.appcenter.AbstractAppCenterService {
					public static class: java.lang.Class<com.microsoft.appcenter.analytics.Analytics>;
					public static LOG_TAG: string;
					public applyEnabledState(param0: boolean): void;
					public onConfigurationUpdated(param0: string, param1: string): void;
					public onStarting(param0: com.microsoft.appcenter.AppCenterHandler): void;
					public getServiceName(): string;
					public static trackEvent(param0: string, param1: com.microsoft.appcenter.analytics.EventProperties): void;
					public getChannelListener(): com.microsoft.appcenter.channel.Channel.GroupListener;
					public post(param0: java.lang.Runnable): void;
					public getLogFactories(): java.util.Map<string,com.microsoft.appcenter.ingestion.models.json.LogFactory>;
					public static isAutoPageTrackingEnabled(): boolean;
					public getTriggerInterval(): number;
					public onStarted(param0: globalAndroid.content.Context, param1: com.microsoft.appcenter.channel.Channel, param2: string, param3: string, param4: boolean): void;
					public static trackPage(param0: string): void;
					public getGroupName(): string;
					public static pause(): void;
					public onActivityResumed(param0: globalAndroid.app.Activity): void;
					public onActivityPaused(param0: globalAndroid.app.Activity): void;
					public static setAutoPageTrackingEnabled(param0: boolean): void;
					public static trackPage(param0: string, param1: java.util.Map<string,string>): void;
					public static setTransmissionInterval(param0: number): boolean;
					public static trackEvent(param0: string, param1: java.util.Map<string,string>): void;
					public setInstanceEnabled(param0: boolean): void;
					public static setListener(param0: com.microsoft.appcenter.analytics.channel.AnalyticsListener): void;
					public static trackEvent(param0: string, param1: java.util.Map<string,string>, param2: number): void;
					public static trackEvent(param0: string): void;
					public isAppSecretRequired(): boolean;
					public isInstanceEnabled(): boolean;
					public static resume(): void;
					public static getInstance(): com.microsoft.appcenter.analytics.Analytics;
					public static isEnabled(): com.microsoft.appcenter.utils.async.AppCenterFuture<java.lang.Boolean>;
					public static trackEvent(param0: string, param1: com.microsoft.appcenter.analytics.EventProperties, param2: number): void;
					public getLoggerTag(): string;
					public static setEnabled(param0: boolean): com.microsoft.appcenter.utils.async.AppCenterFuture<java.lang.Void>;
					public static getTransmissionTarget(param0: string): com.microsoft.appcenter.analytics.AnalyticsTransmissionTarget;
					public post(param0: java.lang.Runnable, param1: java.lang.Runnable, param2: java.lang.Runnable): boolean;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module analytics {
				export class AnalyticsTransmissionTarget {
					public static class: java.lang.Class<com.microsoft.appcenter.analytics.AnalyticsTransmissionTarget>;
					public getPropertyConfigurator(): com.microsoft.appcenter.analytics.PropertyConfigurator;
					public static addAuthenticationProvider(param0: com.microsoft.appcenter.analytics.AuthenticationProvider): void;
					public trackEvent(param0: string): void;
					public setEnabledAsync(param0: boolean): com.microsoft.appcenter.utils.async.AppCenterFuture<java.lang.Void>;
					public pause(): void;
					public resume(): void;
					public isEnabledAsync(): com.microsoft.appcenter.utils.async.AppCenterFuture<java.lang.Boolean>;
					public getTransmissionTarget(param0: string): com.microsoft.appcenter.analytics.AnalyticsTransmissionTarget;
					public trackEvent(param0: string, param1: com.microsoft.appcenter.analytics.EventProperties, param2: number): void;
					public trackEvent(param0: string, param1: java.util.Map<string,string>, param2: number): void;
					public trackEvent(param0: string, param1: com.microsoft.appcenter.analytics.EventProperties): void;
					public trackEvent(param0: string, param1: java.util.Map<string,string>): void;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module analytics {
				export class AuthenticationProvider {
					public static class: java.lang.Class<com.microsoft.appcenter.analytics.AuthenticationProvider>;
					public constructor(param0: com.microsoft.appcenter.analytics.AuthenticationProvider.Type, param1: string, param2: com.microsoft.appcenter.analytics.AuthenticationProvider.TokenProvider);
				}
				export module AuthenticationProvider {
					export class AuthenticationCallback {
						public static class: java.lang.Class<com.microsoft.appcenter.analytics.AuthenticationProvider.AuthenticationCallback>;
						/**
						 * Constructs a new instance of the com.microsoft.appcenter.analytics.AuthenticationProvider$AuthenticationCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAuthenticationResult(param0: string, param1: java.util.Date): void;
						});
						public constructor();
						public onAuthenticationResult(param0: string, param1: java.util.Date): void;
					}
					export class TokenProvider {
						public static class: java.lang.Class<com.microsoft.appcenter.analytics.AuthenticationProvider.TokenProvider>;
						/**
						 * Constructs a new instance of the com.microsoft.appcenter.analytics.AuthenticationProvider$TokenProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							acquireToken(param0: string, param1: com.microsoft.appcenter.analytics.AuthenticationProvider.AuthenticationCallback): void;
						});
						public constructor();
						public acquireToken(param0: string, param1: com.microsoft.appcenter.analytics.AuthenticationProvider.AuthenticationCallback): void;
					}
					export class Type {
						public static class: java.lang.Class<com.microsoft.appcenter.analytics.AuthenticationProvider.Type>;
						public static MSA_COMPACT: com.microsoft.appcenter.analytics.AuthenticationProvider.Type;
						public static MSA_DELEGATE: com.microsoft.appcenter.analytics.AuthenticationProvider.Type;
						public static valueOf(param0: string): com.microsoft.appcenter.analytics.AuthenticationProvider.Type;
						public static values(): native.Array<com.microsoft.appcenter.analytics.AuthenticationProvider.Type>;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module analytics {
				export class BuildConfig {
					public static class: java.lang.Class<com.microsoft.appcenter.analytics.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static BUILD_TYPE: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public static SDK_NAME: string;
					public static MIN_SDK_VERSION: number;
					public static TARGET_SDK_VERSION: number;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module analytics {
				export class EventProperties {
					public static class: java.lang.Class<com.microsoft.appcenter.analytics.EventProperties>;
					public set(param0: string, param1: boolean): com.microsoft.appcenter.analytics.EventProperties;
					public set(param0: string, param1: number): com.microsoft.appcenter.analytics.EventProperties;
					public constructor();
					public set(param0: string, param1: string): com.microsoft.appcenter.analytics.EventProperties;
					public set(param0: string, param1: java.util.Date): com.microsoft.appcenter.analytics.EventProperties;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module analytics {
				export class PropertyConfigurator extends com.microsoft.appcenter.channel.AbstractChannelListener {
					public static class: java.lang.Class<com.microsoft.appcenter.analytics.PropertyConfigurator>;
					public setEventProperty(param0: string, param1: string): void;
					public setAppLocale(param0: string): void;
					public onGroupAdded(param0: string, param1: com.microsoft.appcenter.channel.Channel.GroupListener, param2: number): void;
					public onGloballyEnabled(param0: boolean): void;
					public onPreparingLog(param0: com.microsoft.appcenter.ingestion.models.Log, param1: string): void;
					public setEventProperty(param0: string, param1: number): void;
					public removeEventProperty(param0: string): void;
					public onPreparedLog(param0: com.microsoft.appcenter.ingestion.models.Log, param1: string, param2: number): void;
					public onResumed(param0: string, param1: string): void;
					public onGroupRemoved(param0: string): void;
					public setAppVersion(param0: string): void;
					public collectDeviceId(): void;
					public setEventProperty(param0: string, param1: java.util.Date): void;
					public setAppName(param0: string): void;
					public setUserId(param0: string): void;
					public onPaused(param0: string, param1: string): void;
					public shouldFilter(param0: com.microsoft.appcenter.ingestion.models.Log): boolean;
					public onClear(param0: string): void;
					public setEventProperty(param0: string, param1: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module analytics {
				export module channel {
					export class AnalyticsListener {
						public static class: java.lang.Class<com.microsoft.appcenter.analytics.channel.AnalyticsListener>;
						/**
						 * Constructs a new instance of the com.microsoft.appcenter.analytics.channel.AnalyticsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onBeforeSending(param0: com.microsoft.appcenter.ingestion.models.Log): void;
							onSendingFailed(param0: com.microsoft.appcenter.ingestion.models.Log, param1: java.lang.Exception): void;
							onSendingSucceeded(param0: com.microsoft.appcenter.ingestion.models.Log): void;
						});
						public constructor();
						public onSendingSucceeded(param0: com.microsoft.appcenter.ingestion.models.Log): void;
						public onBeforeSending(param0: com.microsoft.appcenter.ingestion.models.Log): void;
						public onSendingFailed(param0: com.microsoft.appcenter.ingestion.models.Log, param1: java.lang.Exception): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module analytics {
				export module channel {
					export class AnalyticsValidator extends com.microsoft.appcenter.channel.AbstractChannelListener {
						public static class: java.lang.Class<com.microsoft.appcenter.analytics.channel.AnalyticsValidator>;
						public onPaused(param0: string, param1: string): void;
						public constructor();
						public onPreparingLog(param0: com.microsoft.appcenter.ingestion.models.Log, param1: string): void;
						public onClear(param0: string): void;
						public onGloballyEnabled(param0: boolean): void;
						public onPreparedLog(param0: com.microsoft.appcenter.ingestion.models.Log, param1: string, param2: number): void;
						public onGroupRemoved(param0: string): void;
						public onGroupAdded(param0: string, param1: com.microsoft.appcenter.channel.Channel.GroupListener, param2: number): void;
						public onResumed(param0: string, param1: string): void;
						public shouldFilter(param0: com.microsoft.appcenter.ingestion.models.Log): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module analytics {
				export module channel {
					export class SessionTracker extends com.microsoft.appcenter.channel.AbstractChannelListener {
						public static class: java.lang.Class<com.microsoft.appcenter.analytics.channel.SessionTracker>;
						public constructor();
						public onGloballyEnabled(param0: boolean): void;
						public onActivityResumed(): void;
						public clearSessions(): void;
						public shouldFilter(param0: com.microsoft.appcenter.ingestion.models.Log): boolean;
						public onPaused(param0: string, param1: string): void;
						public onPreparingLog(param0: com.microsoft.appcenter.ingestion.models.Log, param1: string): void;
						public onClear(param0: string): void;
						public onActivityPaused(): void;
						public onPreparedLog(param0: com.microsoft.appcenter.ingestion.models.Log, param1: string, param2: number): void;
						public onGroupRemoved(param0: string): void;
						public onGroupAdded(param0: string, param1: com.microsoft.appcenter.channel.Channel.GroupListener, param2: number): void;
						public constructor(param0: com.microsoft.appcenter.channel.Channel, param1: string);
						public onResumed(param0: string, param1: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module analytics {
				export module ingestion {
					export module models {
						export class EventLog extends com.microsoft.appcenter.analytics.ingestion.models.LogWithNameAndProperties {
							public static class: java.lang.Class<com.microsoft.appcenter.analytics.ingestion.models.EventLog>;
							public static TYPE: string;
							public constructor();
							public getDevice(): com.microsoft.appcenter.ingestion.models.Device;
							public hashCode(): number;
							public getDistributionGroupId(): string;
							public setId(param0: java.util.UUID): void;
							public setTag(param0: any): void;
							public getUserId(): string;
							public getTimestamp(): java.util.Date;
							public setDevice(param0: com.microsoft.appcenter.ingestion.models.Device): void;
							public setSid(param0: java.util.UUID): void;
							public setDistributionGroupId(param0: string): void;
							public write(param0: org.json.JSONStringer): void;
							public setTimestamp(param0: java.util.Date): void;
							public read(param0: org.json.JSONObject): void;
							public getTag(): any;
							public setUserId(param0: string): void;
							public getId(): java.util.UUID;
							public setTypedProperties(param0: java.util.List<com.microsoft.appcenter.ingestion.models.properties.TypedProperty>): void;
							public getTransmissionTargetTokens(): java.util.Set<string>;
							public getTypedProperties(): java.util.List<com.microsoft.appcenter.ingestion.models.properties.TypedProperty>;
							public equals(param0: any): boolean;
							public addTransmissionTarget(param0: string): void;
							public getType(): string;
							public getSid(): java.util.UUID;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module analytics {
				export module ingestion {
					export module models {
						export abstract class LogWithNameAndProperties extends com.microsoft.appcenter.ingestion.models.LogWithProperties {
							public static class: java.lang.Class<com.microsoft.appcenter.analytics.ingestion.models.LogWithNameAndProperties>;
							public constructor();
							public getDevice(): com.microsoft.appcenter.ingestion.models.Device;
							public hashCode(): number;
							public getDistributionGroupId(): string;
							public setTag(param0: any): void;
							public getUserId(): string;
							public setName(param0: string): void;
							public getTimestamp(): java.util.Date;
							public setDevice(param0: com.microsoft.appcenter.ingestion.models.Device): void;
							public setSid(param0: java.util.UUID): void;
							public setDistributionGroupId(param0: string): void;
							public write(param0: org.json.JSONStringer): void;
							public setTimestamp(param0: java.util.Date): void;
							public read(param0: org.json.JSONObject): void;
							public getName(): string;
							public getTag(): any;
							public setUserId(param0: string): void;
							public getTransmissionTargetTokens(): java.util.Set<string>;
							public equals(param0: any): boolean;
							public addTransmissionTarget(param0: string): void;
							public getType(): string;
							public getSid(): java.util.UUID;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module analytics {
				export module ingestion {
					export module models {
						export class PageLog extends com.microsoft.appcenter.analytics.ingestion.models.LogWithNameAndProperties {
							public static class: java.lang.Class<com.microsoft.appcenter.analytics.ingestion.models.PageLog>;
							public static TYPE: string;
							public constructor();
							public getDevice(): com.microsoft.appcenter.ingestion.models.Device;
							public getDistributionGroupId(): string;
							public setTag(param0: any): void;
							public getUserId(): string;
							public getTimestamp(): java.util.Date;
							public setDevice(param0: com.microsoft.appcenter.ingestion.models.Device): void;
							public setSid(param0: java.util.UUID): void;
							public setDistributionGroupId(param0: string): void;
							public setTimestamp(param0: java.util.Date): void;
							public getTag(): any;
							public setUserId(param0: string): void;
							public getTransmissionTargetTokens(): java.util.Set<string>;
							public addTransmissionTarget(param0: string): void;
							public getType(): string;
							public getSid(): java.util.UUID;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module analytics {
				export module ingestion {
					export module models {
						export class StartSessionLog extends com.microsoft.appcenter.ingestion.models.AbstractLog {
							public static class: java.lang.Class<com.microsoft.appcenter.analytics.ingestion.models.StartSessionLog>;
							public static TYPE: string;
							public constructor();
							public getDevice(): com.microsoft.appcenter.ingestion.models.Device;
							public getDistributionGroupId(): string;
							public setTag(param0: any): void;
							public getUserId(): string;
							public getTimestamp(): java.util.Date;
							public setDevice(param0: com.microsoft.appcenter.ingestion.models.Device): void;
							public setSid(param0: java.util.UUID): void;
							public setDistributionGroupId(param0: string): void;
							public setTimestamp(param0: java.util.Date): void;
							public getTag(): any;
							public setUserId(param0: string): void;
							public getTransmissionTargetTokens(): java.util.Set<string>;
							public addTransmissionTarget(param0: string): void;
							public getType(): string;
							public getSid(): java.util.UUID;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module analytics {
				export module ingestion {
					export module models {
						export module json {
							export class EventLogFactory extends com.microsoft.appcenter.ingestion.models.json.AbstractLogFactory {
								public static class: java.lang.Class<com.microsoft.appcenter.analytics.ingestion.models.json.EventLogFactory>;
								public toCommonSchemaLogs(param0: com.microsoft.appcenter.ingestion.models.Log): java.util.Collection<com.microsoft.appcenter.ingestion.models.one.CommonSchemaLog>;
								public create(): com.microsoft.appcenter.ingestion.models.Log;
								public constructor();
								public create(): com.microsoft.appcenter.analytics.ingestion.models.EventLog;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module analytics {
				export module ingestion {
					export module models {
						export module json {
							export class PageLogFactory extends com.microsoft.appcenter.ingestion.models.json.AbstractLogFactory {
								public static class: java.lang.Class<com.microsoft.appcenter.analytics.ingestion.models.json.PageLogFactory>;
								public toCommonSchemaLogs(param0: com.microsoft.appcenter.ingestion.models.Log): java.util.Collection<com.microsoft.appcenter.ingestion.models.one.CommonSchemaLog>;
								public create(): com.microsoft.appcenter.ingestion.models.Log;
								public constructor();
								public create(): com.microsoft.appcenter.analytics.ingestion.models.PageLog;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module analytics {
				export module ingestion {
					export module models {
						export module json {
							export class StartSessionLogFactory extends com.microsoft.appcenter.ingestion.models.json.AbstractLogFactory {
								public static class: java.lang.Class<com.microsoft.appcenter.analytics.ingestion.models.json.StartSessionLogFactory>;
								public toCommonSchemaLogs(param0: com.microsoft.appcenter.ingestion.models.Log): java.util.Collection<com.microsoft.appcenter.ingestion.models.one.CommonSchemaLog>;
								public create(): com.microsoft.appcenter.analytics.ingestion.models.StartSessionLog;
								public create(): com.microsoft.appcenter.ingestion.models.Log;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module analytics {
				export module ingestion {
					export module models {
						export module one {
							export class CommonSchemaEventLog extends com.microsoft.appcenter.ingestion.models.one.CommonSchemaLog {
								public static class: java.lang.Class<com.microsoft.appcenter.analytics.ingestion.models.one.CommonSchemaEventLog>;
								public static TYPE: string;
								public getUserId(): string;
								public getTransmissionTargetTokens(): java.util.Set<string>;
								public addTransmissionTarget(param0: string): void;
								public getTimestamp(): java.util.Date;
								public constructor();
								public setUserId(param0: string): void;
								public getDevice(): com.microsoft.appcenter.ingestion.models.Device;
								public getSid(): java.util.UUID;
								public setTimestamp(param0: java.util.Date): void;
								public setDevice(param0: com.microsoft.appcenter.ingestion.models.Device): void;
								public setDistributionGroupId(param0: string): void;
								public getDistributionGroupId(): string;
								public getTag(): any;
								public setTag(param0: any): void;
								public getType(): string;
								public setSid(param0: java.util.UUID): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module analytics {
				export module ingestion {
					export module models {
						export module one {
							export module json {
								export class CommonSchemaEventLogFactory extends com.microsoft.appcenter.ingestion.models.json.AbstractLogFactory {
									public static class: java.lang.Class<com.microsoft.appcenter.analytics.ingestion.models.one.json.CommonSchemaEventLogFactory>;
									public constructor();
									public create(): com.microsoft.appcenter.ingestion.models.Log;
									public toCommonSchemaLogs(param0: com.microsoft.appcenter.ingestion.models.Log): java.util.Collection<com.microsoft.appcenter.ingestion.models.one.CommonSchemaLog>;
									public create(): com.microsoft.appcenter.analytics.ingestion.models.one.CommonSchemaEventLog;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module channel {
				export class AbstractChannelListener extends com.microsoft.appcenter.channel.Channel.Listener {
					public static class: java.lang.Class<com.microsoft.appcenter.channel.AbstractChannelListener>;
					public onGroupRemoved(param0: string): void;
					public onGroupAdded(param0: string, param1: com.microsoft.appcenter.channel.Channel.GroupListener, param2: number): void;
					public onGloballyEnabled(param0: boolean): void;
					public constructor();
					public onPreparingLog(param0: com.microsoft.appcenter.ingestion.models.Log, param1: string): void;
					public onPreparedLog(param0: com.microsoft.appcenter.ingestion.models.Log, param1: string, param2: number): void;
					public onResumed(param0: string, param1: string): void;
					public onPaused(param0: string, param1: string): void;
					public shouldFilter(param0: com.microsoft.appcenter.ingestion.models.Log): boolean;
					public onClear(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module channel {
				export class Channel {
					public static class: java.lang.Class<com.microsoft.appcenter.channel.Channel>;
					/**
					 * Constructs a new instance of the com.microsoft.appcenter.channel.Channel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setAppSecret(param0: string): void;
						setMaxStorageSize(param0: number): boolean;
						addGroup(param0: string, param1: number, param2: number, param3: number, param4: com.microsoft.appcenter.ingestion.Ingestion, param5: com.microsoft.appcenter.channel.Channel.GroupListener): void;
						removeGroup(param0: string): void;
						pauseGroup(param0: string, param1: string): void;
						resumeGroup(param0: string, param1: string): void;
						enqueue(param0: com.microsoft.appcenter.ingestion.models.Log, param1: string, param2: number): void;
						isEnabled(): boolean;
						setEnabled(param0: boolean): void;
						setLogUrl(param0: string): void;
						clear(param0: string): void;
						invalidateDeviceCache(): void;
						addListener(param0: com.microsoft.appcenter.channel.Channel.Listener): void;
						removeListener(param0: com.microsoft.appcenter.channel.Channel.Listener): void;
						shutdown(): void;
					});
					public constructor();
					public enqueue(param0: com.microsoft.appcenter.ingestion.models.Log, param1: string, param2: number): void;
					public setEnabled(param0: boolean): void;
					public clear(param0: string): void;
					public pauseGroup(param0: string, param1: string): void;
					public addGroup(param0: string, param1: number, param2: number, param3: number, param4: com.microsoft.appcenter.ingestion.Ingestion, param5: com.microsoft.appcenter.channel.Channel.GroupListener): void;
					public setLogUrl(param0: string): void;
					public shutdown(): void;
					public setAppSecret(param0: string): void;
					public removeGroup(param0: string): void;
					public resumeGroup(param0: string, param1: string): void;
					public addListener(param0: com.microsoft.appcenter.channel.Channel.Listener): void;
					public removeListener(param0: com.microsoft.appcenter.channel.Channel.Listener): void;
					public invalidateDeviceCache(): void;
					public isEnabled(): boolean;
					public setMaxStorageSize(param0: number): boolean;
				}
				export module Channel {
					export class GroupListener {
						public static class: java.lang.Class<com.microsoft.appcenter.channel.Channel.GroupListener>;
						/**
						 * Constructs a new instance of the com.microsoft.appcenter.channel.Channel$GroupListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onBeforeSending(param0: com.microsoft.appcenter.ingestion.models.Log): void;
							onSuccess(param0: com.microsoft.appcenter.ingestion.models.Log): void;
							onFailure(param0: com.microsoft.appcenter.ingestion.models.Log, param1: java.lang.Exception): void;
						});
						public constructor();
						public onBeforeSending(param0: com.microsoft.appcenter.ingestion.models.Log): void;
						public onSuccess(param0: com.microsoft.appcenter.ingestion.models.Log): void;
						public onFailure(param0: com.microsoft.appcenter.ingestion.models.Log, param1: java.lang.Exception): void;
					}
					export class Listener {
						public static class: java.lang.Class<com.microsoft.appcenter.channel.Channel.Listener>;
						/**
						 * Constructs a new instance of the com.microsoft.appcenter.channel.Channel$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onGroupAdded(param0: string, param1: com.microsoft.appcenter.channel.Channel.GroupListener, param2: number): void;
							onGroupRemoved(param0: string): void;
							onPreparingLog(param0: com.microsoft.appcenter.ingestion.models.Log, param1: string): void;
							onPreparedLog(param0: com.microsoft.appcenter.ingestion.models.Log, param1: string, param2: number): void;
							shouldFilter(param0: com.microsoft.appcenter.ingestion.models.Log): boolean;
							onGloballyEnabled(param0: boolean): void;
							onClear(param0: string): void;
							onPaused(param0: string, param1: string): void;
							onResumed(param0: string, param1: string): void;
						});
						public constructor();
						public onPaused(param0: string, param1: string): void;
						public onPreparingLog(param0: com.microsoft.appcenter.ingestion.models.Log, param1: string): void;
						public onClear(param0: string): void;
						public onGloballyEnabled(param0: boolean): void;
						public onPreparedLog(param0: com.microsoft.appcenter.ingestion.models.Log, param1: string, param2: number): void;
						public onGroupRemoved(param0: string): void;
						public onGroupAdded(param0: string, param1: com.microsoft.appcenter.channel.Channel.GroupListener, param2: number): void;
						public onResumed(param0: string, param1: string): void;
						public shouldFilter(param0: com.microsoft.appcenter.ingestion.models.Log): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module channel {
				export class DefaultChannel extends com.microsoft.appcenter.channel.Channel {
					public static class: java.lang.Class<com.microsoft.appcenter.channel.DefaultChannel>;
					public setEnabled(param0: boolean): void;
					public enqueue(param0: com.microsoft.appcenter.ingestion.models.Log, param1: string, param2: number): void;
					public clear(param0: string): void;
					public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.microsoft.appcenter.ingestion.models.json.LogSerializer, param3: com.microsoft.appcenter.http.HttpClient, param4: globalAndroid.os.Handler);
					public pauseGroup(param0: string, param1: string): void;
					public addGroup(param0: string, param1: number, param2: number, param3: number, param4: com.microsoft.appcenter.ingestion.Ingestion, param5: com.microsoft.appcenter.channel.Channel.GroupListener): void;
					public setLogUrl(param0: string): void;
					public shutdown(): void;
					public setAppSecret(param0: string): void;
					public removeGroup(param0: string): void;
					public resumeGroup(param0: string, param1: string): void;
					public addListener(param0: com.microsoft.appcenter.channel.Channel.Listener): void;
					public removeListener(param0: com.microsoft.appcenter.channel.Channel.Listener): void;
					public invalidateDeviceCache(): void;
					public isEnabled(): boolean;
					public setMaxStorageSize(param0: number): boolean;
				}
				export module DefaultChannel {
					export class GroupState {
						public static class: java.lang.Class<com.microsoft.appcenter.channel.DefaultChannel.GroupState>;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module channel {
				export class OneCollectorChannelListener extends com.microsoft.appcenter.channel.AbstractChannelListener {
					public static class: java.lang.Class<com.microsoft.appcenter.channel.OneCollectorChannelListener>;
					public constructor(param0: com.microsoft.appcenter.channel.Channel, param1: com.microsoft.appcenter.ingestion.models.json.LogSerializer, param2: com.microsoft.appcenter.http.HttpClient, param3: java.util.UUID);
					public onGroupRemoved(param0: string): void;
					public onGroupAdded(param0: string, param1: com.microsoft.appcenter.channel.Channel.GroupListener, param2: number): void;
					public onGloballyEnabled(param0: boolean): void;
					public constructor();
					public onPreparingLog(param0: com.microsoft.appcenter.ingestion.models.Log, param1: string): void;
					public onPreparedLog(param0: com.microsoft.appcenter.ingestion.models.Log, param1: string, param2: number): void;
					public onResumed(param0: string, param1: string): void;
					public setLogUrl(param0: string): void;
					public onPaused(param0: string, param1: string): void;
					public shouldFilter(param0: com.microsoft.appcenter.ingestion.models.Log): boolean;
					public onClear(param0: string): void;
				}
				export module OneCollectorChannelListener {
					export class EpochAndSeq {
						public static class: java.lang.Class<com.microsoft.appcenter.channel.OneCollectorChannelListener.EpochAndSeq>;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module crashes {
				export abstract class AbstractCrashesListener extends com.microsoft.appcenter.crashes.CrashesListener {
					public static class: java.lang.Class<com.microsoft.appcenter.crashes.AbstractCrashesListener>;
					public constructor();
					public onSendingFailed(param0: com.microsoft.appcenter.crashes.model.ErrorReport, param1: java.lang.Exception): void;
					public getErrorAttachments(param0: com.microsoft.appcenter.crashes.model.ErrorReport): java.lang.Iterable<com.microsoft.appcenter.crashes.ingestion.models.ErrorAttachmentLog>;
					public shouldProcess(param0: com.microsoft.appcenter.crashes.model.ErrorReport): boolean;
					public onSendingSucceeded(param0: com.microsoft.appcenter.crashes.model.ErrorReport): void;
					public onBeforeSending(param0: com.microsoft.appcenter.crashes.model.ErrorReport): void;
					public shouldAwaitUserConfirmation(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module crashes {
				export class BuildConfig {
					public static class: java.lang.Class<com.microsoft.appcenter.crashes.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static BUILD_TYPE: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public static SDK_NAME: string;
					public static MIN_SDK_VERSION: number;
					public static TARGET_SDK_VERSION: number;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module crashes {
				export class Crashes extends com.microsoft.appcenter.AbstractAppCenterService {
					public static class: java.lang.Class<com.microsoft.appcenter.crashes.Crashes>;
					public static SEND: number;
					public static DONT_SEND: number;
					public static ALWAYS_SEND: number;
					public static PREF_KEY_ALWAYS_SEND: string;
					public static LOG_TAG: string;
					public applyEnabledState(param0: boolean): void;
					public onConfigurationUpdated(param0: string, param1: string): void;
					public static getMinidumpDirectory(): com.microsoft.appcenter.utils.async.AppCenterFuture<string>;
					public onStarting(param0: com.microsoft.appcenter.AppCenterHandler): void;
					public getTriggerCount(): number;
					public getServiceName(): string;
					public static trackError(param0: java.lang.Throwable): void;
					public static setListener(param0: com.microsoft.appcenter.crashes.CrashesListener): void;
					public getChannelListener(): com.microsoft.appcenter.channel.Channel.GroupListener;
					public getLogFactories(): java.util.Map<string,com.microsoft.appcenter.ingestion.models.json.LogFactory>;
					public static getInstance(): com.microsoft.appcenter.crashes.Crashes;
					public onStarted(param0: globalAndroid.content.Context, param1: com.microsoft.appcenter.channel.Channel, param2: string, param3: string, param4: boolean): void;
					public getGroupName(): string;
					public static trackError(param0: java.lang.Throwable, param1: java.util.Map<string,string>, param2: java.lang.Iterable<com.microsoft.appcenter.crashes.ingestion.models.ErrorAttachmentLog>): void;
					public static generateTestCrash(): void;
					public static hasReceivedMemoryWarningInLastSession(): com.microsoft.appcenter.utils.async.AppCenterFuture<java.lang.Boolean>;
					public setInstanceEnabled(param0: boolean): void;
					public static getLastSessionCrashReport(): com.microsoft.appcenter.utils.async.AppCenterFuture<com.microsoft.appcenter.crashes.model.ErrorReport>;
					public saveUncaughtException(param0: java.lang.Thread, param1: java.lang.Throwable): java.util.UUID;
					public isAppSecretRequired(): boolean;
					public isInstanceEnabled(): boolean;
					public static hasCrashedInLastSession(): com.microsoft.appcenter.utils.async.AppCenterFuture<java.lang.Boolean>;
					public static isEnabled(): com.microsoft.appcenter.utils.async.AppCenterFuture<java.lang.Boolean>;
					public getLoggerTag(): string;
					public static setEnabled(param0: boolean): com.microsoft.appcenter.utils.async.AppCenterFuture<java.lang.Void>;
					public static notifyUserConfirmation(param0: number): void;
				}
				export module Crashes {
					export class CallbackProcessor {
						public static class: java.lang.Class<com.microsoft.appcenter.crashes.Crashes.CallbackProcessor>;
						/**
						 * Constructs a new instance of the com.microsoft.appcenter.crashes.Crashes$CallbackProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCallBack(param0: com.microsoft.appcenter.crashes.model.ErrorReport): void;
						});
						public constructor();
						public onCallBack(param0: com.microsoft.appcenter.crashes.model.ErrorReport): void;
					}
					export class DefaultCrashesListener extends com.microsoft.appcenter.crashes.AbstractCrashesListener {
						public static class: java.lang.Class<com.microsoft.appcenter.crashes.Crashes.DefaultCrashesListener>;
						public onBeforeSending(param0: com.microsoft.appcenter.crashes.model.ErrorReport): void;
						public onSendingSucceeded(param0: com.microsoft.appcenter.crashes.model.ErrorReport): void;
						public shouldAwaitUserConfirmation(): boolean;
						public shouldProcess(param0: com.microsoft.appcenter.crashes.model.ErrorReport): boolean;
						public onSendingFailed(param0: com.microsoft.appcenter.crashes.model.ErrorReport, param1: java.lang.Exception): void;
						public getErrorAttachments(param0: com.microsoft.appcenter.crashes.model.ErrorReport): java.lang.Iterable<com.microsoft.appcenter.crashes.ingestion.models.ErrorAttachmentLog>;
					}
					export class ErrorLogReport {
						public static class: java.lang.Class<com.microsoft.appcenter.crashes.Crashes.ErrorLogReport>;
					}
					export class ExceptionModelBuilder {
						public static class: java.lang.Class<com.microsoft.appcenter.crashes.Crashes.ExceptionModelBuilder>;
						/**
						 * Constructs a new instance of the com.microsoft.appcenter.crashes.Crashes$ExceptionModelBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							buildExceptionModel(): com.microsoft.appcenter.crashes.ingestion.models.Exception;
						});
						public constructor();
						public buildExceptionModel(): com.microsoft.appcenter.crashes.ingestion.models.Exception;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module crashes {
				export class CrashesListener {
					public static class: java.lang.Class<com.microsoft.appcenter.crashes.CrashesListener>;
					/**
					 * Constructs a new instance of the com.microsoft.appcenter.crashes.CrashesListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						shouldProcess(param0: com.microsoft.appcenter.crashes.model.ErrorReport): boolean;
						shouldAwaitUserConfirmation(): boolean;
						getErrorAttachments(param0: com.microsoft.appcenter.crashes.model.ErrorReport): java.lang.Iterable<com.microsoft.appcenter.crashes.ingestion.models.ErrorAttachmentLog>;
						onBeforeSending(param0: com.microsoft.appcenter.crashes.model.ErrorReport): void;
						onSendingFailed(param0: com.microsoft.appcenter.crashes.model.ErrorReport, param1: java.lang.Exception): void;
						onSendingSucceeded(param0: com.microsoft.appcenter.crashes.model.ErrorReport): void;
					});
					public constructor();
					public onSendingFailed(param0: com.microsoft.appcenter.crashes.model.ErrorReport, param1: java.lang.Exception): void;
					public getErrorAttachments(param0: com.microsoft.appcenter.crashes.model.ErrorReport): java.lang.Iterable<com.microsoft.appcenter.crashes.ingestion.models.ErrorAttachmentLog>;
					public shouldProcess(param0: com.microsoft.appcenter.crashes.model.ErrorReport): boolean;
					public onSendingSucceeded(param0: com.microsoft.appcenter.crashes.model.ErrorReport): void;
					public onBeforeSending(param0: com.microsoft.appcenter.crashes.model.ErrorReport): void;
					public shouldAwaitUserConfirmation(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module crashes {
				export class UncaughtExceptionHandler {
					public static class: java.lang.Class<com.microsoft.appcenter.crashes.UncaughtExceptionHandler>;
					public uncaughtException(param0: java.lang.Thread, param1: java.lang.Throwable): void;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module crashes {
				export class WrapperSdkExceptionManager {
					public static class: java.lang.Class<com.microsoft.appcenter.crashes.WrapperSdkExceptionManager>;
					public static loadWrapperExceptionData(param0: java.util.UUID): string;
					public static saveWrapperException(param0: java.lang.Thread, param1: java.lang.Throwable, param2: com.microsoft.appcenter.crashes.ingestion.models.Exception, param3: string): java.util.UUID;
					public static getUnprocessedErrorReports(): com.microsoft.appcenter.utils.async.AppCenterFuture<java.util.Collection<com.microsoft.appcenter.crashes.model.ErrorReport>>;
					public static deleteWrapperExceptionData(param0: java.util.UUID): void;
					public static trackException(param0: com.microsoft.appcenter.crashes.ingestion.models.Exception, param1: java.util.Map<string,string>, param2: java.lang.Iterable<com.microsoft.appcenter.crashes.ingestion.models.ErrorAttachmentLog>): string;
					public static setAutomaticProcessing(param0: boolean): void;
					public static buildHandledErrorReport(param0: globalAndroid.content.Context, param1: string): com.microsoft.appcenter.crashes.model.ErrorReport;
					public static sendErrorAttachments(param0: string, param1: java.lang.Iterable<com.microsoft.appcenter.crashes.ingestion.models.ErrorAttachmentLog>): void;
					public static sendCrashReportsOrAwaitUserConfirmation(param0: java.util.Collection<string>): com.microsoft.appcenter.utils.async.AppCenterFuture<java.lang.Boolean>;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module crashes {
				export module ingestion {
					export module models {
						export abstract class AbstractErrorLog extends com.microsoft.appcenter.ingestion.models.AbstractLog {
							public static class: java.lang.Class<com.microsoft.appcenter.crashes.ingestion.models.AbstractErrorLog>;
							public getProcessName(): string;
							public getErrorThreadId(): java.lang.Long;
							public setAppLaunchTimestamp(param0: java.util.Date): void;
							public setArchitecture(param0: string): void;
							public hashCode(): number;
							public setId(param0: java.util.UUID): void;
							public getParentProcessName(): string;
							public setTag(param0: any): void;
							public setParentProcessName(param0: string): void;
							public getAppLaunchTimestamp(): java.util.Date;
							public getUserId(): string;
							public getTimestamp(): java.util.Date;
							public setSid(param0: java.util.UUID): void;
							public setDistributionGroupId(param0: string): void;
							public setErrorThreadId(param0: java.lang.Long): void;
							public setTimestamp(param0: java.util.Date): void;
							public getProcessId(): java.lang.Integer;
							public setParentProcessId(param0: java.lang.Integer): void;
							public getTag(): any;
							public getId(): java.util.UUID;
							public getTransmissionTargetTokens(): java.util.Set<string>;
							public addTransmissionTarget(param0: string): void;
							public getType(): string;
							public getSid(): java.util.UUID;
							public constructor();
							public getParentProcessId(): java.lang.Integer;
							public getErrorThreadName(): string;
							public getDevice(): com.microsoft.appcenter.ingestion.models.Device;
							public getDistributionGroupId(): string;
							public setProcessId(param0: java.lang.Integer): void;
							public setDevice(param0: com.microsoft.appcenter.ingestion.models.Device): void;
							public setFatal(param0: java.lang.Boolean): void;
							public getArchitecture(): string;
							public write(param0: org.json.JSONStringer): void;
							public setProcessName(param0: string): void;
							public read(param0: org.json.JSONObject): void;
							public setErrorThreadName(param0: string): void;
							public setUserId(param0: string): void;
							public getFatal(): java.lang.Boolean;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module crashes {
				export module ingestion {
					export module models {
						export class ErrorAttachmentLog extends com.microsoft.appcenter.ingestion.models.AbstractLog {
							public static class: java.lang.Class<com.microsoft.appcenter.crashes.ingestion.models.ErrorAttachmentLog>;
							public static CONTENT_TYPE_TEXT_PLAIN: string;
							public static TYPE: string;
							public hashCode(): number;
							public setId(param0: java.util.UUID): void;
							public setData(param0: native.Array<number>): void;
							public setTag(param0: any): void;
							public getUserId(): string;
							public getErrorId(): java.util.UUID;
							public getTimestamp(): java.util.Date;
							public setSid(param0: java.util.UUID): void;
							public setDistributionGroupId(param0: string): void;
							public getData(): native.Array<number>;
							public isValid(): boolean;
							public setTimestamp(param0: java.util.Date): void;
							public getTag(): any;
							public getId(): java.util.UUID;
							public getContentType(): string;
							public setContentType(param0: string): void;
							public static attachmentWithText(param0: string, param1: string): com.microsoft.appcenter.crashes.ingestion.models.ErrorAttachmentLog;
							public getTransmissionTargetTokens(): java.util.Set<string>;
							public static attachmentWithBinary(param0: native.Array<number>, param1: string, param2: string): com.microsoft.appcenter.crashes.ingestion.models.ErrorAttachmentLog;
							public addTransmissionTarget(param0: string): void;
							public getType(): string;
							public getSid(): java.util.UUID;
							public constructor();
							public getDevice(): com.microsoft.appcenter.ingestion.models.Device;
							public getDistributionGroupId(): string;
							public setFileName(param0: string): void;
							public setErrorId(param0: java.util.UUID): void;
							public setDevice(param0: com.microsoft.appcenter.ingestion.models.Device): void;
							public write(param0: org.json.JSONStringer): void;
							public read(param0: org.json.JSONObject): void;
							public setUserId(param0: string): void;
							public getFileName(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module crashes {
				export module ingestion {
					export module models {
						export class Exception extends com.microsoft.appcenter.ingestion.models.Model {
							public static class: java.lang.Class<com.microsoft.appcenter.crashes.ingestion.models.Exception>;
							public constructor();
							public setInnerExceptions(param0: java.util.List<com.microsoft.appcenter.crashes.ingestion.models.Exception>): void;
							public setStackTrace(param0: string): void;
							public setType(param0: string): void;
							public hashCode(): number;
							public getWrapperSdkName(): string;
							public getMinidumpFilePath(): string;
							public getInnerExceptions(): java.util.List<com.microsoft.appcenter.crashes.ingestion.models.Exception>;
							public setMessage(param0: string): void;
							public setWrapperSdkName(param0: string): void;
							public getFrames(): java.util.List<com.microsoft.appcenter.crashes.ingestion.models.StackFrame>;
							public getStackTrace(): string;
							public write(param0: org.json.JSONStringer): void;
							public setMinidumpFilePath(param0: string): void;
							public read(param0: org.json.JSONObject): void;
							public setFrames(param0: java.util.List<com.microsoft.appcenter.crashes.ingestion.models.StackFrame>): void;
							public equals(param0: any): boolean;
							public getMessage(): string;
							public getType(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module crashes {
				export module ingestion {
					export module models {
						export class HandledErrorLog extends com.microsoft.appcenter.ingestion.models.LogWithProperties {
							public static class: java.lang.Class<com.microsoft.appcenter.crashes.ingestion.models.HandledErrorLog>;
							public static TYPE: string;
							public constructor();
							public getDevice(): com.microsoft.appcenter.ingestion.models.Device;
							public getException(): com.microsoft.appcenter.crashes.ingestion.models.Exception;
							public hashCode(): number;
							public getDistributionGroupId(): string;
							public setId(param0: java.util.UUID): void;
							public setTag(param0: any): void;
							public getUserId(): string;
							public getTimestamp(): java.util.Date;
							public setDevice(param0: com.microsoft.appcenter.ingestion.models.Device): void;
							public setSid(param0: java.util.UUID): void;
							public setDistributionGroupId(param0: string): void;
							public write(param0: org.json.JSONStringer): void;
							public setTimestamp(param0: java.util.Date): void;
							public read(param0: org.json.JSONObject): void;
							public getTag(): any;
							public setException(param0: com.microsoft.appcenter.crashes.ingestion.models.Exception): void;
							public setUserId(param0: string): void;
							public getId(): java.util.UUID;
							public getTransmissionTargetTokens(): java.util.Set<string>;
							public equals(param0: any): boolean;
							public addTransmissionTarget(param0: string): void;
							public getType(): string;
							public getSid(): java.util.UUID;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module crashes {
				export module ingestion {
					export module models {
						export class ManagedErrorLog extends com.microsoft.appcenter.crashes.ingestion.models.AbstractErrorLog {
							public static class: java.lang.Class<com.microsoft.appcenter.crashes.ingestion.models.ManagedErrorLog>;
							public static TYPE: string;
							public constructor();
							public getDevice(): com.microsoft.appcenter.ingestion.models.Device;
							public getException(): com.microsoft.appcenter.crashes.ingestion.models.Exception;
							public hashCode(): number;
							public getDistributionGroupId(): string;
							public setTag(param0: any): void;
							public getUserId(): string;
							public getThreads(): java.util.List<com.microsoft.appcenter.crashes.ingestion.models.Thread>;
							public setThreads(param0: java.util.List<com.microsoft.appcenter.crashes.ingestion.models.Thread>): void;
							public getTimestamp(): java.util.Date;
							public setDevice(param0: com.microsoft.appcenter.ingestion.models.Device): void;
							public setSid(param0: java.util.UUID): void;
							public setDistributionGroupId(param0: string): void;
							public write(param0: org.json.JSONStringer): void;
							public setTimestamp(param0: java.util.Date): void;
							public read(param0: org.json.JSONObject): void;
							public getTag(): any;
							public setException(param0: com.microsoft.appcenter.crashes.ingestion.models.Exception): void;
							public setUserId(param0: string): void;
							public getTransmissionTargetTokens(): java.util.Set<string>;
							public equals(param0: any): boolean;
							public addTransmissionTarget(param0: string): void;
							public getType(): string;
							public getSid(): java.util.UUID;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module crashes {
				export module ingestion {
					export module models {
						export class StackFrame extends com.microsoft.appcenter.ingestion.models.Model {
							public static class: java.lang.Class<com.microsoft.appcenter.crashes.ingestion.models.StackFrame>;
							public constructor();
							public getLineNumber(): java.lang.Integer;
							public setMethodName(param0: string): void;
							public setLineNumber(param0: java.lang.Integer): void;
							public hashCode(): number;
							public setFileName(param0: string): void;
							public getMethodName(): string;
							public write(param0: org.json.JSONStringer): void;
							public getClassName(): string;
							public read(param0: org.json.JSONObject): void;
							public setClassName(param0: string): void;
							public getFileName(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module crashes {
				export module ingestion {
					export module models {
						export class Thread extends com.microsoft.appcenter.ingestion.models.Model {
							public static class: java.lang.Class<com.microsoft.appcenter.crashes.ingestion.models.Thread>;
							public constructor();
							public write(param0: org.json.JSONStringer): void;
							public setId(param0: number): void;
							public read(param0: org.json.JSONObject): void;
							public hashCode(): number;
							public getName(): string;
							public getId(): number;
							public setFrames(param0: java.util.List<com.microsoft.appcenter.crashes.ingestion.models.StackFrame>): void;
							public setName(param0: string): void;
							public equals(param0: any): boolean;
							public getFrames(): java.util.List<com.microsoft.appcenter.crashes.ingestion.models.StackFrame>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module crashes {
				export module ingestion {
					export module models {
						export module json {
							export class ErrorAttachmentLogFactory extends com.microsoft.appcenter.ingestion.models.json.AbstractLogFactory {
								public static class: java.lang.Class<com.microsoft.appcenter.crashes.ingestion.models.json.ErrorAttachmentLogFactory>;
								public toCommonSchemaLogs(param0: com.microsoft.appcenter.ingestion.models.Log): java.util.Collection<com.microsoft.appcenter.ingestion.models.one.CommonSchemaLog>;
								public static getInstance(): com.microsoft.appcenter.crashes.ingestion.models.json.ErrorAttachmentLogFactory;
								public create(): com.microsoft.appcenter.ingestion.models.Log;
								public create(): com.microsoft.appcenter.crashes.ingestion.models.ErrorAttachmentLog;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module crashes {
				export module ingestion {
					export module models {
						export module json {
							export class ExceptionFactory extends com.microsoft.appcenter.ingestion.models.json.ModelFactory<com.microsoft.appcenter.crashes.ingestion.models.Exception> {
								public static class: java.lang.Class<com.microsoft.appcenter.crashes.ingestion.models.json.ExceptionFactory>;
								public create(): any;
								public static getInstance(): com.microsoft.appcenter.crashes.ingestion.models.json.ExceptionFactory;
								public createList(param0: number): java.util.List<com.microsoft.appcenter.crashes.ingestion.models.Exception>;
								public createList(param0: number): java.util.List<any>;
								public create(): com.microsoft.appcenter.crashes.ingestion.models.Exception;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module crashes {
				export module ingestion {
					export module models {
						export module json {
							export class HandledErrorLogFactory extends com.microsoft.appcenter.ingestion.models.json.AbstractLogFactory {
								public static class: java.lang.Class<com.microsoft.appcenter.crashes.ingestion.models.json.HandledErrorLogFactory>;
								public static getInstance(): com.microsoft.appcenter.crashes.ingestion.models.json.HandledErrorLogFactory;
								public toCommonSchemaLogs(param0: com.microsoft.appcenter.ingestion.models.Log): java.util.Collection<com.microsoft.appcenter.ingestion.models.one.CommonSchemaLog>;
								public create(): com.microsoft.appcenter.ingestion.models.Log;
								public create(): com.microsoft.appcenter.crashes.ingestion.models.HandledErrorLog;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module crashes {
				export module ingestion {
					export module models {
						export module json {
							export class ManagedErrorLogFactory extends com.microsoft.appcenter.ingestion.models.json.AbstractLogFactory {
								public static class: java.lang.Class<com.microsoft.appcenter.crashes.ingestion.models.json.ManagedErrorLogFactory>;
								public static getInstance(): com.microsoft.appcenter.crashes.ingestion.models.json.ManagedErrorLogFactory;
								public create(): com.microsoft.appcenter.crashes.ingestion.models.ManagedErrorLog;
								public toCommonSchemaLogs(param0: com.microsoft.appcenter.ingestion.models.Log): java.util.Collection<com.microsoft.appcenter.ingestion.models.one.CommonSchemaLog>;
								public create(): com.microsoft.appcenter.ingestion.models.Log;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module crashes {
				export module ingestion {
					export module models {
						export module json {
							export class StackFrameFactory extends com.microsoft.appcenter.ingestion.models.json.ModelFactory<com.microsoft.appcenter.crashes.ingestion.models.StackFrame> {
								public static class: java.lang.Class<com.microsoft.appcenter.crashes.ingestion.models.json.StackFrameFactory>;
								public create(): any;
								public createList(param0: number): java.util.List<any>;
								public createList(param0: number): java.util.List<com.microsoft.appcenter.crashes.ingestion.models.StackFrame>;
								public static getInstance(): com.microsoft.appcenter.crashes.ingestion.models.json.StackFrameFactory;
								public create(): com.microsoft.appcenter.crashes.ingestion.models.StackFrame;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module crashes {
				export module ingestion {
					export module models {
						export module json {
							export class ThreadFactory extends com.microsoft.appcenter.ingestion.models.json.ModelFactory<com.microsoft.appcenter.crashes.ingestion.models.Thread> {
								public static class: java.lang.Class<com.microsoft.appcenter.crashes.ingestion.models.json.ThreadFactory>;
								public createList(param0: number): java.util.List<com.microsoft.appcenter.crashes.ingestion.models.Thread>;
								public create(): any;
								public createList(param0: number): java.util.List<any>;
								public create(): com.microsoft.appcenter.crashes.ingestion.models.Thread;
								public static getInstance(): com.microsoft.appcenter.crashes.ingestion.models.json.ThreadFactory;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module crashes {
				export module model {
					export class ErrorReport {
						public static class: java.lang.Class<com.microsoft.appcenter.crashes.model.ErrorReport>;
						public setStackTrace(param0: string): void;
						public constructor();
						public setAppStartTime(param0: java.util.Date): void;
						public setDevice(param0: com.microsoft.appcenter.ingestion.models.Device): void;
						public setId(param0: string): void;
						public setAppErrorTime(param0: java.util.Date): void;
						public getAppStartTime(): java.util.Date;
						public getStackTrace(): string;
						/** @deprecated */
						public getThrowable(): java.lang.Throwable;
						public getAppErrorTime(): java.util.Date;
						public getThreadName(): string;
						public setThreadName(param0: string): void;
						public getId(): string;
						public getDevice(): com.microsoft.appcenter.ingestion.models.Device;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module crashes {
				export module model {
					export class NativeException {
						public static class: java.lang.Class<com.microsoft.appcenter.crashes.model.NativeException>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module crashes {
				export module model {
					export class TestCrashException {
						public static class: java.lang.Class<com.microsoft.appcenter.crashes.model.TestCrashException>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module crashes {
				export module utils {
					export class ErrorLogHelper {
						public static class: java.lang.Class<com.microsoft.appcenter.crashes.utils.ErrorLogHelper>;
						public static DEVICE_INFO_FILE: string;
						public static ERROR_LOG_FILE_EXTENSION: string;
						public static THROWABLE_FILE_EXTENSION: string;
						public static FRAME_LIMIT: number;
						public static MAX_PROPERTY_ITEM_LENGTH: number;
						public static MINIDUMP_FILE_EXTENSION: string;
						public static getPendingMinidumpDirectory(): java.io.File;
						public constructor();
						public static createErrorLog(param0: globalAndroid.content.Context, param1: java.lang.Thread, param2: java.lang.Throwable, param3: java.util.Map<java.lang.Thread,native.Array<java.lang.StackTraceElement>>, param4: number): com.microsoft.appcenter.crashes.ingestion.models.ManagedErrorLog;
						public static getErrorReportFromErrorLog(param0: com.microsoft.appcenter.crashes.ingestion.models.ManagedErrorLog, param1: string): com.microsoft.appcenter.crashes.model.ErrorReport;
						public static getStoredErrorLogFiles(): native.Array<java.io.File>;
						public static getNewMinidumpSubfolderWithContextData(param0: globalAndroid.content.Context): java.io.File;
						public static getStoredDeviceInfo(param0: java.io.File): com.microsoft.appcenter.ingestion.models.Device;
						public static cleanPendingMinidumps(): void;
						public static getNewMinidumpDirectory(): java.io.File;
						public static getLastErrorLogFile(): java.io.File;
						public static getNewMinidumpFiles(): native.Array<java.io.File>;
						public static getNewMinidumpSubfolder(): java.io.File;
						public static removeMinidumpFolder(): void;
						public static removeLostThrowableFiles(): void;
						public static getStoredThrowableFile(param0: java.util.UUID): java.io.File;
						public static getErrorStorageDirectory(): java.io.File;
						public static getModelExceptionFromThrowable(param0: java.lang.Throwable): com.microsoft.appcenter.crashes.ingestion.models.Exception;
						public static clearStaticState(): void;
						public static removeStaleMinidumpSubfolders(): void;
						public static createErrorLog(param0: globalAndroid.content.Context, param1: java.lang.Thread, param2: com.microsoft.appcenter.crashes.ingestion.models.Exception, param3: java.util.Map<java.lang.Thread,native.Array<java.lang.StackTraceElement>>, param4: number, param5: boolean): com.microsoft.appcenter.crashes.ingestion.models.ManagedErrorLog;
						public static parseLogFolderUuid(param0: java.io.File): java.util.UUID;
						public static validateProperties(param0: java.util.Map<string,string>, param1: string): java.util.Map<string,string>;
						public static removeStoredErrorLogFile(param0: java.util.UUID): void;
						public static removeStoredThrowableFile(param0: java.util.UUID): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module distribute {
				export class BrowserUtils {
					public static class: java.lang.Class<com.microsoft.appcenter.distribute.BrowserUtils>;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module distribute {
				export class BuildConfig {
					public static class: java.lang.Class<com.microsoft.appcenter.distribute.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static BUILD_TYPE: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public static SDK_NAME: string;
					public static MIN_SDK_VERSION: number;
					public static TARGET_SDK_VERSION: number;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module distribute {
				export class DeepLinkActivity {
					public static class: java.lang.Class<com.microsoft.appcenter.distribute.DeepLinkActivity>;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module distribute {
				export class Distribute extends com.microsoft.appcenter.AbstractAppCenterService {
					public static class: java.lang.Class<com.microsoft.appcenter.distribute.Distribute>;
					public applyEnabledState(param0: boolean): void;
					public static setEnabledForDebuggableBuild(param0: boolean): void;
					public onConfigurationUpdated(param0: string, param1: string): void;
					public static setUpdateTrack(param0: number): void;
					public onStarting(param0: com.microsoft.appcenter.AppCenterHandler): void;
					public getTriggerCount(): number;
					public getServiceName(): string;
					public getLogFactories(): java.util.Map<string,com.microsoft.appcenter.ingestion.models.json.LogFactory>;
					public static setApiUrl(param0: string): void;
					public onStarted(param0: globalAndroid.content.Context, param1: com.microsoft.appcenter.channel.Channel, param2: string, param3: string, param4: boolean): void;
					public getGroupName(): string;
					public static setListener(param0: com.microsoft.appcenter.distribute.DistributeListener): void;
					public onActivityResumed(param0: globalAndroid.app.Activity): void;
					public onActivityPaused(param0: globalAndroid.app.Activity): void;
					public static disableAutomaticCheckForUpdate(): void;
					public static getInstance(): com.microsoft.appcenter.distribute.Distribute;
					public setInstanceEnabled(param0: boolean): void;
					public static notifyUpdateAction(param0: number): void;
					public static getUpdateTrack(): number;
					public isAppSecretRequired(): boolean;
					public isInstanceEnabled(): boolean;
					public onApplicationEnterForeground(): void;
					public static isEnabled(): com.microsoft.appcenter.utils.async.AppCenterFuture<java.lang.Boolean>;
					public static setInstallUrl(param0: string): void;
					public static checkForUpdate(): void;
					public getLoggerTag(): string;
					public static setEnabled(param0: boolean): com.microsoft.appcenter.utils.async.AppCenterFuture<java.lang.Void>;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module distribute {
				export class DistributeConstants {
					public static class: java.lang.Class<com.microsoft.appcenter.distribute.DistributeConstants>;
					public static LOG_TAG: string;
					public static INVALID_DOWNLOAD_IDENTIFIER: number;
					public static HANDLER_TOKEN_CHECK_PROGRESS: string;
					public static UPDATE_PROGRESS_BYTES_THRESHOLD: number;
					public static UPDATE_PROGRESS_TIME_THRESHOLD: number;
					public static KIBIBYTE_IN_BYTES: number;
					public static PREFERENCE_KEY_DOWNLOAD_ID: string;
					public static PREFERENCE_KEY_DOWNLOADED_RELEASE_FILE: string;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module distribute {
				export class DistributeListener {
					public static class: java.lang.Class<com.microsoft.appcenter.distribute.DistributeListener>;
					/**
					 * Constructs a new instance of the com.microsoft.appcenter.distribute.DistributeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onReleaseAvailable(param0: globalAndroid.app.Activity, param1: com.microsoft.appcenter.distribute.ReleaseDetails): boolean;
						onNoReleaseAvailable(param0: globalAndroid.app.Activity): void;
					});
					public constructor();
					public onReleaseAvailable(param0: globalAndroid.app.Activity, param1: com.microsoft.appcenter.distribute.ReleaseDetails): boolean;
					public onNoReleaseAvailable(param0: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module distribute {
				export class DistributeUtils {
					public static class: java.lang.Class<com.microsoft.appcenter.distribute.DistributeUtils>;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module distribute {
				export class DownloadManagerReceiver {
					public static class: java.lang.Class<com.microsoft.appcenter.distribute.DownloadManagerReceiver>;
					public constructor();
					public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module distribute {
				export class ErrorDetails {
					public static class: java.lang.Class<com.microsoft.appcenter.distribute.ErrorDetails>;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module distribute {
				export class InstallerUtils {
					public static class: java.lang.Class<com.microsoft.appcenter.distribute.InstallerUtils>;
					public static isUnknownSourcesEnabled(param0: globalAndroid.content.Context): boolean;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module distribute {
				export class PermissionUtils {
					public static class: java.lang.Class<com.microsoft.appcenter.distribute.PermissionUtils>;
					public constructor();
					public static permissionsState(param0: globalAndroid.content.Context, param1: native.Array<string>): native.Array<number>;
					public static permissionsAreGranted(param0: native.Array<number>): boolean;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module distribute {
				export class ReleaseDetails {
					public static class: java.lang.Class<com.microsoft.appcenter.distribute.ReleaseDetails>;
					public getShortVersion(): string;
					public getReleaseHash(): string;
					public isMandatoryUpdate(): boolean;
					public getDistributionGroupId(): string;
					public constructor();
					public getVersion(): number;
					public getId(): number;
					public getDownloadUrl(): globalAndroid.net.Uri;
					public getReleaseNotes(): string;
					public getSize(): number;
					public getReleaseNotesUrl(): globalAndroid.net.Uri;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module distribute {
				export class ReleaseDownloadListener extends com.microsoft.appcenter.distribute.download.ReleaseDownloader.Listener {
					public static class: java.lang.Class<com.microsoft.appcenter.distribute.ReleaseDownloadListener>;
					public onError(param0: string): void;
					public onProgress(param0: number, param1: number): boolean;
					public onComplete(param0: globalAndroid.net.Uri): boolean;
					public onStart(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module distribute {
				export class ResumeFromBackgroundTask extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,java.lang.Void> {
					public static class: java.lang.Class<com.microsoft.appcenter.distribute.ResumeFromBackgroundTask>;
					public doInBackground(param0: native.Array<java.lang.Void>): java.lang.Void;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module distribute {
				export class UpdateAction {
					public static class: java.lang.Class<com.microsoft.appcenter.distribute.UpdateAction>;
					/**
					 * Constructs a new instance of the com.microsoft.appcenter.distribute.UpdateAction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static UPDATE: number;
					public static POSTPONE: number;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module distribute {
				export class UpdateTrack {
					public static class: java.lang.Class<com.microsoft.appcenter.distribute.UpdateTrack>;
					/**
					 * Constructs a new instance of the com.microsoft.appcenter.distribute.UpdateTrack interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static PUBLIC: number;
					public static PRIVATE: number;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module distribute {
				export module channel {
					export class DistributeInfoTracker extends com.microsoft.appcenter.channel.AbstractChannelListener {
						public static class: java.lang.Class<com.microsoft.appcenter.distribute.channel.DistributeInfoTracker>;
						public constructor();
						public onGloballyEnabled(param0: boolean): void;
						public shouldFilter(param0: com.microsoft.appcenter.ingestion.models.Log): boolean;
						public onPaused(param0: string, param1: string): void;
						public onPreparingLog(param0: com.microsoft.appcenter.ingestion.models.Log, param1: string): void;
						public onClear(param0: string): void;
						public removeDistributionGroupId(): void;
						public onPreparedLog(param0: com.microsoft.appcenter.ingestion.models.Log, param1: string, param2: number): void;
						public onGroupRemoved(param0: string): void;
						public onGroupAdded(param0: string, param1: com.microsoft.appcenter.channel.Channel.GroupListener, param2: number): void;
						public onResumed(param0: string, param1: string): void;
						public constructor(param0: string);
						public updateDistributionGroupId(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module distribute {
				export module download {
					export abstract class AbstractReleaseDownloader extends com.microsoft.appcenter.distribute.download.ReleaseDownloader {
						public static class: java.lang.Class<com.microsoft.appcenter.distribute.download.AbstractReleaseDownloader>;
						public mContext: globalAndroid.content.Context;
						public mReleaseDetails: com.microsoft.appcenter.distribute.ReleaseDetails;
						public mListener: com.microsoft.appcenter.distribute.download.ReleaseDownloader.Listener;
						public resume(): void;
						public isCancelled(): boolean;
						public cancel(): void;
						public getReleaseDetails(): com.microsoft.appcenter.distribute.ReleaseDetails;
						public isDownloading(): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: com.microsoft.appcenter.distribute.ReleaseDetails, param2: com.microsoft.appcenter.distribute.download.ReleaseDownloader.Listener);
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module distribute {
				export module download {
					export class ReleaseDownloader {
						public static class: java.lang.Class<com.microsoft.appcenter.distribute.download.ReleaseDownloader>;
						/**
						 * Constructs a new instance of the com.microsoft.appcenter.distribute.download.ReleaseDownloader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							isDownloading(): boolean;
							getReleaseDetails(): com.microsoft.appcenter.distribute.ReleaseDetails;
							resume(): void;
							cancel(): void;
						});
						public constructor();
						public resume(): void;
						public cancel(): void;
						public getReleaseDetails(): com.microsoft.appcenter.distribute.ReleaseDetails;
						public isDownloading(): boolean;
					}
					export module ReleaseDownloader {
						export class Listener {
							public static class: java.lang.Class<com.microsoft.appcenter.distribute.download.ReleaseDownloader.Listener>;
							/**
							 * Constructs a new instance of the com.microsoft.appcenter.distribute.download.ReleaseDownloader$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onStart(param0: number): void;
								onProgress(param0: number, param1: number): boolean;
								onComplete(param0: globalAndroid.net.Uri): boolean;
								onError(param0: string): void;
							});
							public constructor();
							public onStart(param0: number): void;
							public onProgress(param0: number, param1: number): boolean;
							public onComplete(param0: globalAndroid.net.Uri): boolean;
							public onError(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module distribute {
				export module download {
					export class ReleaseDownloaderFactory {
						public static class: java.lang.Class<com.microsoft.appcenter.distribute.download.ReleaseDownloaderFactory>;
						public constructor();
						public static create(param0: globalAndroid.content.Context, param1: com.microsoft.appcenter.distribute.ReleaseDetails, param2: com.microsoft.appcenter.distribute.download.ReleaseDownloader.Listener): com.microsoft.appcenter.distribute.download.ReleaseDownloader;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module distribute {
				export module download {
					export module manager {
						export class DownloadManagerReleaseDownloader extends com.microsoft.appcenter.distribute.download.AbstractReleaseDownloader {
							public static class: java.lang.Class<com.microsoft.appcenter.distribute.download.manager.DownloadManagerReleaseDownloader>;
							public cancel(): void;
							public getReleaseDetails(): com.microsoft.appcenter.distribute.ReleaseDetails;
							public constructor(param0: globalAndroid.content.Context, param1: com.microsoft.appcenter.distribute.ReleaseDetails, param2: com.microsoft.appcenter.distribute.download.ReleaseDownloader.Listener);
							public isDownloading(): boolean;
							public resume(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module distribute {
				export module download {
					export module manager {
						export class DownloadManagerRemoveTask extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,java.lang.Void> {
							public static class: java.lang.Class<com.microsoft.appcenter.distribute.download.manager.DownloadManagerRemoveTask>;
							public doInBackground(param0: native.Array<java.lang.Void>): java.lang.Void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module distribute {
				export module download {
					export module manager {
						export class DownloadManagerRequestTask extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,java.lang.Void> {
							public static class: java.lang.Class<com.microsoft.appcenter.distribute.download.manager.DownloadManagerRequestTask>;
							public doInBackground(param0: native.Array<java.lang.Void>): java.lang.Void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module distribute {
				export module download {
					export module manager {
						export class DownloadManagerUpdateTask extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,java.lang.Void> {
							public static class: java.lang.Class<com.microsoft.appcenter.distribute.download.manager.DownloadManagerUpdateTask>;
							public doInBackground(param0: native.Array<java.lang.Void>): java.lang.Void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module distribute {
				export module ingestion {
					export module models {
						export class DistributionStartSessionLog extends com.microsoft.appcenter.ingestion.models.AbstractLog {
							public static class: java.lang.Class<com.microsoft.appcenter.distribute.ingestion.models.DistributionStartSessionLog>;
							public static TYPE: string;
							public constructor();
							public getDevice(): com.microsoft.appcenter.ingestion.models.Device;
							public getDistributionGroupId(): string;
							public setTag(param0: any): void;
							public getUserId(): string;
							public getTimestamp(): java.util.Date;
							public setDevice(param0: com.microsoft.appcenter.ingestion.models.Device): void;
							public setSid(param0: java.util.UUID): void;
							public setDistributionGroupId(param0: string): void;
							public setTimestamp(param0: java.util.Date): void;
							public getTag(): any;
							public setUserId(param0: string): void;
							public getTransmissionTargetTokens(): java.util.Set<string>;
							public addTransmissionTarget(param0: string): void;
							public getType(): string;
							public getSid(): java.util.UUID;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module distribute {
				export module ingestion {
					export module models {
						export module json {
							export class DistributionStartSessionLogFactory extends com.microsoft.appcenter.ingestion.models.json.AbstractLogFactory {
								public static class: java.lang.Class<com.microsoft.appcenter.distribute.ingestion.models.json.DistributionStartSessionLogFactory>;
								public create(): com.microsoft.appcenter.distribute.ingestion.models.DistributionStartSessionLog;
								public toCommonSchemaLogs(param0: com.microsoft.appcenter.ingestion.models.Log): java.util.Collection<com.microsoft.appcenter.ingestion.models.one.CommonSchemaLog>;
								public create(): com.microsoft.appcenter.ingestion.models.Log;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module http {
				export abstract class AbstractAppCallTemplate extends com.microsoft.appcenter.http.HttpClient.CallTemplate {
					public static class: java.lang.Class<com.microsoft.appcenter.http.AbstractAppCallTemplate>;
					public onBeforeCalling(param0: java.net.URL, param1: java.util.Map<string,string>): void;
					public buildRequestBody(): string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module http {
				export class DefaultHttpClient implements com.microsoft.appcenter.http.HttpClient, com.microsoft.appcenter.http.DefaultHttpClientCallTask.Tracker {
					public static class: java.lang.Class<com.microsoft.appcenter.http.DefaultHttpClient>;
					public static METHOD_GET: string;
					public static METHOD_POST: string;
					public static METHOD_DELETE: string;
					public static CONTENT_TYPE_KEY: string;
					public callAsync(param0: string, param1: string, param2: java.util.Map<string,string>, param3: com.microsoft.appcenter.http.HttpClient.CallTemplate, param4: com.microsoft.appcenter.http.ServiceCallback): com.microsoft.appcenter.http.ServiceCall;
					public constructor(param0: boolean);
					public onFinish(param0: com.microsoft.appcenter.http.DefaultHttpClientCallTask): void;
					public constructor();
					public close(): void;
					public reopen(): void;
					public onStart(param0: com.microsoft.appcenter.http.DefaultHttpClientCallTask): void;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module http {
				export class DefaultHttpClientCallTask extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,any> {
					public static class: java.lang.Class<com.microsoft.appcenter.http.DefaultHttpClientCallTask>;
					public onPreExecute(): void;
					public onCancelled(param0: any): void;
					public doInBackground(param0: native.Array<java.lang.Void>): any;
					public onPostExecute(param0: any): void;
				}
				export module DefaultHttpClientCallTask {
					export class Tracker {
						public static class: java.lang.Class<com.microsoft.appcenter.http.DefaultHttpClientCallTask.Tracker>;
						/**
						 * Constructs a new instance of the com.microsoft.appcenter.http.DefaultHttpClientCallTask$Tracker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onStart(param0: com.microsoft.appcenter.http.DefaultHttpClientCallTask): void;
							onFinish(param0: com.microsoft.appcenter.http.DefaultHttpClientCallTask): void;
						});
						public constructor();
						public onFinish(param0: com.microsoft.appcenter.http.DefaultHttpClientCallTask): void;
						public onStart(param0: com.microsoft.appcenter.http.DefaultHttpClientCallTask): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module http {
				export class HttpClient {
					public static class: java.lang.Class<com.microsoft.appcenter.http.HttpClient>;
					/**
					 * Constructs a new instance of the com.microsoft.appcenter.http.HttpClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						callAsync(param0: string, param1: string, param2: java.util.Map<string,string>, param3: com.microsoft.appcenter.http.HttpClient.CallTemplate, param4: com.microsoft.appcenter.http.ServiceCallback): com.microsoft.appcenter.http.ServiceCall;
						reopen(): void;
					});
					public constructor();
					public callAsync(param0: string, param1: string, param2: java.util.Map<string,string>, param3: com.microsoft.appcenter.http.HttpClient.CallTemplate, param4: com.microsoft.appcenter.http.ServiceCallback): com.microsoft.appcenter.http.ServiceCall;
					public reopen(): void;
				}
				export module HttpClient {
					export class CallTemplate {
						public static class: java.lang.Class<com.microsoft.appcenter.http.HttpClient.CallTemplate>;
						/**
						 * Constructs a new instance of the com.microsoft.appcenter.http.HttpClient$CallTemplate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							buildRequestBody(): string;
							onBeforeCalling(param0: java.net.URL, param1: java.util.Map<string,string>): void;
						});
						public constructor();
						public buildRequestBody(): string;
						public onBeforeCalling(param0: java.net.URL, param1: java.util.Map<string,string>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module http {
				export abstract class HttpClientCallDecorator implements com.microsoft.appcenter.http.ServiceCall, com.microsoft.appcenter.http.ServiceCallback {
					public static class: java.lang.Class<com.microsoft.appcenter.http.HttpClientCallDecorator>;
					public onCallSucceeded(param0: com.microsoft.appcenter.http.HttpResponse): void;
					public run(): void;
					public cancel(): void;
					public onCallFailed(param0: java.lang.Exception): void;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module http {
				export abstract class HttpClientDecorator extends com.microsoft.appcenter.http.HttpClient {
					public static class: java.lang.Class<com.microsoft.appcenter.http.HttpClientDecorator>;
					public callAsync(param0: string, param1: string, param2: java.util.Map<string,string>, param3: com.microsoft.appcenter.http.HttpClient.CallTemplate, param4: com.microsoft.appcenter.http.ServiceCallback): com.microsoft.appcenter.http.ServiceCall;
					public close(): void;
					public reopen(): void;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module http {
				export class HttpClientNetworkStateHandler extends com.microsoft.appcenter.http.HttpClientDecorator implements com.microsoft.appcenter.utils.NetworkStateHelper.Listener {
					public static class: java.lang.Class<com.microsoft.appcenter.http.HttpClientNetworkStateHandler>;
					public callAsync(param0: string, param1: string, param2: java.util.Map<string,string>, param3: com.microsoft.appcenter.http.HttpClient.CallTemplate, param4: com.microsoft.appcenter.http.ServiceCallback): com.microsoft.appcenter.http.ServiceCall;
					public constructor(param0: com.microsoft.appcenter.http.HttpClient, param1: com.microsoft.appcenter.utils.NetworkStateHelper);
					public close(): void;
					public onNetworkStateUpdated(param0: boolean): void;
					public reopen(): void;
				}
				export module HttpClientNetworkStateHandler {
					export class Call extends com.microsoft.appcenter.http.HttpClientCallDecorator {
						public static class: java.lang.Class<com.microsoft.appcenter.http.HttpClientNetworkStateHandler.Call>;
						public cancel(): void;
						public onCallFailed(param0: java.lang.Exception): void;
						public onCallSucceeded(param0: com.microsoft.appcenter.http.HttpResponse): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module http {
				export class HttpClientRetryer extends com.microsoft.appcenter.http.HttpClientDecorator {
					public static class: java.lang.Class<com.microsoft.appcenter.http.HttpClientRetryer>;
					public callAsync(param0: string, param1: string, param2: java.util.Map<string,string>, param3: com.microsoft.appcenter.http.HttpClient.CallTemplate, param4: com.microsoft.appcenter.http.ServiceCallback): com.microsoft.appcenter.http.ServiceCall;
					public reopen(): void;
				}
				export module HttpClientRetryer {
					export class RetryableCall extends com.microsoft.appcenter.http.HttpClientCallDecorator {
						public static class: java.lang.Class<com.microsoft.appcenter.http.HttpClientRetryer.RetryableCall>;
						public cancel(): void;
						public onCallFailed(param0: java.lang.Exception): void;
						public onCallSucceeded(param0: com.microsoft.appcenter.http.HttpResponse): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module http {
				export class HttpException {
					public static class: java.lang.Class<com.microsoft.appcenter.http.HttpException>;
					public equals(param0: any): boolean;
					public getHttpResponse(): com.microsoft.appcenter.http.HttpResponse;
					public constructor(param0: com.microsoft.appcenter.http.HttpResponse);
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module http {
				export class HttpResponse {
					public static class: java.lang.Class<com.microsoft.appcenter.http.HttpResponse>;
					public equals(param0: any): boolean;
					public getHeaders(): java.util.Map<string,string>;
					public getStatusCode(): number;
					public constructor(param0: number, param1: string);
					public constructor(param0: number, param1: string, param2: java.util.Map<string,string>);
					public hashCode(): number;
					public constructor(param0: number);
					public getPayload(): string;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module http {
				export class HttpUtils {
					public static class: java.lang.Class<com.microsoft.appcenter.http.HttpUtils>;
					public static THREAD_STATS_TAG: number;
					public static READ_BUFFER_SIZE: number;
					public static WRITE_BUFFER_SIZE: number;
					public static CONNECT_TIMEOUT: number;
					public static READ_TIMEOUT: number;
					public static isRecoverableError(param0: java.lang.Throwable): boolean;
					public static hideTickets(param0: string): string;
					public static hideSecret(param0: string): string;
					public static createHttpClient(param0: globalAndroid.content.Context, param1: boolean): com.microsoft.appcenter.http.HttpClient;
					public static hideApiKeys(param0: string): string;
					public static createHttpClientWithoutRetryer(param0: globalAndroid.content.Context, param1: boolean): com.microsoft.appcenter.http.HttpClient;
					public static createHttpsConnection(param0: java.net.URL): javax.net.ssl.HttpsURLConnection;
					public static createHttpClient(param0: globalAndroid.content.Context): com.microsoft.appcenter.http.HttpClient;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module http {
				export class ServiceCall {
					public static class: java.lang.Class<com.microsoft.appcenter.http.ServiceCall>;
					/**
					 * Constructs a new instance of the com.microsoft.appcenter.http.ServiceCall interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						cancel(): void;
					});
					public constructor();
					public cancel(): void;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module http {
				export class ServiceCallback {
					public static class: java.lang.Class<com.microsoft.appcenter.http.ServiceCallback>;
					/**
					 * Constructs a new instance of the com.microsoft.appcenter.http.ServiceCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCallSucceeded(param0: com.microsoft.appcenter.http.HttpResponse): void;
						onCallFailed(param0: java.lang.Exception): void;
					});
					public constructor();
					public onCallSucceeded(param0: com.microsoft.appcenter.http.HttpResponse): void;
					public onCallFailed(param0: java.lang.Exception): void;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module http {
				export class TLS1_2SocketFactory {
					public static class: java.lang.Class<com.microsoft.appcenter.http.TLS1_2SocketFactory>;
					public getSupportedCipherSuites(): native.Array<string>;
					public createSocket(param0: java.net.Socket, param1: string, param2: number, param3: boolean): javax.net.ssl.SSLSocket;
					public createSocket(): javax.net.ssl.SSLSocket;
					public createSocket(param0: java.net.InetAddress, param1: number, param2: java.net.InetAddress, param3: number): javax.net.ssl.SSLSocket;
					public getDefaultCipherSuites(): native.Array<string>;
					public createSocket(param0: string, param1: number): javax.net.ssl.SSLSocket;
					public createSocket(param0: java.net.InetAddress, param1: number): javax.net.ssl.SSLSocket;
					public createSocket(param0: string, param1: number, param2: java.net.InetAddress, param3: number): javax.net.ssl.SSLSocket;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export class AppCenterIngestion extends com.microsoft.appcenter.ingestion.Ingestion {
					public static class: java.lang.Class<com.microsoft.appcenter.ingestion.AppCenterIngestion>;
					public static DEFAULT_LOG_URL: string;
					public constructor(param0: com.microsoft.appcenter.http.HttpClient, param1: com.microsoft.appcenter.ingestion.models.json.LogSerializer);
					public close(): void;
					public sendAsync(param0: string, param1: java.util.UUID, param2: com.microsoft.appcenter.ingestion.models.LogContainer, param3: com.microsoft.appcenter.http.ServiceCallback): com.microsoft.appcenter.http.ServiceCall;
					public reopen(): void;
					public setLogUrl(param0: string): void;
				}
				export module AppCenterIngestion {
					export class IngestionCallTemplate extends com.microsoft.appcenter.http.AbstractAppCallTemplate {
						public static class: java.lang.Class<com.microsoft.appcenter.ingestion.AppCenterIngestion.IngestionCallTemplate>;
						public buildRequestBody(): string;
						public onBeforeCalling(param0: java.net.URL, param1: java.util.Map<string,string>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export class Ingestion {
					public static class: java.lang.Class<com.microsoft.appcenter.ingestion.Ingestion>;
					/**
					 * Constructs a new instance of the com.microsoft.appcenter.ingestion.Ingestion interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						sendAsync(param0: string, param1: java.util.UUID, param2: com.microsoft.appcenter.ingestion.models.LogContainer, param3: com.microsoft.appcenter.http.ServiceCallback): com.microsoft.appcenter.http.ServiceCall;
						setLogUrl(param0: string): void;
						reopen(): void;
					});
					public constructor();
					public sendAsync(param0: string, param1: java.util.UUID, param2: com.microsoft.appcenter.ingestion.models.LogContainer, param3: com.microsoft.appcenter.http.ServiceCallback): com.microsoft.appcenter.http.ServiceCall;
					public reopen(): void;
					public setLogUrl(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export class OneCollectorIngestion extends com.microsoft.appcenter.ingestion.Ingestion {
					public static class: java.lang.Class<com.microsoft.appcenter.ingestion.OneCollectorIngestion>;
					public constructor(param0: com.microsoft.appcenter.http.HttpClient, param1: com.microsoft.appcenter.ingestion.models.json.LogSerializer);
					public close(): void;
					public sendAsync(param0: string, param1: java.util.UUID, param2: com.microsoft.appcenter.ingestion.models.LogContainer, param3: com.microsoft.appcenter.http.ServiceCallback): com.microsoft.appcenter.http.ServiceCall;
					public reopen(): void;
					public setLogUrl(param0: string): void;
				}
				export module OneCollectorIngestion {
					export class IngestionCallTemplate extends com.microsoft.appcenter.http.HttpClient.CallTemplate {
						public static class: java.lang.Class<com.microsoft.appcenter.ingestion.OneCollectorIngestion.IngestionCallTemplate>;
						public buildRequestBody(): string;
						public onBeforeCalling(param0: java.net.URL, param1: java.util.Map<string,string>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export abstract class AbstractLog extends com.microsoft.appcenter.ingestion.models.Log {
						public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.AbstractLog>;
						public setDistributionGroupId(param0: string): void;
						public getUserId(): string;
						public constructor();
						public addTransmissionTarget(param0: string): void;
						public setTimestamp(param0: java.util.Date): void;
						public getTimestamp(): java.util.Date;
						public setDevice(param0: com.microsoft.appcenter.ingestion.models.Device): void;
						public getType(): string;
						public write(param0: org.json.JSONStringer): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getDistributionGroupId(): string;
						public setUserId(param0: string): void;
						public setTag(param0: any): void;
						public getSid(): java.util.UUID;
						public read(param0: org.json.JSONObject): void;
						public getTransmissionTargetTokens(): java.util.Set<string>;
						public getTag(): any;
						public getDevice(): com.microsoft.appcenter.ingestion.models.Device;
						public setSid(param0: java.util.UUID): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export class CommonProperties {
						public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.CommonProperties>;
						public static TYPE: string;
						public static ID: string;
						public static NAME: string;
						public static VALUE: string;
						public static TYPED_PROPERTIES: string;
						public static FRAMES: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export class CustomPropertiesLog extends com.microsoft.appcenter.ingestion.models.AbstractLog {
						public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.CustomPropertiesLog>;
						public static TYPE: string;
						public setDistributionGroupId(param0: string): void;
						public getUserId(): string;
						public constructor();
						public addTransmissionTarget(param0: string): void;
						public setTimestamp(param0: java.util.Date): void;
						public getTimestamp(): java.util.Date;
						public setDevice(param0: com.microsoft.appcenter.ingestion.models.Device): void;
						public getType(): string;
						public setProperties(param0: java.util.Map<string,any>): void;
						public write(param0: org.json.JSONStringer): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getDistributionGroupId(): string;
						public setUserId(param0: string): void;
						public setTag(param0: any): void;
						public getSid(): java.util.UUID;
						public read(param0: org.json.JSONObject): void;
						public getTransmissionTargetTokens(): java.util.Set<string>;
						public getTag(): any;
						public getProperties(): java.util.Map<string,any>;
						public getDevice(): com.microsoft.appcenter.ingestion.models.Device;
						public setSid(param0: java.util.UUID): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export class Device extends com.microsoft.appcenter.ingestion.models.WrapperSdk {
						public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.Device>;
						public setCarrierCountry(param0: string): void;
						public getOsApiLevel(): java.lang.Integer;
						public getLocale(): string;
						public getOsBuild(): string;
						public setAppBuild(param0: string): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public setOsApiLevel(param0: java.lang.Integer): void;
						public setAppVersion(param0: string): void;
						public setOsBuild(param0: string): void;
						public setModel(param0: string): void;
						public getOsVersion(): string;
						public getSdkName(): string;
						public setScreenSize(param0: string): void;
						public setSdkName(param0: string): void;
						public setOemName(param0: string): void;
						public setSdkVersion(param0: string): void;
						public constructor();
						public getScreenSize(): string;
						public getOsName(): string;
						public write(param0: org.json.JSONStringer): void;
						public getTimeZoneOffset(): java.lang.Integer;
						public setCarrierName(param0: string): void;
						public getAppBuild(): string;
						public setTimeZoneOffset(param0: java.lang.Integer): void;
						public getOemName(): string;
						public setOsVersion(param0: string): void;
						public setLocale(param0: string): void;
						public getModel(): string;
						public getAppVersion(): string;
						public read(param0: org.json.JSONObject): void;
						public getSdkVersion(): string;
						public setAppNamespace(param0: string): void;
						public getAppNamespace(): string;
						public setOsName(param0: string): void;
						public getCarrierCountry(): string;
						public getCarrierName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export class Log extends com.microsoft.appcenter.ingestion.models.Model {
						public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.Log>;
						/**
						 * Constructs a new instance of the com.microsoft.appcenter.ingestion.models.Log interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getType(): string;
							getTimestamp(): java.util.Date;
							setTimestamp(param0: java.util.Date): void;
							getSid(): java.util.UUID;
							setSid(param0: java.util.UUID): void;
							getDistributionGroupId(): string;
							setDistributionGroupId(param0: string): void;
							getUserId(): string;
							setUserId(param0: string): void;
							getDevice(): com.microsoft.appcenter.ingestion.models.Device;
							setDevice(param0: com.microsoft.appcenter.ingestion.models.Device): void;
							addTransmissionTarget(param0: string): void;
							getTransmissionTargetTokens(): java.util.Set<string>;
							getTag(): any;
							setTag(param0: any): void;
							read(param0: org.json.JSONObject): void;
							write(param0: org.json.JSONStringer): void;
						});
						public constructor();
						public setDistributionGroupId(param0: string): void;
						public getUserId(): string;
						public addTransmissionTarget(param0: string): void;
						public setTimestamp(param0: java.util.Date): void;
						public getTimestamp(): java.util.Date;
						public setDevice(param0: com.microsoft.appcenter.ingestion.models.Device): void;
						public getType(): string;
						public write(param0: org.json.JSONStringer): void;
						public getDistributionGroupId(): string;
						public setUserId(param0: string): void;
						public setTag(param0: any): void;
						public getSid(): java.util.UUID;
						public read(param0: org.json.JSONObject): void;
						public getTransmissionTargetTokens(): java.util.Set<string>;
						public getTag(): any;
						public getDevice(): com.microsoft.appcenter.ingestion.models.Device;
						public setSid(param0: java.util.UUID): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export class LogContainer {
						public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.LogContainer>;
						public constructor();
						public setLogs(param0: java.util.List<com.microsoft.appcenter.ingestion.models.Log>): void;
						public getLogs(): java.util.List<com.microsoft.appcenter.ingestion.models.Log>;
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export abstract class LogWithProperties extends com.microsoft.appcenter.ingestion.models.AbstractLog {
						public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.LogWithProperties>;
						public setDistributionGroupId(param0: string): void;
						public getUserId(): string;
						public constructor();
						public addTransmissionTarget(param0: string): void;
						public setTimestamp(param0: java.util.Date): void;
						public getTimestamp(): java.util.Date;
						public setDevice(param0: com.microsoft.appcenter.ingestion.models.Device): void;
						public getType(): string;
						public write(param0: org.json.JSONStringer): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getDistributionGroupId(): string;
						public setUserId(param0: string): void;
						public setTag(param0: any): void;
						public getSid(): java.util.UUID;
						public read(param0: org.json.JSONObject): void;
						public getTransmissionTargetTokens(): java.util.Set<string>;
						public getTag(): any;
						public setProperties(param0: java.util.Map<string,string>): void;
						public getDevice(): com.microsoft.appcenter.ingestion.models.Device;
						public setSid(param0: java.util.UUID): void;
						public getProperties(): java.util.Map<string,string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export class Model {
						public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.Model>;
						/**
						 * Constructs a new instance of the com.microsoft.appcenter.ingestion.models.Model interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							read(param0: org.json.JSONObject): void;
							write(param0: org.json.JSONStringer): void;
						});
						public constructor();
						public read(param0: org.json.JSONObject): void;
						public write(param0: org.json.JSONStringer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export class StartServiceLog extends com.microsoft.appcenter.ingestion.models.AbstractLog {
						public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.StartServiceLog>;
						public static TYPE: string;
						public setDistributionGroupId(param0: string): void;
						public getUserId(): string;
						public constructor();
						public addTransmissionTarget(param0: string): void;
						public setTimestamp(param0: java.util.Date): void;
						public getServices(): java.util.List<string>;
						public getTimestamp(): java.util.Date;
						public setDevice(param0: com.microsoft.appcenter.ingestion.models.Device): void;
						public getType(): string;
						public write(param0: org.json.JSONStringer): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getDistributionGroupId(): string;
						public setUserId(param0: string): void;
						public setTag(param0: any): void;
						public getSid(): java.util.UUID;
						public read(param0: org.json.JSONObject): void;
						public getTransmissionTargetTokens(): java.util.Set<string>;
						public getTag(): any;
						public setServices(param0: java.util.List<string>): void;
						public getDevice(): com.microsoft.appcenter.ingestion.models.Device;
						public setSid(param0: java.util.UUID): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export class WrapperSdk extends com.microsoft.appcenter.ingestion.models.Model {
						public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.WrapperSdk>;
						public constructor();
						public setWrapperRuntimeVersion(param0: string): void;
						public getWrapperRuntimeVersion(): string;
						public getLiveUpdateReleaseLabel(): string;
						public getLiveUpdatePackageHash(): string;
						public write(param0: org.json.JSONStringer): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public setWrapperSdkVersion(param0: string): void;
						public read(param0: org.json.JSONObject): void;
						public getWrapperSdkName(): string;
						public setLiveUpdateDeploymentKey(param0: string): void;
						public setLiveUpdatePackageHash(param0: string): void;
						public setLiveUpdateReleaseLabel(param0: string): void;
						public setWrapperSdkName(param0: string): void;
						public getLiveUpdateDeploymentKey(): string;
						public getWrapperSdkVersion(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module json {
						export abstract class AbstractLogFactory extends com.microsoft.appcenter.ingestion.models.json.LogFactory {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.json.AbstractLogFactory>;
							public constructor();
							public create(): com.microsoft.appcenter.ingestion.models.Log;
							public toCommonSchemaLogs(param0: com.microsoft.appcenter.ingestion.models.Log): java.util.Collection<com.microsoft.appcenter.ingestion.models.one.CommonSchemaLog>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module json {
						export class CustomPropertiesLogFactory extends com.microsoft.appcenter.ingestion.models.json.AbstractLogFactory {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.json.CustomPropertiesLogFactory>;
							public constructor();
							public create(): com.microsoft.appcenter.ingestion.models.Log;
							public toCommonSchemaLogs(param0: com.microsoft.appcenter.ingestion.models.Log): java.util.Collection<com.microsoft.appcenter.ingestion.models.one.CommonSchemaLog>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module json {
						export class DefaultLogSerializer extends com.microsoft.appcenter.ingestion.models.json.LogSerializer {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.json.DefaultLogSerializer>;
							public constructor();
							public deserializeContainer(param0: string, param1: string): com.microsoft.appcenter.ingestion.models.LogContainer;
							public addLogFactory(param0: string, param1: com.microsoft.appcenter.ingestion.models.json.LogFactory): void;
							public serializeContainer(param0: com.microsoft.appcenter.ingestion.models.LogContainer): string;
							public toCommonSchemaLog(param0: com.microsoft.appcenter.ingestion.models.Log): java.util.Collection<com.microsoft.appcenter.ingestion.models.one.CommonSchemaLog>;
							public deserializeLog(param0: string, param1: string): com.microsoft.appcenter.ingestion.models.Log;
							public serializeLog(param0: com.microsoft.appcenter.ingestion.models.Log): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module json {
						export class JSONDateUtils {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.json.JSONDateUtils>;
							public constructor();
							public static toDate(param0: string): java.util.Date;
							public static toString(param0: java.util.Date): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module json {
						export class JSONUtils {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.json.JSONUtils>;
							public static readMap(param0: org.json.JSONObject, param1: string): java.util.Map<string,string>;
							public static readStringArray(param0: org.json.JSONObject, param1: string): java.util.List<string>;
							public static readInteger(param0: org.json.JSONObject, param1: string): java.lang.Integer;
							public static readLong(param0: org.json.JSONObject, param1: string): java.lang.Long;
							public static write(param0: org.json.JSONStringer, param1: string, param2: any): void;
							public static writeMap(param0: org.json.JSONStringer, param1: string, param2: java.util.Map<string,string>): void;
							public static readBoolean(param0: org.json.JSONObject, param1: string): java.lang.Boolean;
							public static writeArray(param0: org.json.JSONStringer, param1: string, param2: java.util.List<any>): void;
							public static readArray(param0: org.json.JSONObject, param1: string, param2: com.microsoft.appcenter.ingestion.models.json.ModelFactory<any>): java.util.List;
							public static writeStringArray(param0: org.json.JSONStringer, param1: string, param2: java.util.List<string>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module json {
						export class LogFactory {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.json.LogFactory>;
							/**
							 * Constructs a new instance of the com.microsoft.appcenter.ingestion.models.json.LogFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								create(): com.microsoft.appcenter.ingestion.models.Log;
								toCommonSchemaLogs(param0: com.microsoft.appcenter.ingestion.models.Log): java.util.Collection<com.microsoft.appcenter.ingestion.models.one.CommonSchemaLog>;
							});
							public constructor();
							public create(): com.microsoft.appcenter.ingestion.models.Log;
							public toCommonSchemaLogs(param0: com.microsoft.appcenter.ingestion.models.Log): java.util.Collection<com.microsoft.appcenter.ingestion.models.one.CommonSchemaLog>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module json {
						export class LogSerializer {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.json.LogSerializer>;
							/**
							 * Constructs a new instance of the com.microsoft.appcenter.ingestion.models.json.LogSerializer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								serializeLog(param0: com.microsoft.appcenter.ingestion.models.Log): string;
								deserializeLog(param0: string, param1: string): com.microsoft.appcenter.ingestion.models.Log;
								toCommonSchemaLog(param0: com.microsoft.appcenter.ingestion.models.Log): java.util.Collection<com.microsoft.appcenter.ingestion.models.one.CommonSchemaLog>;
								serializeContainer(param0: com.microsoft.appcenter.ingestion.models.LogContainer): string;
								deserializeContainer(param0: string, param1: string): com.microsoft.appcenter.ingestion.models.LogContainer;
								addLogFactory(param0: string, param1: com.microsoft.appcenter.ingestion.models.json.LogFactory): void;
							});
							public constructor();
							public deserializeContainer(param0: string, param1: string): com.microsoft.appcenter.ingestion.models.LogContainer;
							public addLogFactory(param0: string, param1: com.microsoft.appcenter.ingestion.models.json.LogFactory): void;
							public serializeContainer(param0: com.microsoft.appcenter.ingestion.models.LogContainer): string;
							public toCommonSchemaLog(param0: com.microsoft.appcenter.ingestion.models.Log): java.util.Collection<com.microsoft.appcenter.ingestion.models.one.CommonSchemaLog>;
							public deserializeLog(param0: string, param1: string): com.microsoft.appcenter.ingestion.models.Log;
							public serializeLog(param0: com.microsoft.appcenter.ingestion.models.Log): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module json {
						export class ModelFactory<M>  extends java.lang.Object {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.json.ModelFactory<any>>;
							/**
							 * Constructs a new instance of the com.microsoft.appcenter.ingestion.models.json.ModelFactory<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								create(): M;
								createList(param0: number): java.util.List<M>;
							});
							public constructor();
							public createList(param0: number): java.util.List<M>;
							public create(): M;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module json {
						export class StartServiceLogFactory extends com.microsoft.appcenter.ingestion.models.json.AbstractLogFactory {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.json.StartServiceLogFactory>;
							public constructor();
							public create(): com.microsoft.appcenter.ingestion.models.Log;
							public toCommonSchemaLogs(param0: com.microsoft.appcenter.ingestion.models.Log): java.util.Collection<com.microsoft.appcenter.ingestion.models.one.CommonSchemaLog>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module one {
						export class AppExtension extends com.microsoft.appcenter.ingestion.models.Model {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.one.AppExtension>;
							public constructor();
							public getVer(): string;
							public setLocale(param0: string): void;
							public hashCode(): number;
							public getId(): string;
							public getLocale(): string;
							public getUserId(): string;
							public setId(param0: string): void;
							public setName(param0: string): void;
							public write(param0: org.json.JSONStringer): void;
							public read(param0: org.json.JSONObject): void;
							public getName(): string;
							public setUserId(param0: string): void;
							public equals(param0: any): boolean;
							public setVer(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module one {
						export class CommonSchemaDataUtils {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.one.CommonSchemaDataUtils>;
							public constructor();
							public static addCommonSchemaData(param0: java.util.List<com.microsoft.appcenter.ingestion.models.properties.TypedProperty>, param1: com.microsoft.appcenter.ingestion.models.one.CommonSchemaLog): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module one {
						export abstract class CommonSchemaLog extends com.microsoft.appcenter.ingestion.models.AbstractLog {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.one.CommonSchemaLog>;
							public hashCode(): number;
							public setTag(param0: any): void;
							public getUserId(): string;
							public getTimestamp(): java.util.Date;
							public setSid(param0: java.util.UUID): void;
							public setDistributionGroupId(param0: string): void;
							public setTimestamp(param0: java.util.Date): void;
							public getFlags(): java.lang.Long;
							public getIKey(): string;
							public getTag(): any;
							public setPopSample(param0: java.lang.Double): void;
							public setCV(param0: string): void;
							public setExt(param0: com.microsoft.appcenter.ingestion.models.one.Extensions): void;
							public setIKey(param0: string): void;
							public getTransmissionTargetTokens(): java.util.Set<string>;
							public addTransmissionTarget(param0: string): void;
							public getType(): string;
							public getSid(): java.util.UUID;
							public setVer(param0: string): void;
							public constructor();
							public setData(param0: com.microsoft.appcenter.ingestion.models.one.Data): void;
							public getDevice(): com.microsoft.appcenter.ingestion.models.Device;
							public getVer(): string;
							public getDistributionGroupId(): string;
							public setFlags(param0: java.lang.Long): void;
							public setName(param0: string): void;
							public setDevice(param0: com.microsoft.appcenter.ingestion.models.Device): void;
							public write(param0: org.json.JSONStringer): void;
							public getData(): com.microsoft.appcenter.ingestion.models.one.Data;
							public getCV(): string;
							public read(param0: org.json.JSONObject): void;
							public getName(): string;
							public setUserId(param0: string): void;
							public getExt(): com.microsoft.appcenter.ingestion.models.one.Extensions;
							public equals(param0: any): boolean;
							public getPopSample(): java.lang.Double;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module one {
						export class Data extends com.microsoft.appcenter.ingestion.models.Model {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.one.Data>;
							public constructor();
							public write(param0: org.json.JSONStringer): void;
							public read(param0: org.json.JSONObject): void;
							public hashCode(): number;
							public getProperties(): org.json.JSONObject;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module one {
						export class DeviceExtension extends com.microsoft.appcenter.ingestion.models.Model {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.one.DeviceExtension>;
							public constructor();
							public write(param0: org.json.JSONStringer): void;
							public read(param0: org.json.JSONObject): void;
							public hashCode(): number;
							public equals(param0: any): boolean;
							public setLocalId(param0: string): void;
							public getLocalId(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module one {
						export class Extensions extends com.microsoft.appcenter.ingestion.models.Model {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.one.Extensions>;
							public constructor();
							public getUser(): com.microsoft.appcenter.ingestion.models.one.UserExtension;
							public setLoc(param0: com.microsoft.appcenter.ingestion.models.one.LocExtension): void;
							public setDevice(param0: com.microsoft.appcenter.ingestion.models.one.DeviceExtension): void;
							public getMetadata(): com.microsoft.appcenter.ingestion.models.one.MetadataExtension;
							public hashCode(): number;
							public getSdk(): com.microsoft.appcenter.ingestion.models.one.SdkExtension;
							public getDevice(): com.microsoft.appcenter.ingestion.models.one.DeviceExtension;
							public getOs(): com.microsoft.appcenter.ingestion.models.one.OsExtension;
							public getNet(): com.microsoft.appcenter.ingestion.models.one.NetExtension;
							public setNet(param0: com.microsoft.appcenter.ingestion.models.one.NetExtension): void;
							public getApp(): com.microsoft.appcenter.ingestion.models.one.AppExtension;
							public getLoc(): com.microsoft.appcenter.ingestion.models.one.LocExtension;
							public setProtocol(param0: com.microsoft.appcenter.ingestion.models.one.ProtocolExtension): void;
							public write(param0: org.json.JSONStringer): void;
							public setApp(param0: com.microsoft.appcenter.ingestion.models.one.AppExtension): void;
							public read(param0: org.json.JSONObject): void;
							public setMetadata(param0: com.microsoft.appcenter.ingestion.models.one.MetadataExtension): void;
							public setUser(param0: com.microsoft.appcenter.ingestion.models.one.UserExtension): void;
							public setOs(param0: com.microsoft.appcenter.ingestion.models.one.OsExtension): void;
							public equals(param0: any): boolean;
							public getProtocol(): com.microsoft.appcenter.ingestion.models.one.ProtocolExtension;
							public setSdk(param0: com.microsoft.appcenter.ingestion.models.one.SdkExtension): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module one {
						export class LocExtension extends com.microsoft.appcenter.ingestion.models.Model {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.one.LocExtension>;
							public constructor();
							public write(param0: org.json.JSONStringer): void;
							public read(param0: org.json.JSONObject): void;
							public hashCode(): number;
							public setTz(param0: string): void;
							public equals(param0: any): boolean;
							public getTz(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module one {
						export class MetadataExtension extends com.microsoft.appcenter.ingestion.models.Model {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.one.MetadataExtension>;
							public constructor();
							public write(param0: org.json.JSONStringer): void;
							public read(param0: org.json.JSONObject): void;
							public hashCode(): number;
							public getMetadata(): org.json.JSONObject;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module one {
						export class NetExtension extends com.microsoft.appcenter.ingestion.models.Model {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.one.NetExtension>;
							public constructor();
							public write(param0: org.json.JSONStringer): void;
							public read(param0: org.json.JSONObject): void;
							public hashCode(): number;
							public getProvider(): string;
							public setProvider(param0: string): void;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module one {
						export class OsExtension extends com.microsoft.appcenter.ingestion.models.Model {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.one.OsExtension>;
							public constructor();
							public write(param0: org.json.JSONStringer): void;
							public getVer(): string;
							public read(param0: org.json.JSONObject): void;
							public hashCode(): number;
							public getName(): string;
							public setName(param0: string): void;
							public equals(param0: any): boolean;
							public setVer(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module one {
						export class PartAUtils {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.one.PartAUtils>;
							public constructor();
							public static addPartAFromLog(param0: com.microsoft.appcenter.ingestion.models.Log, param1: com.microsoft.appcenter.ingestion.models.one.CommonSchemaLog, param2: string): void;
							public static getTargetKey(param0: string): string;
							public static setName(param0: com.microsoft.appcenter.ingestion.models.one.CommonSchemaLog, param1: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module one {
						export class ProtocolExtension extends com.microsoft.appcenter.ingestion.models.Model {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.one.ProtocolExtension>;
							public constructor();
							public getDevMake(): string;
							public write(param0: org.json.JSONStringer): void;
							public setTicketKeys(param0: java.util.List<string>): void;
							public read(param0: org.json.JSONObject): void;
							public hashCode(): number;
							public setDevModel(param0: string): void;
							public getDevModel(): string;
							public equals(param0: any): boolean;
							public getTicketKeys(): java.util.List<string>;
							public setDevMake(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module one {
						export class SdkExtension extends com.microsoft.appcenter.ingestion.models.Model {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.one.SdkExtension>;
							public constructor();
							public getSeq(): java.lang.Long;
							public hashCode(): number;
							public setLibVer(param0: string): void;
							public write(param0: org.json.JSONStringer): void;
							public getEpoch(): string;
							public read(param0: org.json.JSONObject): void;
							public getLibVer(): string;
							public getInstallId(): java.util.UUID;
							public setEpoch(param0: string): void;
							public equals(param0: any): boolean;
							public setInstallId(param0: java.util.UUID): void;
							public setSeq(param0: java.lang.Long): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module one {
						export class UserExtension extends com.microsoft.appcenter.ingestion.models.Model {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.one.UserExtension>;
							public constructor();
							public write(param0: org.json.JSONStringer): void;
							public setLocale(param0: string): void;
							public read(param0: org.json.JSONObject): void;
							public hashCode(): number;
							public getLocale(): string;
							public equals(param0: any): boolean;
							public setLocalId(param0: string): void;
							public getLocalId(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module properties {
						export class BooleanTypedProperty extends com.microsoft.appcenter.ingestion.models.properties.TypedProperty {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.properties.BooleanTypedProperty>;
							public static TYPE: string;
							public constructor();
							public write(param0: org.json.JSONStringer): void;
							public read(param0: org.json.JSONObject): void;
							public setValue(param0: boolean): void;
							public hashCode(): number;
							public getValue(): boolean;
							public equals(param0: any): boolean;
							public getType(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module properties {
						export class DateTimeTypedProperty extends com.microsoft.appcenter.ingestion.models.properties.TypedProperty {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.properties.DateTimeTypedProperty>;
							public static TYPE: string;
							public constructor();
							public write(param0: org.json.JSONStringer): void;
							public getValue(): java.util.Date;
							public read(param0: org.json.JSONObject): void;
							public hashCode(): number;
							public setValue(param0: java.util.Date): void;
							public equals(param0: any): boolean;
							public getType(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module properties {
						export class DoubleTypedProperty extends com.microsoft.appcenter.ingestion.models.properties.TypedProperty {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.properties.DoubleTypedProperty>;
							public static TYPE: string;
							public constructor();
							public write(param0: org.json.JSONStringer): void;
							public read(param0: org.json.JSONObject): void;
							public hashCode(): number;
							public setValue(param0: number): void;
							public equals(param0: any): boolean;
							public getType(): string;
							public getValue(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module properties {
						export class LongTypedProperty extends com.microsoft.appcenter.ingestion.models.properties.TypedProperty {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.properties.LongTypedProperty>;
							public static TYPE: string;
							public constructor();
							public write(param0: org.json.JSONStringer): void;
							public read(param0: org.json.JSONObject): void;
							public hashCode(): number;
							public setValue(param0: number): void;
							public equals(param0: any): boolean;
							public getType(): string;
							public getValue(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module properties {
						export class StringTypedProperty extends com.microsoft.appcenter.ingestion.models.properties.TypedProperty {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.properties.StringTypedProperty>;
							public static TYPE: string;
							public constructor();
							public write(param0: org.json.JSONStringer): void;
							public read(param0: org.json.JSONObject): void;
							public hashCode(): number;
							public setValue(param0: string): void;
							public getValue(): string;
							public equals(param0: any): boolean;
							public getType(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module properties {
						export abstract class TypedProperty extends com.microsoft.appcenter.ingestion.models.Model {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.properties.TypedProperty>;
							public constructor();
							public write(param0: org.json.JSONStringer): void;
							public read(param0: org.json.JSONObject): void;
							public hashCode(): number;
							public getName(): string;
							public setName(param0: string): void;
							public equals(param0: any): boolean;
							public getType(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module ingestion {
				export module models {
					export module properties {
						export class TypedPropertyUtils {
							public static class: java.lang.Class<com.microsoft.appcenter.ingestion.models.properties.TypedPropertyUtils>;
							public constructor();
							public static read(param0: org.json.JSONObject): java.util.List<com.microsoft.appcenter.ingestion.models.properties.TypedProperty>;
							public static create(param0: string): com.microsoft.appcenter.ingestion.models.properties.TypedProperty;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module persistence {
				export class DatabasePersistence extends com.microsoft.appcenter.persistence.Persistence {
					public static class: java.lang.Class<com.microsoft.appcenter.persistence.DatabasePersistence>;
					public constructor(param0: globalAndroid.content.Context);
					public deleteLogs(param0: string, param1: string): void;
					public deleteLogs(param0: string): void;
					public constructor();
					public countLogs(param0: string): number;
					public close(): void;
					public getLogs(param0: string, param1: java.util.Collection<string>, param2: number, param3: java.util.List<com.microsoft.appcenter.ingestion.models.Log>): string;
					public clearPendingLogState(): void;
					public setMaxStorageSize(param0: number): boolean;
					public putLog(param0: com.microsoft.appcenter.ingestion.models.Log, param1: string, param2: number): number;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module persistence {
				export abstract class Persistence {
					public static class: java.lang.Class<com.microsoft.appcenter.persistence.Persistence>;
					public deleteLogs(param0: string, param1: string): void;
					public deleteLogs(param0: string): void;
					public constructor();
					public countLogs(param0: string): number;
					public setLogSerializer(param0: com.microsoft.appcenter.ingestion.models.json.LogSerializer): void;
					public getLogs(param0: string, param1: java.util.Collection<string>, param2: number, param3: java.util.List<com.microsoft.appcenter.ingestion.models.Log>): string;
					public clearPendingLogState(): void;
					public setMaxStorageSize(param0: number): boolean;
					public putLog(param0: com.microsoft.appcenter.ingestion.models.Log, param1: string, param2: number): number;
				}
				export module Persistence {
					export class PersistenceException {
						public static class: java.lang.Class<com.microsoft.appcenter.persistence.Persistence.PersistenceException>;
						public constructor(param0: string, param1: java.lang.Throwable);
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module utils {
				export class AppCenterLog {
					public static class: java.lang.Class<com.microsoft.appcenter.utils.AppCenterLog>;
					public static LOG_TAG: string;
					public static NONE: number;
					public static verbose(param0: string, param1: string): void;
					public static info(param0: string, param1: string): void;
					public static setLogLevel(param0: number): void;
					public static warn(param0: string, param1: string): void;
					public static error(param0: string, param1: string, param2: java.lang.Throwable): void;
					public static logAssert(param0: string, param1: string): void;
					public static getLogLevel(): number;
					public static warn(param0: string, param1: string, param2: java.lang.Throwable): void;
					public constructor();
					public static verbose(param0: string, param1: string, param2: java.lang.Throwable): void;
					public static debug(param0: string, param1: string, param2: java.lang.Throwable): void;
					public static logAssert(param0: string, param1: string, param2: java.lang.Throwable): void;
					public static error(param0: string, param1: string): void;
					public static info(param0: string, param1: string, param2: java.lang.Throwable): void;
					public static debug(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module utils {
				export class AppNameHelper {
					public static class: java.lang.Class<com.microsoft.appcenter.utils.AppNameHelper>;
					public constructor();
					public static getAppName(param0: globalAndroid.content.Context): string;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module utils {
				export class ApplicationLifecycleListener {
					public static class: java.lang.Class<com.microsoft.appcenter.utils.ApplicationLifecycleListener>;
					public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityStarted(param0: globalAndroid.app.Activity): void;
					public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityStopped(param0: globalAndroid.app.Activity): void;
					public registerApplicationLifecycleCallbacks(param0: com.microsoft.appcenter.utils.ApplicationLifecycleListener.ApplicationLifecycleCallbacks): void;
					public constructor(param0: globalAndroid.os.Handler);
					public onActivityResumed(param0: globalAndroid.app.Activity): void;
					public onActivityPaused(param0: globalAndroid.app.Activity): void;
					public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
				}
				export module ApplicationLifecycleListener {
					export class ApplicationLifecycleCallbacks {
						public static class: java.lang.Class<com.microsoft.appcenter.utils.ApplicationLifecycleListener.ApplicationLifecycleCallbacks>;
						/**
						 * Constructs a new instance of the com.microsoft.appcenter.utils.ApplicationLifecycleListener$ApplicationLifecycleCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onApplicationEnterForeground(): void;
							onApplicationEnterBackground(): void;
						});
						public constructor();
						public onApplicationEnterForeground(): void;
						public onApplicationEnterBackground(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module utils {
				export class AsyncTaskUtils {
					public static class: java.lang.Class<com.microsoft.appcenter.utils.AsyncTaskUtils>;
					public static execute(param0: string, param1: globalAndroid.os.AsyncTask, param2: native.Array<any>): globalAndroid.os.AsyncTask;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module utils {
				export class DeviceInfoHelper {
					public static class: java.lang.Class<com.microsoft.appcenter.utils.DeviceInfoHelper>;
					public static getDeviceInfo(param0: globalAndroid.content.Context): com.microsoft.appcenter.ingestion.models.Device;
					public static getVersionCode(param0: globalAndroid.content.pm.PackageInfo): number;
					public constructor();
					public static setWrapperSdk(param0: com.microsoft.appcenter.ingestion.models.WrapperSdk): void;
				}
				export module DeviceInfoHelper {
					export class DeviceInfoException {
						public static class: java.lang.Class<com.microsoft.appcenter.utils.DeviceInfoHelper.DeviceInfoException>;
						public constructor(param0: string, param1: java.lang.Throwable);
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module utils {
				export class HandlerUtils {
					public static class: java.lang.Class<com.microsoft.appcenter.utils.HandlerUtils>;
					public constructor();
					public static getMainHandler(): globalAndroid.os.Handler;
					public static runOnUiThread(param0: java.lang.Runnable): void;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module utils {
				export class HashUtils {
					public static class: java.lang.Class<com.microsoft.appcenter.utils.HashUtils>;
					public static sha256(param0: string): string;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module utils {
				export class IdHelper {
					public static class: java.lang.Class<com.microsoft.appcenter.utils.IdHelper>;
					public constructor();
					public static getInstallId(): java.util.UUID;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module utils {
				export class InstrumentationRegistryHelper {
					public static class: java.lang.Class<com.microsoft.appcenter.utils.InstrumentationRegistryHelper>;
					public static getArguments(): globalAndroid.os.Bundle;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module utils {
				export class NetworkStateHelper {
					public static class: java.lang.Class<com.microsoft.appcenter.utils.NetworkStateHelper>;
					public constructor(param0: globalAndroid.content.Context);
					public isNetworkConnected(): boolean;
					public static getSharedInstance(param0: globalAndroid.content.Context): com.microsoft.appcenter.utils.NetworkStateHelper;
					public static unsetInstance(): void;
					public addListener(param0: com.microsoft.appcenter.utils.NetworkStateHelper.Listener): void;
					public removeListener(param0: com.microsoft.appcenter.utils.NetworkStateHelper.Listener): void;
					public close(): void;
					public reopen(): void;
				}
				export module NetworkStateHelper {
					export class Listener {
						public static class: java.lang.Class<com.microsoft.appcenter.utils.NetworkStateHelper.Listener>;
						/**
						 * Constructs a new instance of the com.microsoft.appcenter.utils.NetworkStateHelper$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onNetworkStateUpdated(param0: boolean): void;
						});
						public constructor();
						public onNetworkStateUpdated(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module utils {
				export class PrefStorageConstants {
					public static class: java.lang.Class<com.microsoft.appcenter.utils.PrefStorageConstants>;
					public static KEY_INSTALL_ID: string;
					public static KEY_ENABLED: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module utils {
				export class ShutdownHelper {
					public static class: java.lang.Class<com.microsoft.appcenter.utils.ShutdownHelper>;
					public static shutdown(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module utils {
				export class TicketCache {
					public static class: java.lang.Class<com.microsoft.appcenter.utils.TicketCache>;
					public constructor();
					public static clear(): void;
					public static putTicket(param0: string, param1: string): void;
					public static getTicket(param0: string): string;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module utils {
				export module async {
					export class AppCenterConsumer<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.microsoft.appcenter.utils.async.AppCenterConsumer<any>>;
						/**
						 * Constructs a new instance of the com.microsoft.appcenter.utils.async.AppCenterConsumer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							accept(param0: T): void;
						});
						public constructor();
						public accept(param0: T): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module utils {
				export module async {
					export class AppCenterFuture<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.microsoft.appcenter.utils.async.AppCenterFuture<any>>;
						/**
						 * Constructs a new instance of the com.microsoft.appcenter.utils.async.AppCenterFuture<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							get(): T;
							thenAccept(param0: com.microsoft.appcenter.utils.async.AppCenterConsumer<T>): void;
							isDone(): boolean;
						});
						public constructor();
						public get(): T;
						public isDone(): boolean;
						public thenAccept(param0: com.microsoft.appcenter.utils.async.AppCenterConsumer<T>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module utils {
				export module async {
					export class DefaultAppCenterFuture<T>  extends com.microsoft.appcenter.utils.async.AppCenterFuture<any> {
						public static class: java.lang.Class<com.microsoft.appcenter.utils.async.DefaultAppCenterFuture<any>>;
						public constructor();
						public isDone(): boolean;
						public complete(param0: any): void;
						public thenAccept(param0: com.microsoft.appcenter.utils.async.AppCenterConsumer<any>): void;
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module utils {
				export module context {
					export class SessionContext {
						public static class: java.lang.Class<com.microsoft.appcenter.utils.context.SessionContext>;
						public getSessionAt(param0: number): com.microsoft.appcenter.utils.context.SessionContext.SessionInfo;
						public static getInstance(): com.microsoft.appcenter.utils.context.SessionContext;
						public addSession(param0: java.util.UUID): void;
						public clearSessions(): void;
						public static unsetInstance(): void;
					}
					export module SessionContext {
						export class SessionInfo {
							public static class: java.lang.Class<com.microsoft.appcenter.utils.context.SessionContext.SessionInfo>;
							public toString(): string;
							public getSessionId(): java.util.UUID;
							public getAppLaunchTimestamp(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module utils {
				export module context {
					export class UserIdContext {
						public static class: java.lang.Class<com.microsoft.appcenter.utils.context.UserIdContext>;
						public static USER_ID_APP_CENTER_MAX_LENGTH: number;
						public static checkUserIdValidForOneCollector(param0: string): boolean;
						public addListener(param0: com.microsoft.appcenter.utils.context.UserIdContext.Listener): void;
						public getUserId(): string;
						public constructor();
						public removeListener(param0: com.microsoft.appcenter.utils.context.UserIdContext.Listener): void;
						public static getInstance(): com.microsoft.appcenter.utils.context.UserIdContext;
						public static getPrefixedUserId(param0: string): string;
						public setUserId(param0: string): void;
						public static unsetInstance(): void;
						public static checkUserIdValidForAppCenter(param0: string): boolean;
					}
					export module UserIdContext {
						export class Listener {
							public static class: java.lang.Class<com.microsoft.appcenter.utils.context.UserIdContext.Listener>;
							/**
							 * Constructs a new instance of the com.microsoft.appcenter.utils.context.UserIdContext$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onNewUserId(param0: string): void;
							});
							public constructor();
							public onNewUserId(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module utils {
				export module crypto {
					export class CryptoAesHandler extends com.microsoft.appcenter.utils.crypto.CryptoHandler {
						public static class: java.lang.Class<com.microsoft.appcenter.utils.crypto.CryptoAesHandler>;
						public encrypt(param0: com.microsoft.appcenter.utils.crypto.CryptoUtils.ICryptoFactory, param1: number, param2: java.security.KeyStore.Entry, param3: native.Array<number>): native.Array<number>;
						public decrypt(param0: com.microsoft.appcenter.utils.crypto.CryptoUtils.ICryptoFactory, param1: number, param2: java.security.KeyStore.Entry, param3: native.Array<number>): native.Array<number>;
						public getAlgorithm(): string;
						public generateKey(param0: com.microsoft.appcenter.utils.crypto.CryptoUtils.ICryptoFactory, param1: string, param2: globalAndroid.content.Context): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module utils {
				export module crypto {
					export class CryptoConstants {
						public static class: java.lang.Class<com.microsoft.appcenter.utils.crypto.CryptoConstants>;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module utils {
				export module crypto {
					export class CryptoHandler {
						public static class: java.lang.Class<com.microsoft.appcenter.utils.crypto.CryptoHandler>;
						/**
						 * Constructs a new instance of the com.microsoft.appcenter.utils.crypto.CryptoHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getAlgorithm(): string;
							generateKey(param0: com.microsoft.appcenter.utils.crypto.CryptoUtils.ICryptoFactory, param1: string, param2: globalAndroid.content.Context): void;
							encrypt(param0: com.microsoft.appcenter.utils.crypto.CryptoUtils.ICryptoFactory, param1: number, param2: java.security.KeyStore.Entry, param3: native.Array<number>): native.Array<number>;
							decrypt(param0: com.microsoft.appcenter.utils.crypto.CryptoUtils.ICryptoFactory, param1: number, param2: java.security.KeyStore.Entry, param3: native.Array<number>): native.Array<number>;
						});
						public constructor();
						public encrypt(param0: com.microsoft.appcenter.utils.crypto.CryptoUtils.ICryptoFactory, param1: number, param2: java.security.KeyStore.Entry, param3: native.Array<number>): native.Array<number>;
						public decrypt(param0: com.microsoft.appcenter.utils.crypto.CryptoUtils.ICryptoFactory, param1: number, param2: java.security.KeyStore.Entry, param3: native.Array<number>): native.Array<number>;
						public getAlgorithm(): string;
						public generateKey(param0: com.microsoft.appcenter.utils.crypto.CryptoUtils.ICryptoFactory, param1: string, param2: globalAndroid.content.Context): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module utils {
				export module crypto {
					export class CryptoNoOpHandler extends com.microsoft.appcenter.utils.crypto.CryptoHandler {
						public static class: java.lang.Class<com.microsoft.appcenter.utils.crypto.CryptoNoOpHandler>;
						public encrypt(param0: com.microsoft.appcenter.utils.crypto.CryptoUtils.ICryptoFactory, param1: number, param2: java.security.KeyStore.Entry, param3: native.Array<number>): native.Array<number>;
						public decrypt(param0: com.microsoft.appcenter.utils.crypto.CryptoUtils.ICryptoFactory, param1: number, param2: java.security.KeyStore.Entry, param3: native.Array<number>): native.Array<number>;
						public getAlgorithm(): string;
						public generateKey(param0: com.microsoft.appcenter.utils.crypto.CryptoUtils.ICryptoFactory, param1: string, param2: globalAndroid.content.Context): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module utils {
				export module crypto {
					export class CryptoRsaHandler extends com.microsoft.appcenter.utils.crypto.CryptoHandler {
						public static class: java.lang.Class<com.microsoft.appcenter.utils.crypto.CryptoRsaHandler>;
						public encrypt(param0: com.microsoft.appcenter.utils.crypto.CryptoUtils.ICryptoFactory, param1: number, param2: java.security.KeyStore.Entry, param3: native.Array<number>): native.Array<number>;
						public decrypt(param0: com.microsoft.appcenter.utils.crypto.CryptoUtils.ICryptoFactory, param1: number, param2: java.security.KeyStore.Entry, param3: native.Array<number>): native.Array<number>;
						public getAlgorithm(): string;
						public generateKey(param0: com.microsoft.appcenter.utils.crypto.CryptoUtils.ICryptoFactory, param1: string, param2: globalAndroid.content.Context): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module utils {
				export module crypto {
					export class CryptoUtils {
						public static class: java.lang.Class<com.microsoft.appcenter.utils.crypto.CryptoUtils>;
						public static getInstance(param0: globalAndroid.content.Context): com.microsoft.appcenter.utils.crypto.CryptoUtils;
						public decrypt(param0: string): com.microsoft.appcenter.utils.crypto.CryptoUtils.DecryptedData;
						public encrypt(param0: string): string;
					}
					export module CryptoUtils {
						export class CryptoHandlerEntry {
							public static class: java.lang.Class<com.microsoft.appcenter.utils.crypto.CryptoUtils.CryptoHandlerEntry>;
						}
						export class DecryptedData {
							public static class: java.lang.Class<com.microsoft.appcenter.utils.crypto.CryptoUtils.DecryptedData>;
							public constructor(param0: string, param1: string);
							public getDecryptedData(): string;
							public getNewEncryptedData(): string;
						}
						export class ICipher {
							public static class: java.lang.Class<com.microsoft.appcenter.utils.crypto.CryptoUtils.ICipher>;
							/**
							 * Constructs a new instance of the com.microsoft.appcenter.utils.crypto.CryptoUtils$ICipher interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								init(param0: number, param1: java.security.Key): void;
								init(param0: number, param1: java.security.Key, param2: java.security.spec.AlgorithmParameterSpec): void;
								doFinal(param0: native.Array<number>): native.Array<number>;
								doFinal(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
								getIV(): native.Array<number>;
								getBlockSize(): number;
								getAlgorithm(): string;
								getProvider(): string;
							});
							public constructor();
							public init(param0: number, param1: java.security.Key): void;
							public getIV(): native.Array<number>;
							public getBlockSize(): number;
							public getProvider(): string;
							public doFinal(param0: native.Array<number>): native.Array<number>;
							public doFinal(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
							public getAlgorithm(): string;
							public init(param0: number, param1: java.security.Key, param2: java.security.spec.AlgorithmParameterSpec): void;
						}
						export class ICryptoFactory {
							public static class: java.lang.Class<com.microsoft.appcenter.utils.crypto.CryptoUtils.ICryptoFactory>;
							/**
							 * Constructs a new instance of the com.microsoft.appcenter.utils.crypto.CryptoUtils$ICryptoFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getKeyGenerator(param0: string, param1: string): com.microsoft.appcenter.utils.crypto.CryptoUtils.IKeyGenerator;
								getCipher(param0: string, param1: string): com.microsoft.appcenter.utils.crypto.CryptoUtils.ICipher;
							});
							public constructor();
							public getKeyGenerator(param0: string, param1: string): com.microsoft.appcenter.utils.crypto.CryptoUtils.IKeyGenerator;
							public getCipher(param0: string, param1: string): com.microsoft.appcenter.utils.crypto.CryptoUtils.ICipher;
						}
						export class IKeyGenerator {
							public static class: java.lang.Class<com.microsoft.appcenter.utils.crypto.CryptoUtils.IKeyGenerator>;
							/**
							 * Constructs a new instance of the com.microsoft.appcenter.utils.crypto.CryptoUtils$IKeyGenerator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								init(param0: java.security.spec.AlgorithmParameterSpec): void;
								generateKey(): void;
							});
							public constructor();
							public generateKey(): void;
							public init(param0: java.security.spec.AlgorithmParameterSpec): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module utils {
				export module storage {
					export class DatabaseManager {
						public static class: java.lang.Class<com.microsoft.appcenter.utils.storage.DatabaseManager>;
						public static PRIMARY_KEY: string;
						public static SELECT_PRIMARY_KEY: native.Array<string>;
						public getCursor(param0: globalAndroid.database.sqlite.SQLiteQueryBuilder, param1: native.Array<string>, param2: native.Array<string>, param3: string): globalAndroid.database.Cursor;
						public nextValues(param0: globalAndroid.database.Cursor): globalAndroid.content.ContentValues;
						public delete(param0: string, param1: any): number;
						public buildValues(param0: globalAndroid.database.Cursor): globalAndroid.content.ContentValues;
						public close(): void;
						public getMaxSize(): number;
						public getRowCount(): number;
						public put(param0: globalAndroid.content.ContentValues, param1: string): number;
						public clear(): void;
						public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: number, param4: globalAndroid.content.ContentValues, param5: string, param6: com.microsoft.appcenter.utils.storage.DatabaseManager.Listener);
						public delete(param0: number): void;
						public setMaxSize(param0: number): boolean;
					}
					export module DatabaseManager {
						export class Listener {
							public static class: java.lang.Class<com.microsoft.appcenter.utils.storage.DatabaseManager.Listener>;
							/**
							 * Constructs a new instance of the com.microsoft.appcenter.utils.storage.DatabaseManager$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
								onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
							});
							public constructor();
							public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
							public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module utils {
				export module storage {
					export class FileManager {
						public static class: java.lang.Class<com.microsoft.appcenter.utils.storage.FileManager>;
						public static getFilenames(param0: string, param1: java.io.FilenameFilter): native.Array<string>;
						public constructor();
						public static initialize(param0: globalAndroid.content.Context): void;
						public static write(param0: java.io.File, param1: string): void;
						public static delete(param0: string): boolean;
						public static delete(param0: java.io.File): boolean;
						public static write(param0: string, param1: string): void;
						public static read(param0: string): string;
						public static read(param0: java.io.File): string;
						public static deleteDirectory(param0: java.io.File): boolean;
						public static lastModifiedFile(param0: java.io.File, param1: java.io.FilenameFilter): java.io.File;
						public static cleanDirectory(param0: java.io.File): void;
						public static mkdir(param0: string): void;
						public static readBytes(param0: java.io.File): native.Array<number>;
						public static lastModifiedFile(param0: string, param1: java.io.FilenameFilter): java.io.File;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module utils {
				export module storage {
					export class SQLiteUtils {
						public static class: java.lang.Class<com.microsoft.appcenter.utils.storage.SQLiteUtils>;
						public constructor();
						public static newSQLiteQueryBuilder(): globalAndroid.database.sqlite.SQLiteQueryBuilder;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module appcenter {
			export module utils {
				export module storage {
					export class SharedPreferencesManager {
						public static class: java.lang.Class<com.microsoft.appcenter.utils.storage.SharedPreferencesManager>;
						public static getInt(param0: string): number;
						public static getStringSet(param0: string): java.util.Set<string>;
						public static remove(param0: string): void;
						public constructor();
						public static getFloat(param0: string, param1: number): number;
						public static putLong(param0: string, param1: number): void;
						public static getFloat(param0: string): number;
						public static getBoolean(param0: string): boolean;
						public static putBoolean(param0: string, param1: boolean): void;
						public static getStringSet(param0: string, param1: java.util.Set<string>): java.util.Set<string>;
						public static putStringSet(param0: string, param1: java.util.Set<string>): void;
						public static initialize(param0: globalAndroid.content.Context): void;
						public static getInt(param0: string, param1: number): number;
						public static clear(): void;
						public static putInt(param0: string, param1: number): void;
						public static getBoolean(param0: string, param1: boolean): boolean;
						public static putString(param0: string, param1: string): void;
						public static getLong(param0: string, param1: number): number;
						public static getString(param0: string): string;
						public static putFloat(param0: string, param1: number): void;
						public static getLong(param0: string): number;
						public static getString(param0: string, param1: string): string;
					}
				}
			}
		}
	}
}

//Generics information:
//com.microsoft.appcenter.ingestion.models.json.ModelFactory:1
//com.microsoft.appcenter.utils.async.AppCenterConsumer:1
//com.microsoft.appcenter.utils.async.AppCenterFuture:1
//com.microsoft.appcenter.utils.async.DefaultAppCenterFuture:1

