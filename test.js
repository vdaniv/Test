const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function test() {

        var searchString = "Hello";

        let driver = await new Builder().forBrowser("chrome").build();

        await driver.get("http://google.com");

        await driver.findElement(By.name("q")).sendKeys(searchString, Key.RETURN);

        var title = await driver.getTitle();
        console.log('Title is:', title);

        await driver.quit();

}

test()