
document.addEventListener('deviceready', function () {
    // Enable to debug issues.
    // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

    var notificationOpenedCallback = function(jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    };

    window.plugins.OneSignal
        .startInit("c42c555b-fd06-4e71-9877-e5acbad86ba3")
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();

}, false);
