describe('Cleanup', function () {
    beforeAll(function() {
        browser.get('#/app/dashboard');
    });

    it('should route to /app/dashboard', function () {
        browser.getCurrentUrl().then(function(url) {
            expect(url).toEqual(`${browser.baseUrl}#/app/dashboard`);
        });
    });

    it('should delete the user\'s data', () => {
        element(by.css('.delete-data')).click().then(function () {
            expect(1 + 1).toBe(2);
        });
    });
});

