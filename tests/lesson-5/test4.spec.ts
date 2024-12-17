import { test } from '@playwright/test';

test('Test4', async ({ page }) => {
    await test.step('Access page', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });
    await test.step('Select Bài học 4: Personal notes', async () => {
        await page.locator("//a[contains(text(),'Bài học 4: Personal notes')]").click();
    });
    await test.step('fill 10 notes : Tiitle and Content', async () => {
        for (let i = 1; i <= 10; i++) {
            await page.locator("//input[@id='note-title']").fill(`Tittle ${i}`);
            await page.locator("//textarea[@id='note-content']").fill("Giàn turbine gió kép nổi của công ty Minh Dương đang hoạt động ngoài khơi tỉnh Quảng Đông.\nGiàn turbine gió kép nổi của công ty Minh Dương đang hoạt động ngoài khơi tỉnh Quảng Đông.\nGiàn turbine gió kép nổi của công ty Minh Dương đang hoạt động ngoài khơi tỉnh Quảng Đông.");
            await page.locator("//button[@id='add-note']").click();
        }
    });
    await test.step('search tittle of Note', async () => {
        await page.locator("//input[@id='search']").fill("Tittle 10");
    });
});