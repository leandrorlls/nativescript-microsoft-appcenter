
declare const MSACACCanceledErrorCode: number;

declare const MSACACConnectionHttpErrorCode: number;

declare const MSACACConnectionPausedErrorCode: number;

declare const MSACACDisabledErrorCode: number;

declare const MSACACLogInvalidContainerErrorCode: number;

declare class MSACAbstractLog extends NSObject {

	static alloc(): MSACAbstractLog; // inherited from NSObject

	static new(): MSACAbstractLog; // inherited from NSObject
}

declare class MSACAppCenter extends NSObject {

	static alloc(): MSACAppCenter; // inherited from NSObject

	static configure(): void;

	static configureWithAppSecret(appSecret: string): void;

	static new(): MSACAppCenter; // inherited from NSObject

	static setCustomProperties(customProperties: MSACCustomProperties): void;

	static setMaxStorageSizeCompletionHandler(sizeInBytes: number, completionHandler: (p1: boolean) => void): void;

	static sharedInstance(): MSACAppCenter;

	static startFromLibraryWithServices(services: NSArray<typeof NSObject> | typeof NSObject[]): void;

	static startService(service: typeof NSObject): void;

	static startWithServices(appSecret: string, services: NSArray<typeof NSObject> | typeof NSObject[]): void;

	static readonly appDelegateForwarderEnabled: boolean;

	static readonly configured: boolean;

	static countryCode: string;

	static readonly debuggerAttached: boolean;

	static enabled: boolean;

	static readonly installId: NSUUID;

	static logHandler: (p1: () => string, p2: MSACLogLevel, p3: string, p4: string, p5: string, p6: number) => void;

	static logLevel: MSACLogLevel;

	static logUrl: string;

	static networkRequestsAllowed: boolean;

	static readonly runningInAppCenterTestCloud: boolean;

	static readonly sdkVersion: string;

	static userId: string;

	static wrapperSdk: MSACWrapperSdk;
}

interface MSACChannelGroupProtocol extends MSACChannelProtocol {

	appSecret: string;

	logUrl: string;

	channelUnitForGroupId(groupId: string): any;

	setMaxStorageSizeCompletionHandler(sizeInBytes: number, completionHandler: (p1: boolean) => void): void;
}
declare var MSACChannelGroupProtocol: {

	prototype: MSACChannelGroupProtocol;
};

interface MSACChannelProtocol extends MSACEnable, NSObjectProtocol {

	addDelegate(delegate: any): void;

	pauseWithIdentifyingObject(identifyingObject: NSObjectProtocol): void;

	removeDelegate(delegate: any): void;

	resumeWithIdentifyingObject(identifyingObject: NSObjectProtocol): void;
}
declare var MSACChannelProtocol: {

	prototype: MSACChannelProtocol;
};

declare class MSACCustomProperties extends NSObject {

	static alloc(): MSACCustomProperties; // inherited from NSObject

	static new(): MSACCustomProperties; // inherited from NSObject

	clearPropertyForKey(key: string): this;

	setBoolForKey(value: boolean, key: string): this;

	setDateForKey(value: Date, key: string): this;

	setNumberForKey(value: number, key: string): this;

	setStringForKey(value: string, key: string): this;
}

declare class MSACDevice extends MSACWrapperSdk {

	static alloc(): MSACDevice; // inherited from NSObject

	static new(): MSACDevice; // inherited from NSObject

	readonly appBuild: string;

	readonly appNamespace: string;

	readonly appVersion: string;

	readonly carrierCountry: string;

	readonly carrierName: string;

	readonly locale: string;

	readonly model: string;

	readonly oemName: string;

	readonly osApiLevel: number;

	readonly osBuild: string;

	readonly osName: string;

	readonly osVersion: string;

	readonly screenSize: string;

	readonly sdkName: string;

	readonly sdkVersion: string;

	readonly timeZoneOffset: number;
}

