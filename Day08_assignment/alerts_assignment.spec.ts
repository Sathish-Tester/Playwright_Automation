import {chromium, test,expect} from "@playwright/test"

test ('To test alerts', async ({page})=>
{


    await page.goto ("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");

    const allFrames = page.frames();

    console.log (allFrames.length)

    const frameURL = page.frame({name : "iframeResult"});

       

    page.on ("dialog", async(alert) => {

        console.log (alert.type());

        console.log (alert.message());

        const alertType = alert.type ();

        if (alertType === "confirm")
        {
            await alert.accept();
        }

        else if (alertType === "prompt") 
            {

            await alert.accept("Testleaf")
        } 
        else {

            await alert.dismiss()
        }

    } )
    
    await frameURL?.locator(`//button[text () = "Try it"]`).click();
    const text = await frameURL?.locator(`#demo`).innerText();
    console.log(text);


    
    

}    
)