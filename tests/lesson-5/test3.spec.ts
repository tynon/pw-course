import { test } from '@playwright/test';

test('Test3', async ({ page }) => {
    await test.step('Access page', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });
    await test.step('Select Bài học 3: Todo page', async () => {
        await page.locator("//a[contains(text(),'Bài học 3: Todo page')]").click();
    });
    await test.step('add 100 todo items', async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
            await page.locator("//button[@id='add-task']").click();
        }
    });
    await test.step('delete todo số lẻ', async () => {
        page.on('dialog', async dialog => dialog.accept());
        for (let i = 1; i <= 100; i += 2) {
            await page.locator(`//li/div/button[@id='todo-${i}-delete']`).click();
        }
    });
});