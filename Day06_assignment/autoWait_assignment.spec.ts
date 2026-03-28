import {chromium, test, expect} from "@playwright/test"


test ("To test auto-waits", async ({page}) =>
{

    await page.goto ("https://leafground.com/waits.xhtml");
    await page.setViewportSize ({ width : 1920 , height : 1080});

    //Wait for an element to become visible before interacting with it.

    await page.locator('span:has-text("Click")').nth(0).click();
    const hidden = await page.locator ('span:has-text("I am here")').nth(1);
    await hidden.waitFor({state :'visible'});
    await expect (hidden).toBeVisible();

    //Wait for an element to disappear from the page.

    await page.locator('span:has-text("Click")').nth(2).click();
    const hid1 = await page.locator ('span:has-text("I am about to hide")').nth(1);
    await hid1.waitFor ({ state : 'hidden'});
    await expect (hid1).toBeHidden();

    //Wait for an element to become clickable.

    await page.locator('span:has-text("Click First Button")').nth(1).click();
    await page.locator ('span:has-text("Click Second")').nth(1).click();
    
    //Check for text changes within an element and respond accordingly.

    await page.locator('span:has-text("Click")').last().click();
    const text = await page.locator (`span:has-text("Did you notice?")`).first();
    await expect (text).toBeVisible();





}
)

