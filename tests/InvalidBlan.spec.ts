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
  await page.screenshot({ path: 'screenshot.png' });
  // Click the Login button
  
  await page.getByRole('button', { name: 'Login' }).click();
   await page.waitForTimeout(2000);
    await page.screenshot({ path: 'screenshot.png' });
   const blank= page.locator('p#loginError.error')
  await expect.soft(blank).toHaveText('Invalid email or password.',{timeout:2000})
});

 test('user login form incorrect credential', async ({ page }) => {
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

  await page.locator('//input[@id="loginEmail"]').fill('anhav');
 await page.locator('//input[@id="loginEmail"]').press('Tab');
  // Fill in the password field
  await page.locator('input#loginPassword').fill('Janhav');
  await page.screenshot({ path: 'screenshot.png' });
  // Click the Login button
  
  await page.getByRole('button', { name: 'Login' }).click();
   await page.waitForTimeout(2000);
    await page.screenshot({ path: 'screenshot.png', });
   const blank= page.locator('p#loginError.error')
  await expect.soft(blank).toHaveText('Invalid email or password.',{timeout:2000})





  // Optional: Wait for navigation/dashboard/etc.
  /*await page.waitForTimeout(2000); // Adjust as needed

  // Screenshot after login click
  await page.screenshot({ path: 'after-login-click.png' });
   await page.waitForTimeout(2000);
//const welcome= page.locator('//h2[text()="Welcome "]')
//await expect.soft(welcome).toHaveText("Welcome")
const usrname= page.locator('span#userName')
await expect.soft(usrname).toHaveText('userName',{timeout:2000})

//await expect(welcome).toBeVisible();')
//await expect(welcome).toBeVisible();
await page.screenshot({ path: 'screenshot.png' });

await page.locator('input#depositAmount').fill('2000')
await page.locator('//button[@onclick="deposit()"] ').click();
 await page.waitForTimeout(2000);

const confmesg= page.locator('p#depositMsg.success')
await expect(confmesg).toHaveText('Deposit successful.', {timeout:2000})
//await page.locator('input#withdrawAmount').fill('700')
//await page.locator('//button[@onclick="withdraw()"]').click
//loop throgh
// wrong arithmatic calculations for withdraw amount,it behaves like it accepting -amount but 
// when we did it manually it going correctly
const withdrawAmounts=['700', '-95', '1400']
for (const amount of withdrawAmounts) {
    // Fill the withdraw input with current amount
    await page.locator('#withdrawAmount').fill(amount);

    // Click the withdraw submit button
    await page.locator('//button[@onclick="withdraw()"]').click();
await page.screenshot({ path: 'screenshot.png' });
    // Optional wait between withdrawals
    await page.waitForTimeout(1000);

}
await page.screenshot({ path: 'screenshot.png' });
 await page.waitForTimeout(1000);
const withdrawmsg= page.locator('p#withdrawMsg.success')
  await expect(withdrawmsg).toHaveText('Withdrawal successful.',{timeout:3000})
  await page.screenshot({ path: 'screenshot.png' });
 await page.locator('input#withdrawAmount').fill('1400')
await page.locator('//button[@onclick="withdraw()"]').click*/
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
  await page.screenshot({ path: 'screenshot.png' });
  // Click the Login button
  
  await page.getByRole('button', { name: 'Login' }).click();
   await page.waitForTimeout(2000);
    await page.screenshot({ path: 'screenshot.png', });
   const blank= page.locator('p#loginError.error')
  await expect.soft(blank).toHaveText('Invalid email or password.',{timeout:2000})


});

