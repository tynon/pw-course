import { test } from '@playwright/test';

test('Test1', async ({ page }) => {
    await test.step('Access page', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });
    await test.step('Select Bài học 1: Register Page', async () => {
        await page.locator("//a[contains(text(),'Bài học 1: Register Page')]").click();
    });
    await test.step('fill information', async () => {
        await page.locator("//input[@id='username']").fill("Nguyễn Văn A");
        await page.locator("//input[@id='email']").fill("a@gmail.com");
        await page.locator("//input[@id='email']").fill("a@gmail.com");
        await page.locator("//input[@id='male']").click();
        await page.locator("//input[@id='traveling']").check();
        await page.locator("//select[@id='interests']").selectOption({ value: "art" });
        await page.locator("//select[@id='country']").selectOption({ value: "uk" });
        await page.locator("//input[@id='dob']").click();
        await page.locator("//input[@id='dob']").pressSequentially("12011999");
        await page.locator("//input[@id='profile']").setInputFiles("data-test/demo.txt");
        await page.locator("//textarea[@id='bio']").fill("demo");
        await page.locator("//input[@id='newsletter']").click();
        await page.locator("//span[@class='slider round']").click();
    });
    await test.step('Register', async () => {
        await page.locator("//button[@type='submit']").click();
    });
});

