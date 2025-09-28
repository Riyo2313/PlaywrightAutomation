import { test, expect } from '@playwright/test';
//login with correct password
test('user login form test', async ({ page }) => {
await page.locator('body').click();
  await page.goto('file:///C:/Users/Rishi\'s%20HP/Downloads/SmartBank.html#');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Janhavi');
  await page.getByRole('textbox', { name: 'Email' }).fill('janhavi13@gmail.com');
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Janhavik');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Janhavik');
  await page.screenshot({ path: 'screenshot.png' });
  await page.getByRole('button', { name: 'Register' }).click();
  //do not have element 'text' for success message
  //const message= page.locator('//p[@id="regSuccess"]')
  //await expect.soft(message).toHaveText('registration succesful',{timeout:2000})

  // Wait for page to load

  await page.getByText('Login here',{exact:true}).click();
   await page.waitForLoadState('load');

  // Optional: Wait extra time for dynamic elements to load
  await page.waitForTimeout(2000);

  await page.locator('//input[@id="loginEmail"]').fill('');
 await page.locator('//input[@id="loginEmail"]').press('Tab');
  // Fill in the password field
  await page.locator('input#loginPassword').fill('');
  await page.screenshot({ path: 'BlankInput.png' });
  // Click the Login button
  
  await page.getByRole('button', { name: 'Login' }).click();
   await page.waitForTimeout(2000);
   await page.screenshot({ path: 'AfterBlankInput.png' });
  // Click the Login button
   const blank= page.locator('p#loginError.error')
  await expect.soft(blank).toHaveText('Invalid email or password.',{timeout:2000})
});

 test('user login form incorrect credential', async ({ page }) => {
await page.locator('body').click();
  await page.goto('file:///C:/Users/Rishi\'s%20HP/Downloads/SmartBank.html#');
 
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Janhavi');
  await page.getByRole('textbox', { name: 'Email' }).fill('janhavi13@gmail.com');
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Janhavik');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Janhavik');
  await page.screenshot({ path: 'sceenshotbeforeg.png' });
  await page.getByRole('button', { name: 'Register' }).click();
  //do not have element 'text' for success message
  //const message= page.locator('//p[@id="regSuccess"]')
  //await expect.soft(message).toHaveText('registration succesful',{timeout:2000})
await page.screenshot({ path: 'sceenshoafterreg.png' });
  // Wait for page to load

  await page.getByText('Login here',{exact:true}).click();
   await page.waitForLoadState('load');

  // Optional: Wait extra time for dynamic elements to load
  await page.waitForTimeout(2000);

  await page.locator('//input[@id="loginEmail"]').fill('anhav@gmail.com');
 await page.locator('//input[@id="loginEmail"]').press('Tab');
  // Fill in the password field
  await page.locator('input#loginPassword').fill('Janhav');
  await page.screenshot({ path: 'Blankinput.png' });
  // Click the Login button
  
  await page.getByRole('button', { name: 'Login' }).click();
   await page.waitForTimeout(2000);
    await page.screenshot({ path: 'AfterBlank.png', });
   const blank= page.locator('p#loginError.error')
  await expect.soft(blank).toHaveText('Invalid email or password.',{timeout:2000})

  
});

test('user login form not registerd email credential', async ({ page }) => {
await page.locator('body').click();
  await page.goto('file:///C:/Users/Rishi\'s%20HP/Downloads/SmartBank.html#');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Janhavi');
  await page.getByRole('textbox', { name: 'Email' }).fill('janhavi13@gmail.com');
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Janhavik');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Janhavik');
  await page.screenshot({ path: 'screenshot.png' });
  await page.getByRole('button', { name: 'Register' }).click();
  //do not have element 'text' for success message
  //const message= page.locator('//p[@id="regSuccess"]')
  //await expect.soft(message).toHaveText('registration succesful',{timeout:2000})

  // Wait for page to load

  await page.getByText('Login here',{exact:true}).click();
   await page.waitForLoadState('load');

  // Optional: Wait extra time for dynamic elements to load
  await page.waitForTimeout(2000);

  await page.locator('//input[@id="loginEmail"]').fill('khushi@gmail.com');
 await page.locator('//input[@id="loginEmail"]').press('Tab');
  // Fill in the password field
  await page.locator('input#loginPassword').fill('Khushibk');
   await page.screenshot({ path: 'Incorrectscreenshot.png' });
  // Click the Login button
  
  await page.getByRole('button', { name: 'Login' }).click();
   await page.waitForTimeout(2000);
   await page.screenshot({ path: 'AfterIncorrectscreenshot.png' });
      
   const blank= page.locator('p#loginError.error')
  await expect.soft(blank).toHaveText('Invalid email or password.',{timeout:2000})


});

