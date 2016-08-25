const DIST = './dist/dev/**/';
// needed for custom class decorators
require("reflect-metadata");
require("zone.js/dist/zone-node");

const config = {
    baseUrl: 'http://localhost:5555/',

    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // We need to go in order of registration -> login -> onboarding -> dashboard because we are testing the entire app
    // from beginning to end (as if a user was signing up for the first time). That means we need to explicitly specify
    // the spec files because protractor takes them either alphabetically or in order of array index.
    specs: [
        DIST + 'registration.e2e-spec.js',
        DIST + 'activate.e2e-spec.js',
        DIST + 'login.e2e-spec.js',
        DIST + 'core.e2e-spec.js'
    ],

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine2',

    jasmineNodeOpts: {
        showColors: true,
        isVerbose: false,
        includeStackTrace: false
    },

    params: {
        login: {
            email: 'protractor-test@lifesite.co',
            password: 'Pr0tr@ctor123'
        },
        token: '',
        id: ''
    },

    onPrepare: function() {

        const SpecReporter = require('jasmine-spec-reporter');
        // add jasmine spec reporter
        jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: true }));

        browser.ignoreSynchronization = false;
    },

    /**
     * Angular 2 configuration
     *
     * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
     * `rootEl`
     */
    useAllAngular2AppRoots: true

};
exports.config = config;
