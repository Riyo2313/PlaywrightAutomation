import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('file:///C:/Users/Rishi\'s%20HP/Downloads/SmartBank.html#');
  await page.getByRole('link', { name: 'Login here' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('link', { name: 'Register here' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Seema');
  await page.getByRole('textbox', { name: 'Full Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email' }).fill('seema123@gmail.com');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Seemawill');
  await page.getByRole('textbox', { name: 'Password', exact: true }).press('Tab');
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Seemawill');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('seema123@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Seemawill');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('#depositAmount').click();
  await page.locator('#depositAmount').fill('2000');
  await page.locator('#withdrawAmount').click();
  await page.locator('#withdrawAmount').fill('200');
  await page.locator('#dashboard div').filter({ hasText: 'Deposit Submit' }).getByRole('button').click();
  await page.locator('#dashboard div').filter({ hasText: 'Withdraw Submit' }).getByRole('button').click();
  await page.locator('body').click();
});