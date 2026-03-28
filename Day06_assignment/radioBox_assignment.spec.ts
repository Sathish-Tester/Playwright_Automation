import {chromium, test, expect} from "@playwright/test"


test ("To interact with radiobox elements", async ({page})=>
{
    await page.goto("https://leafground.com/radio.xhtml");
    await page.setViewportSize({width:1920 , height:1080})


    //Identify and assert the default selected radio button.
    const status = await page.getByRole ('radio', { name : "Safari" }).nth(1).isChecked();
    console.log (`Status of radiobox checked is ${status}`);

    const age = await page.getByRole ('radio', {name : "21-40 Years"}).isChecked();
    console.log (`Status of age radiobox checked is ${age}`);


    //Click your most favorite browser and assert that the browser is enabled.      
    const fav = await page.locator('label:has-text("Chrome")').first();
    await fav.click();
    const favStaus = await fav.isChecked();
    console.log (`Status of fav browser checked is ${favStaus}`);

    //Click one of the cities.

    const city = await page.locator('label:has-text("Bengaluru")');
    await city.click();
    const cityStatus = await city.isChecked();
    console.log (`Status of city checked is ${favStaus}`);

    //Select the age group. Assert the default selected button

    const ageGroup = await page.locator('label:has-text("1-20 Years")');
    await ageGroup.click();
    const ageStatus = await ageGroup.isChecked();
    console.log (`Status of age group checked is ${ageStatus}`);
    const ageNew = await page.getByRole ('radio', {name : "21-40 Years"}).isChecked();
    console.log (`Status of age radiobox checked is ${ageNew}`);




    






}
)