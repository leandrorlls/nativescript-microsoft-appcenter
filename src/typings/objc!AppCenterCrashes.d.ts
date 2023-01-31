
interface MSACCrashHandlerSetupDelegate extends NSObjectProtocol {

	didSetUpCrashHandlers?(): void;

	shouldEnableUncaughtExceptionHandler?(): boolean;

	willSetUpCrashHandlers?(): void;
}
declare var MSACCrashHandlerSetupDelegate: {

	prototype: MSACCrashHandlerSetupDelegate;
};

declare class MSACCrashes extends MSACServiceAbstract {

	static alloc(): MSACCrashes; // inherited from NSObject

	static disableMachExceptionHandler(): void;

	static generateTestCrash(): void;

	static new(): MSACCrashes; // inherited from NSObject

	static notifyWithUserConfirmation(userConfirmation: MSACUserConfirmation): void;

	static trackErrorWithPropertiesAttachments(error: NSError, properties: NSDictionary<string, string>, attachments: NSArray<MSACErrorAttachmentLog> | MSACErrorAttachmentLog[]): string;

	static trackExceptionWithPropertiesAttachments(exception: MSACExceptionModel, properties: NSDictionary<string, string>, attachments: NSArray<MSACErrorAttachmentLog> | MSACErrorAttachmentLog[]): string;

	static delegate: MSACCrashesDelegate;

	static readonly hasCrashedInLastSession: boolean;

	static readonly hasReceivedMemoryWarningInLastSession: boolean;

	static readonly lastSessionCrashReport: MSACErrorReport;

	static userConfirmationHandler: (p1: NSArray<MSACErrorReport>) => boolean;
}

interface MSACCrashesDelegate extends NSObjectProtocol {

	attachmentsWithCrashesForErrorReport?(crashes: MSACCrashes, errorReport: MSACErrorReport): NSArray<MSACErrorAttachmentLog>;

	crashesDidFailSendingErrorReportWithError?(crashes: MSACCrashes, errorReport: MSACErrorReport, error: NSError): void;

	crashesDidSucceedSendingErrorReport?(crashes: MSACCrashes, errorReport: MSACErrorReport): void;

	crashesShouldProcessErrorReport?(crashes: MSACCrashes, errorReport: MSACErrorReport): boolean;

	crashesWillSendErrorReport?(crashes: MSACCrashes, errorReport: MSACErrorReport): void;
}
declare var MSACCrashesDelegate: {

	prototype: MSACCrashesDelegate;
};

declare class MSACErrorAttachmentLog extends MSACAbstractLog {

	static alloc(): MSACErrorAttachmentLog; // inherited from NSObject

	static attachmentWithBinaryFilenameContentType(data: NSData, filename: string, contentType: string): MSACErrorAttachmentLog;

	static attachmentWithTextFilename(text: string, filename: string): MSACErrorAttachmentLog;

	static new(): MSACErrorAttachmentLog; // inherited from NSObject

	contentType: string;

	data: NSData;

	filename: string;

	constructor(o: { filename: string; attachmentBinary: NSData; contentType: string; });

	constructor(o: { filename: string; attachmentText: string; });

	initWithFilenameAttachmentBinaryContentType(filename: string, data: NSData, contentType: string): this;

	initWithFilenameAttachmentText(filename: string, text: string): this;
}

declare const enum MSACErrorLogSetting {

	Disabled = 0,

	AlwaysAsk = 1,

	AutoSend = 2
}

declare class MSACErrorReport extends NSObject {

	static alloc(): MSACErrorReport; // inherited from NSObject

	static new(): MSACErrorReport; // inherited from NSObject

	readonly appErrorTime: Date;

	readonly appProcessIdentifier: number;

	readonly appStartTime: Date;

	readonly device: MSACDevice;

	readonly exceptionName: string;

	readonly exceptionReason: string;

	readonly incidentIdentifier: string;

	readonly isAppKill: boolean;

	readonly reporterKey: string;

	readonly signal: string;
}

declare class MSACExceptionModel extends NSObject implements MSACSerializableObject {

	static alloc(): MSACExceptionModel; // inherited from NSObject

	static new(): MSACExceptionModel; // inherited from NSObject

	frames: NSArray<MSACStackFrame>;

	message: string;

	stackTrace: string;

	type: string;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { error: NSError; });

	constructor(o: { exception: NSException; });

	constructor(o: { type: string; exceptionMessage: string; stackTrace: NSArray<string> | string[]; });

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithError(error: NSError): this;

	initWithException(exception: NSException): this;

	initWithTypeExceptionMessageStackTrace(exceptionType: string, exceptionMessage: string, stackTrace: NSArray<string> | string[]): this;

	isValid(): boolean;

	serializeToDictionary(): NSMutableDictionary<any, any>;
}

declare var MSACMSACErrorLogAttachmentLogUtilityCategory: string;

declare class MSACStackFrame extends NSObject implements MSACSerializableObject {

	static alloc(): MSACStackFrame; // inherited from NSObject

	static new(): MSACStackFrame; // inherited from NSObject

	address: string;

	className: string;

	code: string;

	fileName: string;

	lineNumber: number;

	methodName: string;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	serializeToDictionary(): NSMutableDictionary<any, any>;
}

declare const enum MSACUserConfirmation {

	DontSend = 0,

	Send = 1,

	Always = 2
}

declare class MSACWrapperCrashesHelper extends NSObject {

	static alloc(): MSACWrapperCrashesHelper; // inherited from NSObject

	static buildHandledErrorReportWithErrorID(errorID: string): MSACErrorReport;

	static getCrashHandlerSetupDelegate(): MSACCrashHandlerSetupDelegate;

	static new(): MSACWrapperCrashesHelper; // inherited from NSObject

	static sendCrashReportsOrAwaitUserConfirmationForFilteredIds(filteredIds: NSArray<string> | string[]): boolean;

	static sendErrorAttachmentsWithIncidentIdentifier(errorAttachments: NSArray<MSACErrorAttachmentLog> | MSACErrorAttachmentLog[], incidentIdentifier: string): void;

	static automaticProcessing: boolean;

	static crashHandlerSetupDelegate: MSACCrashHandlerSetupDelegate;

	static readonly unprocessedCrashReports: NSArray<MSACErrorReport>;
}

declare class MSACWrapperExceptionModel extends MSACExceptionModel {

	static alloc(): MSACWrapperExceptionModel; // inherited from NSObject

	static new(): MSACWrapperExceptionModel; // inherited from NSObject

	innerExceptions: NSArray<MSACWrapperExceptionModel>;

	wrapperSdkName: string;
}
