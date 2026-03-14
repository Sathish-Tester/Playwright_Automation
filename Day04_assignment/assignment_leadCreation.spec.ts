import { chromium,firefox,webkit,test } from "@playwright/test";


test ('To create a Lead', async ({page}) =>
{   
    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.waitForTimeout (3000);
    await page.locator('#username').fill("Demosalesmanager");
    await page.locator(`[id="password"]`).fill("crmsfa");
    await page.locator(`[class="decorativeSubmit"]`).click();
    await page.waitForTimeout (3000);
    await page.locator('a', {hasText : 'CRM/SFA'}).click();
    await page.waitForTimeout (3000);
    await page.locator('a', {hasText : 'Create Lead'}).click();
    await page.waitForTimeout (3000);
    await page.locator ('#createLeadForm_companyName').fill("Comcast");
    await page.locator ('#createLeadForm_firstName').fill("Sathish");
    await page.locator ('#createLeadForm_lastName').fill("Srinivasan");
    await page.locator ('#createLeadForm_personalTitle').fill("Automation Engineer");
    await page.locator ('#createLeadForm_generalProfTitle').fill("Team Lead");
    await page.locator ('#createLeadForm_annualRevenue').fill('10 lakhs');
    await page.locator ('#createLeadForm_departmentName').fill('QA');
    await page.locator ('#createLeadForm_primaryPhoneNumber').fill('876543210');
    await page.locator ('[type ="submit"]').click();
    await page.waitForTimeout (3000);
    const title = await page.title()
    console.log (title);












}
)

