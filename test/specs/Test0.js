const Page = require('../pageobjects/GooglePage');
const GooglePage = new Page();
const assert = require('assert');


describe('TestTask', () => {
    it('should login with valid credentials', async () => {

        await GooglePage.open();

        const Email = await $("#identifierId");
        await Email.setValue("huidliatesta@gmail.com");


        const EmailButton = await $("#identifierNext > div > button > span");
        await EmailButton.click();

        const Password = await $("#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input");
        await Password.setValue("MrJ2CSulveJWb6");

        const PasswordButton = await $("#passwordNext > div > button > span");
        await PasswordButton.click();

        const TitleLine = await $("#docs-title-widget > input")

        await assert.deepStrictEqual( await TitleLine.getValue(), "Table for autotesting" );

    });
});