import {chromium,test,expect} from "@playwright/test"


test ("To interact with Checkbox", async ({page}) =>
{

    await page.goto ("https://leafground.com/checkbox.xhtml");
    await page.setViewportSize ({ width: 1920, height: 1080 });
    // Clci Basic checkbox
    await page.locator (`(//span[text () = "Basic"]/preceding-sibling :: div)[2]`) .click();

    // Click Ajax Checkbox
    await page.locator (`(//span[text () = "Ajax"]/preceding-sibling :: div)[2]`).click();

    // Verify the expected text is displayed.
    const ajax = page.locator (`[class = "ui-growl-title"]`);
    await ajax.waitFor ({state : "visible"})
    await expect (ajax).toHaveText ("Checked");   
    await ajax.waitFor ({state : 'hidden'});
    

    //Click on your favorite language

    await page.locator ('label:has-text("Java")').nth(0).click();
    await page.locator (`//label[text () = "Python"]/preceding-sibling :: div`).click();

    //Click on the "Tri-State Checkbox."

    await page.locator (`//div[contains (@id, "ajaxTriState")]`).click();    
    

    //Verify which tri-state option has been chosen.
    const triState = page.locator (`//div[@class="ui-growl-message"]/p`);
    await triState.waitFor({state : `visible`});
    await expect (triState).toContainText ("State = 1");
    await triState.waitFor({state : `hidden`});


    //Click on the "Toggle Switch."

    const toggle = await page.locator ('//div[@class="ui-toggleswitch-slider"]/parent ::div');
    await toggle.click();

    //Verify that the expected message is displayed.
    const toggleText = page.locator (`[class = "ui-growl-title"]`);
    await toggleText.waitFor ({state : "visible"})
    await expect (toggleText).toHaveText ("Checked");   
    await toggleText.waitFor ({state : 'hidden'});


    //Verify if the Checkbox is disabled.
    const state = await page.locator(`[aria-label="Disabled"]`).isDisabled();
    console.log (`State of the checkbox is ${state}`);

    //Select multiple options on the page (details may be needed).

    await page.locator('[data-label="Cities"]').click();
    await page.locator (`(//li[@data-item-value="Rome"]//div)[3]`).click();
    await page.locator (`(//li[@data-item-value="Paris"]//div)[3]`).click();

    page.close();


}
)

