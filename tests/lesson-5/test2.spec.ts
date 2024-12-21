import { test } from '@playwright/test';

test('Add Items To Cart', async ({ page }) => {
    await test.step('Access page', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });
    await test.step('Select Bài học 2: Register Page', async () => {
        await page.locator("//a[contains(text(),'Bài học 2: Product page')]").click();
    });
    await test.step('select 2 Product 1', async () => {
        await page.locator("//button[@data-product-id='1']").dblclick();
    });
    await test.step('select 3 Product 2', async () => {
        await page.locator("//button[@data-product-id='2']").click({clickCount:3});
    });
    await test.step('select 3 Product 1', async () => {
        await page.locator("//button[@data-product-id='3']").click();
    });
});