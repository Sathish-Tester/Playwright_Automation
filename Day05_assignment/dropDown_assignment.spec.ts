import { chromium,test,expect } from "@playwright/test"



test ("To interact and verify the behavior of dropdown", async ({page}) =>
{
    await page.goto ("https://leafground.com/select.xhtml");
    await page.setViewportSize({ width: 1920, height: 1080 });
    
    const dropdown = page.locator ('//select[@class = "ui-selectonemenu"]');

    await dropdown.selectOption({label : 'Playwright'});

    // Print the count and the dropdown values

    const valueCount = await dropdown.count();
    console.log (`No of values in the dropdown menu is ${valueCount}`);

    
    for (let i = 0; i<valueCount; i++)
    {
        const dropValue = await dropdown.nth(i).innerText();
        console.log (`Dropdown values are ${dropValue}`);    
       
    }


    // Select the Preferred Country
    await page.locator('//label[contains (@id, "country_label")]').click(); 
    await page.getByRole ('option', {name: "India"}).click();

    // Select the city
    await page.locator('//label[contains (@id, "city_label")]').click(); 
    await page.getByRole ('option', {name : "Chennai"}).click();

    //Choose any three courses from the dropdown
    const options = await page.locator(`[aria-label="Show Options"]`);
    await options.click();
    await expect (page.getByRole('option', {name : "AWS"})).toBeVisible();
    await page.getByRole('option', {name : "AWS"}).click();

    
    await options.click();
    await expect (page.getByRole('option', {name : "RestAssured"})).toBeVisible();
    await page.getByRole('option', {name : "RestAssured"}).click();   
    

    await options.click();
    await expect (page.locator (`[data-item-value="Playwright"]`)).toBeVisible();
    await page.locator (`[data-item-value="Playwright"]`).click();
    
      


    //Choose a language and print all the values from the dropdown.
    await page.locator('//label[contains (@id, "lang_label")]').click();
    const sellang = await page.getByRole('option', {name : "Hindi"});
    await expect (sellang).toBeVisible();
    await sellang.click();    
    const langtext = await sellang.innerText();
    await sellang.innerText();
    const lang = page.locator('//ul[contains (@id, "lang_items")]')
    const allOptions = await lang.getByRole('option').allInnerTexts();

    console.log (allOptions);   
    
    
    // Select 'Two' irrespective of the language chosen
    const value = page.locator (`//label[contains (@id, "value_label")]`);
    await expect (value).toBeVisible();
    await value.click();
    //await page.getByRole('option', {name : "Two"}).click();

    switch (langtext)
    {
        case "English":
        await page.locator (`(//ul[contains (@id, "value_items")]/li)[4]`).click();
        break

        case "Tamil":
        await page.locator (`(//ul[contains (@id, "value_items")]/li)[2]`).click();
        break

        case "Telugu":
        await page.locator (`(//ul[contains (@id, "value_items")]/li)[4]`).click();
        break;

        case "Kannada":
        await page.locator (`(//ul[contains (@id, "value_items")]/li)[2]`).click();
        break
        
        case "Malayalam":
        await page.locator (`(//ul[contains (@id, "value_items")]/li)[4]`).click();
        break;

        case "Hindi":
        await page.locator (`(//ul[contains (@id, "value_items")]/li)[4]`).click();
        break;

        default :
        await page.locator (`(//ul[contains (@id, "value_items")]/li)[1]`).click();
        break;

        

        
    }
    await page.waitForTimeout(3000);

    
   
         

   
   
}
)




    


    
