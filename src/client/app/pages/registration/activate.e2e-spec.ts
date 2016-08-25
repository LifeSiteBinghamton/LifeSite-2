describe('Activate', function () {
    let activate;

    beforeAll(function () {
        // These should be defined from registration tests. The activate e2e spec needs to run AFTER register e2e.
        browser.get(`#/register/${browser.params.id}/${browser.params.token}`);
        activate = new Activate();
    });

    it('should route to /register/:id/:token', function () {
        browser.getCurrentUrl().then(function (url) {
            expect(url).toEqual(`${browser.baseUrl}#/register/${browser.params.id}/${browser.params.token}`);
        });
    });

    it('should allow a user to create a password', function () {
        expect(activate.$lsPassword.isPresent()).toEqual(true);

        activate.$lsPassword.$('input').sendKeys(browser.params.login.password);
        activate.$lsPassword.$('button').click().then(function () {
            expect(activate.$successContainer.isPresent()).toEqual(true);
        });
    });
});

class Activate {
    public $lsPassword = element(by.css('ls-password'));
    public $successContainer = element(by.css('.ui.main.text.container'));
}
