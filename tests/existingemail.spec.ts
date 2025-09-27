//registaion with existing registerd email
import { test, expect } from '@playwright/test';
test('user registration page with valid email', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('file:///C:/Users/Rishi\'s%20HP/Downloads/SmartBank.html#');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('John');
  await page.getByRole('textbox', { name: 'Email' }).fill('johnsmith@gmail.com');
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Johncena');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Johncena');
  await page.screenshot({ path: 'screenshot.png' });
  await page.getByRole('button', { name: 'Register' }).click();

   await page.waitForLoadState('load');
  await page.getByText('Login here', { exact: true }).click();
});