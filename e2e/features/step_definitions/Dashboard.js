/* eslint-env detox/detox, jest */

const { Given, Then } = require('cucumber');

Given(/^I am on the dashboard$/, async function () {
    await expect(element(by.id('Dashboard tab'))).toBeVisible();
    await element(by.id('Dashboard tab')).tap();
});

Then(/^I have '(.*)'$/, async function (expectedText) {
    await expect(element(by.id('dashboard-title'))).toBeVisible();
    await expect(element(by.id('dashboard-title'))).toHaveText(expectedText);
});