interface MSACEnable extends NSObjectProtocol {

	setEnabledAndDeleteDataOnDisabled(isEnabled: boolean, deleteData: boolean): void;
}
declare var MSACEnable: {

	prototype: MSACEnable;
};

declare const enum MSACFlags {

	None = 0,

	Normal = 1,

	Critical = 2,

	PersistenceNormal = 1,

	PersistenceCritical = 2,

	Default = 1
}

declare const enum MSACHTTPCodesNo {

	No0XXInvalidUnknown = 0,

	No1XXInformationalUnknown = 1,

	No100Continue = 100,

	No101SwitchingProtocols = 101,

	No102Processing = 102,

	No2XXSuccessUnknown = 2,

	No200OK = 200,

	No201Created = 201,

	No202Accepted = 202,

	No203NonAuthoritativeInformation = 203,

	No204NoContent = 204,

	No205ResetContent = 205,

	No206PartialContent = 206,

	No207MultiStatus = 207,

	No208AlreadyReported = 208,

	No209IMUsed = 209,

	No3XXSuccessUnknown = 3,

	No300MultipleChoices = 300,

	No301MovedPermanently = 301,

	No302Found = 302,

	No303SeeOther = 303,

	No304NotModified = 304,

	No305UseProxy = 305,

	No306SwitchProxy = 306,

	No307TemporaryRedirect = 307,

	No308PermanentRedirect = 308,

	No4XXSuccessUnknown = 4,

	No400BadRequest = 400,

	No401Unauthorised = 401,

	No402PaymentRequired = 402,

	No403Forbidden = 403,

	No404NotFound = 404,

	No405MethodNotAllowed = 405,

	No406NotAcceptable = 406,

	No407ProxyAuthenticationRequired = 407,

	No408RequestTimeout = 408,

	No409Conflict = 409,

	No410Gone = 410,

	No411LengthRequired = 411,

	No412PreconditionFailed = 412,

	No413RequestEntityTooLarge = 413,

	No414RequestURITooLong = 414,

	No415UnsupportedMediaType = 415,

	No416RequestedRangeNotSatisfiable = 416,

	No417ExpectationFailed = 417,

	No418IamATeapot = 418,

	No419AuthenticationTimeout = 419,

	No420MethodFailureSpringFramework = 420,

	No420EnhanceYourCalmTwitter = 4200,

	No422UnprocessableEntity = 422,

	No423Locked = 423,

	No424FailedDependency = 424,

	No424MethodFailureWebDaw = 4240,

	No425UnorderedCollection = 425,

	No426UpgradeRequired = 426,

	No428PreconditionRequired = 428,

	No429TooManyRequests = 429,

	No431RequestHeaderFieldsTooLarge = 431,

	No444NoResponseNginx = 444,

	No449RetryWithMicrosoft = 449,

	No450BlockedByWindowsParentalControls = 450,

	No451RedirectMicrosoft = 451,

	No451UnavailableForLegalReasons = 4510,

	No494RequestHeaderTooLargeNginx = 494,

	No495CertErrorNginx = 495,

	No496NoCertNginx = 496,

	No497HTTPToHTTPSNginx = 497,

	No499ClientClosedRequestNginx = 499,

	No5XXSuccessUnknown = 5,

	No500InternalServerError = 500,

	No501NotImplemented = 501,

	No502BadGateway = 502,

	No503ServiceUnavailable = 503,

	No504GatewayTimeout = 504,

	No505HTTPVersionNotSupported = 505,

	No506VariantAlsoNegotiates = 506,

	No507InsufficientStorage = 507,

	No508LoopDetected = 508,

	No509BandwidthLimitExceeded = 509,

	No510NotExtended = 510,

	No511NetworkAuthenticationRequired = 511,

	No522ConnectionTimedOut = 522,

	No598NetworkReadTimeoutErrorUnknown = 598,

	No599NetworkConnectTimeoutErrorUnknown = 599
}

