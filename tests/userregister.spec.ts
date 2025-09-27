import { test, expect } from '@playwright/test';

test('user registration page with invalid name', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('file:///C:/Users/Rishi\'s%20HP/Downloads/SmartBank.html#');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('John12');
  await page.getByRole('textbox', { name: 'Email' }).fill('johncena12@gmail.com');
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Johncena');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Johncena');
  await page.screenshot({ path: 'screenshot.png' });
  await page.getByRole('button', { name: 'Register' }).click();
   await page.getByText('Login here',{exact:true}).click();
   await page.waitForLoadState('load');

  // Optional: Wait extra time for dynamic elements to load
  await page.waitForTimeout(2000);

  await page.locator('//input[@id="loginEmail"]').fill('johnsmith@gmail.com');
  await page.screenshot({ path: 'screenshot.png' });
  

});

//do not have element 'text' for success message.testcase fail
test('user registration page with valid name ', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('file:///C:/Users/Rishi\'s%20HP/Downloads/SmartBank.html#');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('John');
  await page.getByRole('textbox', { name: 'Email' }).fill('johncena12@gmail.com');
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Johncena');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Johncena');
  await page.screenshot({ path: 'screenshot.png' });
  await page.getByRole('button', { name: 'Register' }).click();
  //const message= page.locator('//p[@id="regSuccess"]')
  //await expect.soft(message).toHaveText('registration succesful')
  
});

test('user registration page with invalid email', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('file:///C:/Users/Rishi\'s%20HP/Downloads/SmartBank.html#');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('John');
  await page.getByRole('textbox', { name: 'Email' }).fill('johncena12@gmacom');
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Johncena');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Johncena');
  await page.screenshot({ path: 'screenshot.png' });
  await page.getByRole('button', { name: 'Register' }).click();
   await page.waitForLoadState('load');
  await page.getByText('Login here', { exact: true }).click();

  

});

test('user registration page with valid email', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('file:///C:/Users/Rishi\'s%20HP/Downloads/SmartBank.html#');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('John');
  await page.getByRole('textbox', { name: 'Email' }).fill('johncena12@gmail.com');
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Johncena');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Johncena');
  await page.screenshot({ path: 'screenshot.png' });
  await page.getByRole('button', { name: 'Register' }).click();
  
});


test('password charchter more than 8', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('file:///C:/Users/Rishi\'s%20HP/Downloads/SmartBank.html#');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('John');
  await page.getByRole('textbox', { name: 'Email' }).fill('johncena12@gmacom');
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Johncenahollywood');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Johenahollywood');
  await page.screenshot({ path: 'screenshot.png' });
   
});
test('Alphanumeric charchter ', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('file:///C:/Users/Rishi\'s%20HP/Downloads/SmartBank.html#');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('John');
  await page.getByRole('textbox', { name: 'Email' }).fill('johncena12@gmacom');
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('John1234');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('John1234');
  await page.screenshot({ path: 'screenshot.png' });
  await page.getByRole('button', { name: 'Register' }).click();
  
});




test('user registration page with valid name and pass(not a alphnumeric)', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('file:///C:/Users/Rishi\'s%20HP/Downloads/SmartBank.html#');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('John124');
  await page.getByRole('textbox', { name: 'Email' }).fill('johnsmith@gmail.com');
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Johnsmith');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Johnsmith');
  await page.screenshot({ path: 'screenshot.png' });
  await page.getByRole('button', { name: 'Register' }).click();
  //do not have element 'text' for success message
  const message= page.locator('//p[@id="regSuccess"]')
  await expect.soft(message).toHaveText('registration succesful')

});

// registation scuccesfully with invalid email and  invalid password,
// name and password is not same as mentioned in requirement
test('user registration page with ivalid email and valid pass(not alphanumeric)', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('file:///C:/Users/Rishi\'s%20HP/Downloads/SmartBank.html#');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('John');
  await page.getByRole('textbox', { name: 'Email' }).fill('johnsmith@gmacom');
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Johnsmith');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Johnsmith');
  await page.screenshot({ path: 'screenshot.png' });
  await page.getByRole('button', { name: 'Register' }).click();
  
  await page.getByText('Login here',{exact:true}).click();
   await page.waitForLoadState('load');

  // Optional: Wait extra time for dynamic elements to load
   

  

   
});

// Registation fail for required password functionality
test('user registration page with valid name email and pass(not a alphnumeric', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('file:///C:/Users/Rishi\'s%20HP/Downloads/SmartBank.html#');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('John');
  await page.getByRole('textbox', { name: 'Email' }).fill('johnsmith@gmail.com');
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('John1234');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('John1234');
  await page.screenshot({ path: 'screenshot.png' });
  await page.getByRole('button', { name: 'Register' }).click();
  const mismatch=page.locator('text=Password must be at least 8 characters and include letters and numbers.')
  await expect(mismatch).toHaveText('Password must be at least 8 characters and include letters and numbers.')
  

});

test('password mismatch', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('file:///C:/Users/Rishi\'s%20HP/Downloads/SmartBank.html#');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('John');
  await page.getByRole('textbox', { name: 'Email' }).fill('johncena12@gmail.com');
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Johncena');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Johena');
  await page.screenshot({ path: 'screenshot.png' });
  await page.getByRole('button', { name: 'Register' }).click();
  const missmatch=page.locator('text=Passwords do not match')
  await expect(missmatch).toHaveText('Passwords do not match.');
  

});

test('user registration page with ivalid name and pass(not a alphnumeric)', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('file:///C:/Users/Rishi\'s%20HP/Downloads/SmartBank.html#');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('John124');
  await page.getByRole('textbox', { name: 'Email' }).fill('johnsmith@gmail.com');
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Johnsmith');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Johnsmith');
  await page.screenshot({ path: 'screenshot.png' });
  await page.getByRole('button', { name: 'Register' }).click();
  //do not have element 'text' for success message
  const message= page.locator('//p[@id="regSuccess"]')
  await expect.soft(message).toHaveText('registration succesful')
  await page.getByText('Login here',{exact:true}).click();
   await page.waitForLoadState('load');

  // Optional: Wait extra time for dynamic elements to load
  await page.waitForTimeout(2000);

  await page.locator('//input[@id="loginEmail"]').fill('johnsmith@gmail.com');
  await page.screenshot({ path: 'screenshot.png' });
   
/*  //await page.getByPlaceholder('//input[@type="password" and @placeholder="Password"]').fill('Johnsmith');
 //const pass= await page.locator('//input[@placeholder="Password"]').fill('Johnsmith')
 await pass.waitFor('visible');
 
  // Optional: Wait extra time for dynamic elements to load
  await page.waitForTimeout(2000);

  await page.screenshot({ path: 'screenshot.png' });
  await page.getByText('text=Login',{exact:true}).click();

  
*/
});








