
declare class MSACAnalytics extends MSACServiceAbstract {

	static alloc(): MSACAnalytics; // inherited from NSObject

	static new(): MSACAnalytics; // inherited from NSObject

	static pause(): void;

	static resume(): void;

	static trackEvent(eventName: string): void;

	static trackEventWithProperties(eventName: string, properties: NSDictionary<string, string>): void;

	static trackEventWithPropertiesFlags(eventName: string, properties: NSDictionary<string, string>, flags: MSACFlags): void;

	static trackEventWithTypedProperties(eventName: string, properties: MSACEventProperties): void;

	static trackEventWithTypedPropertiesFlags(eventName: string, properties: MSACEventProperties, flags: MSACFlags): void;

	static transmissionTargetForToken(token: string): MSACAnalyticsTransmissionTarget;

	static transmissionInterval: number;
}

declare class MSACAnalyticsAuthenticationProvider extends NSObject {

	static alloc(): MSACAnalyticsAuthenticationProvider; // inherited from NSObject

	static new(): MSACAnalyticsAuthenticationProvider; // inherited from NSObject

	readonly delegate: MSACAnalyticsAuthenticationProviderDelegate;

	readonly ticketKey: string;

	readonly ticketKeyHash: string;

	readonly type: MSACAnalyticsAuthenticationType;

	constructor(o: { authenticationType: MSACAnalyticsAuthenticationType; ticketKey: string; delegate: MSACAnalyticsAuthenticationProviderDelegate; });

	checkTokenExpiry(): void;

	initWithAuthenticationTypeTicketKeyDelegate(type: MSACAnalyticsAuthenticationType, ticketKey: string, delegate: MSACAnalyticsAuthenticationProviderDelegate): this;
}

interface MSACAnalyticsAuthenticationProviderDelegate extends NSObjectProtocol {

	authenticationProviderAcquireTokenWithCompletionHandler(authenticationProvider: MSACAnalyticsAuthenticationProvider, completionHandler: (p1: string, p2: Date) => void): void;
}
declare var MSACAnalyticsAuthenticationProviderDelegate: {

	prototype: MSACAnalyticsAuthenticationProviderDelegate;
};

declare const enum MSACAnalyticsAuthenticationType {

	MsaCompact = 0,

	MsaDelegate = 1
}

declare class MSACAnalyticsTransmissionTarget extends NSObject {

	static addAuthenticationProvider(authenticationProvider: MSACAnalyticsAuthenticationProvider): void;

	static alloc(): MSACAnalyticsTransmissionTarget; // inherited from NSObject

	static new(): MSACAnalyticsTransmissionTarget; // inherited from NSObject

	enabled: boolean;

	readonly propertyConfigurator: MSACPropertyConfigurator;

	pause(): void;

	resume(): void;

	trackEvent(eventName: string): void;

	trackEventWithProperties(eventName: string, properties: NSDictionary<string, string>): void;

	trackEventWithPropertiesFlags(eventName: string, properties: NSDictionary<string, string>, flags: MSACFlags): void;

	trackEventWithTypedProperties(eventName: string, properties: MSACEventProperties): void;

	trackEventWithTypedPropertiesFlags(eventName: string, properties: MSACEventProperties, flags: MSACFlags): void;

	transmissionTargetForToken(token: string): MSACAnalyticsTransmissionTarget;
}

declare class MSACEventLog extends MSACLogWithNameAndProperties {

	static alloc(): MSACEventLog; // inherited from NSObject

	static new(): MSACEventLog; // inherited from NSObject

	eventId: string;

	typedProperties: MSACEventProperties;
}

declare class MSACEventProperties extends NSObject {

	static alloc(): MSACEventProperties; // inherited from NSObject

	static new(): MSACEventProperties; // inherited from NSObject

	setBoolForKey(value: boolean, key: string): this;

	setDateForKey(value: Date, key: string): this;

	setDoubleForKey(value: number, key: string): this;

	setInt64ForKey(value: number, key: string): this;

	setStringForKey(value: string, key: string): this;
}

declare class MSACLogWithNameAndProperties extends MSACLogWithProperties {

	static alloc(): MSACLogWithNameAndProperties; // inherited from NSObject

	static new(): MSACLogWithNameAndProperties; // inherited from NSObject

	name: string;
}

declare class MSACPropertyConfigurator extends NSObject {

	static alloc(): MSACPropertyConfigurator; // inherited from NSObject

	static new(): MSACPropertyConfigurator; // inherited from NSObject

	appLocale: string;

	appName: string;

	appVersion: string;

	userId: string;

	collectDeviceId(): void;

	removeEventPropertyForKey(propertyKey: string): void;

	setEventPropertyBoolForKey(propertyValue: boolean, propertyKey: string): void;

	setEventPropertyDateForKey(propertyValue: Date, propertyKey: string): void;

	setEventPropertyDoubleForKey(propertyValue: number, propertyKey: string): void;

	setEventPropertyInt64ForKey(propertyValue: number, propertyKey: string): void;

	setEventPropertyStringForKey(propertyValue: string, propertyKey: string): void;
}
