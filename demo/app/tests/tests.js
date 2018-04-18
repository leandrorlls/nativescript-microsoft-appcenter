var AppCenter = require("nativescript-microsoft-appcenter").AppCenter;

describe("AppCenter", function() {
    it("create an instance", function() {
        var appCenter = new AppCenter({});
        expect(appCenter).toBeDefined();
    });
});