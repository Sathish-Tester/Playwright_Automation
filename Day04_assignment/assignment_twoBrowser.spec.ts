import {chromium,firefox,webkit,test} from '@playwright/test';


test ('To launch Edge browser', async () =>{

    const browser1 = await chromium.launch({ channel : 'msedge' });
    const context1 = await browser1.newContext();
    const page1 = await context1.newPage();
    await page1.goto('https://www.redbus.in/');
    const title1 = await page1.title();
    console.log (title1);
    const url = page1.url();
    console.log (url);   



})

test ('To launch Firefox browser', async () =>{

    const browser2 = await firefox.launch();
    const context2 = await browser2.newContext();
    const page2 = await context2.newPage();
    await page2.goto('https://www.flipkart.com');
    const title2 = await page2.title();
    console.log (title2);
    const url2 = page2.url();
    console.log (url2);

}
)