declare const enum MSACInitializationPriority {

	Default = 500,

	High = 750,

	Max = 999
}

interface MSACLog extends NSObjectProtocol {

	device: MSACDevice;

	distributionGroupId: string;

	sid: string;

	tag: NSObject;

	timestamp: Date;

	type: string;

	userId: string;

	addTransmissionTargetToken(token: string): void;

	isValid(): boolean;

	transmissionTargetTokens(): NSSet<any>;
}
declare var MSACLog: {

	prototype: MSACLog;
};

declare const enum MSACLogLevel {

	Verbose = 2,

	Debug = 3,

	Info = 4,

	Warning = 5,

	Error = 6,

	Assert = 7,

	None = 99
}

declare class MSACLogWithProperties extends MSACAbstractLog {

	static alloc(): MSACLogWithProperties; // inherited from NSObject

	static new(): MSACLogWithProperties; // inherited from NSObject

	properties: NSDictionary<string, string>;
}

declare class MSACLogger extends NSObject {

	static alloc(): MSACLogger; // inherited from NSObject

	static logMessageLevelTagFileFunctionLine(messageProvider: () => string, loglevel: MSACLogLevel, tag: string, file: string | interop.Pointer | interop.Reference<any>, _function: string | interop.Pointer | interop.Reference<any>, line: number): void;

	static new(): MSACLogger; // inherited from NSObject
}

declare const enum MSACPriority {

	Background = 0,

	Default = 1,

	High = 2
}

interface MSACSerializableObject extends NSCoding {

	serializeToDictionary(): NSMutableDictionary<any, any>;
}
declare var MSACSerializableObject: {

	prototype: MSACSerializableObject;
};

interface MSACService extends NSObjectProtocol {
}
declare var MSACService: {

	prototype: MSACService;
};

declare class MSACServiceAbstract extends NSObject implements MSACService {

	static alloc(): MSACServiceAbstract; // inherited from NSObject

	static new(): MSACServiceAbstract; // inherited from NSObject

	readonly isAppSecretRequired: boolean;

	startedFromApplication: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static enabled: boolean; // inherited from MSACService

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	startWithChannelGroupAppSecretTransmissionTargetTokenFromApplication(channelGroup: MSACChannelGroupProtocol, appSecret: string, token: string, fromApplication: boolean): void;

	updateConfigurationWithAppSecretTransmissionTargetToken(appSecret: string, token: string): void;
}

declare class MSACWrapperLogger extends NSObject {

	static MSACWrapperLogTagLevel(message: () => string, tag: string, level: MSACLogLevel): void;

	static alloc(): MSACWrapperLogger; // inherited from NSObject

	static new(): MSACWrapperLogger; // inherited from NSObject
}

declare class MSACWrapperSdk extends NSObject {

	static alloc(): MSACWrapperSdk; // inherited from NSObject

	static new(): MSACWrapperSdk; // inherited from NSObject

	readonly liveUpdateDeploymentKey: string;

	readonly liveUpdatePackageHash: string;

	readonly liveUpdateReleaseLabel: string;

	readonly wrapperRuntimeVersion: string;

	readonly wrapperSdkName: string;

	readonly wrapperSdkVersion: string;

	constructor(o: { wrapperSdkVersion: string; wrapperSdkName: string; wrapperRuntimeVersion: string; liveUpdateReleaseLabel: string; liveUpdateDeploymentKey: string; liveUpdatePackageHash: string; });

	initWithWrapperSdkVersionWrapperSdkNameWrapperRuntimeVersionLiveUpdateReleaseLabelLiveUpdateDeploymentKeyLiveUpdatePackageHash(wrapperSdkVersion: string, wrapperSdkName: string, wrapperRuntimeVersion: string, liveUpdateReleaseLabel: string, liveUpdateDeploymentKey: string, liveUpdatePackageHash: string): this;

	isValid(): boolean;
}

declare var kMSACPriorityCount: number;
