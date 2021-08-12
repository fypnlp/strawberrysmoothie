const {
    After,
    Before,
    BeforeAll,
    AfterAll,
    setDefaultTimeout,
} = require('cucumber');
const detox = require('detox');
const device = detox.device;

const config = require('../../package.json').detox;

setDefaultTimeout(480 * 1000);

BeforeAll({ timeout: 240 * 1000 }, async function () {
    console.log('===> init');
    await detox.init(
        config /*{
        launchApp: true,
        reuse: true,
    }*/,
    );
    console.log('==> installApp');
    // await device.installApp();
});

Before({ timeout: 240 * 1000 }, async function () {});

After(async function () {});

AfterAll(async function () {
    await device.terminateApp();
    await detox.cleanup();
});
