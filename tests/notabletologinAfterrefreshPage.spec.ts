import { test, expect } from '@playwright/test';test('user login form test', async ({ page }) => {
await page.locator('body').click();
  await page.goto('file:///C:/Users/Rishi\'s%20HP/Downloads/SmartBank.html#');
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Kushikumari');
  await page.getByRole('textbox', { name: 'Email' }).fill('khushi07@gmail.com');
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Khushikb');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Khushikb');
  await page.screenshot({ path: 'registerdetails.png' });
  await page.getByRole('button', { name: 'Register' }).click();
  await page.screenshot({ path: 'SuccessmsgdisplayedorNot.png' });
  //do not have element 'text' for success message
  //const message= page.locator('//p[@id="regSuccess"]')
  //await expect.soft(message).toHaveText('registration succesful',{timeout:2000})

  // Wait for page to load
  await page.getByText('Login here',{exact:true}).click();
   await page.waitForLoadState('load');

  // Optional: Wait extra time for dynamic elements to load
  await page.waitForTimeout(2000);

  await page.locator('//input[@id="loginEmail"]').fill('khushi07@gmail.com');
 await page.locator('//input[@id="loginEmail"]').press('Tab');
  // Fill in the password field
  await page.locator('input#loginPassword').fill('Khushikb');
  await page.screenshot({ path: '1stlogin.png' });
  // Click the Login button
  
  await page.getByRole('button', { name: 'Login' }).click();
   await page.waitForTimeout(1000);
    await page.screenshot({ path: 'invalid-screenshot.png' });
await page.waitForTimeout(1000);
const usrname= page.locator('span#userName')
await expect.soft(usrname).toHaveText('userName',{timeout:2000})

//in this image you can observe that screen is overlappeed when we tried to find  username
await page.screenshot({ path: 'after-expectext.png' });

await page.locator('input#depositAmount').fill('2000')
await page.locator('//button[@onclick="deposit()"] ').click();
await page.waitForTimeout(1000);
await page.screenshot({ path: 'after-deposit.png' });
 

const confmesg= page.locator('p#depositMsg.success')
await expect(confmesg).toHaveText('Deposit successful.', {timeout:2000})
//await page.locator('input#withdrawAmount').fill('700')
//await page.locator('//button[@onclick="withdraw()"]').click
//loop throgh
// wrong arithmatic calculations for withdraw amount,it behaves like it accepting -amount but 
// when we did it manually it going correctly
await page.locator('text=Transaction History').scrollIntoViewIfNeeded();
await page.screenshot({ path: 'after-scrolldown.png' });
const withdrawAmounts=['700', '700', '800']
for (const amount of withdrawAmounts) {
    // Fill the withdraw input with current amount
    await page.locator('#withdrawAmount').fill(amount);

    // Click the withdraw submit button
    await page.locator('//button[@onclick="withdraw()"]').click();
await page.screenshot({ path: 'after-withdraw.png' });
    // Optional wait between withdrawals
    await page.waitForTimeout(1000);
}

 await page.waitForTimeout(1000);
const withdrawmsg= page.locator('p#withdrawMsg.success')
  await expect(withdrawmsg).toHaveText('Withdrawal successful.',{timeout:3000})
  await page.screenshot({ path: 'withdrwamessage.png' });
await page.waitForTimeout(1000);


const err=await page.locator('p#withdrawError.error')
await expect(err).toHaveText(' ',{timeout:2000});
await page.screenshot({ path: 'after-error.png' });
  
  //Transanction History

  // await page.waitForSelector('#table#transactionTabl');

  // Get all transaction rows (skipping the header)
  const rows = await page.locator('#table#transactionTable tr').nth(1).evaluateAll((rowElements) => {
    // Map over rows starting from index 1 (skip the header)
    return Array.from(rowElements).map(row => {
      const cells = row.querySelectorAll('td');
      return {
        date: cells[0]?.textContent?.trim() || '',
        type: cells[1]?.textContent?.trim() || '',
        amount: cells[2]?.textContent?.trim() || '',
      };
      
    });
    
  });
  await page.screenshot({ path: 'after-consoletable.png' });

  console.log('Transaction History:', rows);


//Logout
await page.locator('//button[@onclick="logout()"]').scrollIntoViewIfNeeded();
await page.waitForTimeout(1000);
await page.screenshot({ path: 'after-scrolldown.png' });
 await page.screenshot({ path: 'after-logout.png' });
const logout=await page.locator('//button[@onclick="logout()"]').click();
 await page.screenshot({ path: 'after-logout.png' });
//await expect(logout).toHaveText('')
//without refreshing page
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Login' }).click();
   await page.waitForTimeout(1000);
    await page.screenshot({ path: 'again-login.png' });
 
await page.screenshot({ path: 'before-refresh.png' });

  // Refresh the page
  await page.reload();

  // Optional: Wait after refresh
  await page.waitForLoadState('load');

  // Screenshot after refresh
  await page.screenshot({ path: 'after-refresh.png' });

//after refresh page ,try to login
 await page.waitForTimeout(1000);

   await page.getByText('Login here',{exact:true}).click();
   await page.waitForLoadState('load');

  // Optional: Wait extra time for dynamic elements to load
  await page.locator('//input[@id="loginEmail"]').fill('khushi07@gmail.com');
 await page.locator('//input[@id="loginEmail"]').press('Tab');
  await page.locator('input#loginPassword').fill('Khushikb');
  await page.getByRole('button', { name: 'Login' }).click();
   await page.waitForTimeout(1000);
  const refreshLogin= page.locator('p#loginError.error')
  await expect.soft(refreshLogin).toHaveText('Invalid email or password.',{timeout:3000})
  await page.screenshot({ path: 'afterrefreshpageLogin.png' });
 //here you can observe that user is not able to login again 
 // if user refresh page and tried to login using registerd email and password
});







