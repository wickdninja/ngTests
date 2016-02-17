/* jshint undef: true, unused: true */

'use strict';

module.exports = function(config) {
    config.set({

        basePath: '../../',

        files: [
            //angular dependencies
            'SmallBiz.MVC/scripts/Angular/angular.js',
            'SmallBiz.MVC/scripts/Angular/angular-aria.js',
            'SmallBiz.MVC/scripts/Angular/angular-route.js',
            'SmallBiz.MVC/scripts/Angular/angular-touch.js',
            'SmallBiz.MVC/scripts/Angular/angular-sanitize.js',
            'SmallBiz.MVC/scripts/Angular/angular-animate.js',
            'SmallBiz.MVC/scripts/Angular/angular-messages.js',
            'SmallBiz.MVC/scripts/Angular/angular-mocks.js',
            'SmallBiz.MVC/scripts/Angular/angular-material.js',

            //vendor dependencies
            'SmallBiz.MVC/scripts/Angular/hammer.js',

            //testing dependencies
            'SmallBiz.MVC.Tests/JSTests/lib/sinon.js',

            //helper modules
            'SmallBiz.MVC.Tests/JSTests/lib/mockData.js',
            'SmallBiz.MVC.Tests/JSTests/lib/specHelper.js',
            'SmallBiz.MVC.Tests/JSTests/lib/bindPolyfill.js',


            //app module 
            'SmallBiz.MVC/Modules/Dashboard/DashboardModule.js',
            'SmallBiz.MVC/Modules/Dashboard/DashboardConfig.js',
            'SmallBiz.MVC/Modules/Dashboard/DashboardRun.js',

            //shared services
            'SmallBiz.MVC/Modules/Services/ServicesModule.js',
            'SmallBiz.MVC/Modules/Services/accountService.js',
            'SmallBiz.MVC/Modules/Services/authInterceptor.js',
            'SmallBiz.MVC/Modules/Services/fileService.js',
            'SmallBiz.MVC/Modules/Services/modelFactory.js',
            'SmallBiz.MVC/Modules/Services/paymentService.js',
            'SmallBiz.MVC/Modules/Services/pictureService.js',
            'SmallBiz.MVC/Modules/Services/proxyService.js',
            'SmallBiz.MVC/Modules/Services/scheduleService.js',
            'SmallBiz.MVC/Modules/Services/templateService.js',
            'SmallBiz.MVC/Modules/Services/utilityService.js',
            'SmallBiz.MVC/Modules/Services/vaultService.js',

            //shared directives
            'SmallBiz.MVC/Modules/Shared/SharedModule.js',
            'SmallBiz.MVC/Modules/Shared/datePickerDirective.js',
            'SmallBiz.MVC/Modules/Shared/onLoadImageDirective.js',

            //Templates
            'SmallBiz.MVC/Modules/Templates/TemplatesModule.js',
            'SmallBiz.MVC/Modules/Templates/TemplatesConfig.js',
            'SmallBiz.MVC/Modules/Templates/TemplatesRun.js',
            'SmallBiz.MVC/Modules/Templates/TemplatesDirective.js',
            'SmallBiz.MVC/Modules/Templates/TemplateIndexCtrl.js',
            'SmallBiz.MVC/Modules/Templates/TemplateDetailCtrl.js',
            'SmallBiz.MVC/Modules/Templates/TemplateCreateCtrl.js',
            
            //Payments
            'SmallBiz.MVC/Modules/Payments/PaymentsModule.js',
            'SmallBiz.MVC/Modules/Payments/PaymentsConfig.js',
            'SmallBiz.MVC/Modules/Payments/PaymentsRun.js',
            'SmallBiz.MVC/Modules/Payments/PaymentsDirective.js',
            'SmallBiz.MVC/Modules/Payments/PaymentIndexCtrl.js',
            'SmallBiz.MVC/Modules/Payments/PaymentDetailCtrl.js',
            'SmallBiz.MVC/Modules/Payments/PaymentWidgetCtrl.js',

            //test ALL specs
            'SmallBiz.MVC.Tests/JSTests/unit/*.spec.js'

            //test single spec
            // '_client/scripts/tests/unit/AppDashboard.spec.js'
            // '_client/scripts/tests/unit/TripIndex.spec.js'
            // '_client/scripts/tests/unit/ManagerDashboard.spec.js'

        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: [
            // 'Chrome',
            //'Firefox',
            'PhantomJS'
        ],

        plugins: [
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
