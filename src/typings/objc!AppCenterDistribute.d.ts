
declare class MSACDistribute extends MSACServiceAbstract {

	static alloc(): MSACDistribute; // inherited from NSObject

	static checkForUpdate(): void;

	static disableAutomaticCheckForUpdate(): void;

	static new(): MSACDistribute; // inherited from NSObject

	static notifyUpdateAction(action: MSACUpdateAction): void;

	static openURL(url: NSURL): boolean;

	static apiUrl: string;

	static delegate: MSACDistributeDelegate;

	static installUrl: string;

	static updateTrack: MSACUpdateTrack;
}

interface MSACDistributeDelegate extends NSObjectProtocol {

	distributeNoReleaseAvailable?(distribute: MSACDistribute): void;

	distributeReleaseAvailableWithDetails?(distribute: MSACDistribute, details: MSACReleaseDetails): boolean;

	distributeWillExitApp?(distribute: MSACDistribute): void;
}
declare var MSACDistributeDelegate: {

	prototype: MSACDistributeDelegate;
};

declare class MSACReleaseDetails extends NSObject {

	static alloc(): MSACReleaseDetails; // inherited from NSObject

	static new(): MSACReleaseDetails; // inherited from NSObject

	id: number;

	mandatoryUpdate: boolean;

	releaseNotes: string;

	releaseNotesUrl: NSURL;

	shortVersion: string;

	version: string;
}

declare const enum MSACUpdateAction {

	Update = 0,

	Postpone = 1
}

declare const enum MSACUpdateTrack {

	Public = 1,

	Private = 2
}
