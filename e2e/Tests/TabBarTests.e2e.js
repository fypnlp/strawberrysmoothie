/* eslint-env detox/detox, jest */

describe('Test Scenarios', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should have instructions screen', async () => {
        await expect(element(by.id('Instructions tab'))).toBeVisible();
        await expect(element(by.id('instructions'))).toBeVisible();
    });

    it('should have Dashboard screen', async () => {
        await expect(element(by.id('Dashboard tab'))).toBeVisible();
        await element(by.id('Dashboard tab')).tap();
        await expect(element(by.id('dashboard'))).toBeVisible();
    });

    it('should have Settings screen', async () => {
        await expect(element(by.id('Settings tab'))).toBeVisible();
        await element(by.id('Settings tab')).tap();
        await expect(element(by.id('settings'))).toBeVisible();
        await expect(element(by.id('settings-title'))).toBeVisible();
        await expect(element(by.id('settings-title'))).toHaveText(
            'Application Seatings',
        );
    });

    it('should have 100 coins in Dashboard screen title', async () => {
        await expect(element(by.id('Dashboard tab'))).toBeVisible();
        await element(by.id('Dashboard tab')).tap();
        await expect(element(by.id('dashboard-title'))).toBeVisible();
        await expect(element(by.id('dashboard-title'))).toHaveText('100 coins');
    });
    it('should take screenshot of dashboard', async () => {
        await expect(element(by.id('Dashboard tab'))).toBeVisible();
        await element(by.id('Dashboard tab')).tap();
        await expect(element(by.id('dashboard'))).toBeVisible();
        await element(by.id('dashboard')).takeScreenshot('dashboard');
    });
    it('should open dashboard', async () => {
        await expect(element(by.id('instructionsView'))).toBeVisible();
        await element(by.id('instructionsView')).swipe('right', 'slow', 0.01);
        await waitFor(element(by.id('sidemenu'))).toBeVisible();
        // await expect(element(by.id('sidemenu'))).toBeVisible();
        // await expect(element(by.text('Get the ultimate answer'))).toBeVisible();
    });
});
