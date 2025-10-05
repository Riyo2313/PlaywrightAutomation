
import { test, expect } from '@playwright/test';

test('API get request test', async ({ request }) => {
    const response = await request.get('https://cat-fact.herokuapp.com/facts');
   expect(response.status()).toBe(200);
  /* const text= await response.text();
   expect(text).toContain('morpheus');
   console.log(text);*/
});

test('API post request test', async ({ request }) => {
const response = await request.post('https://reqres.in/api/users', {
    data: {
        name: "morpheus",
        job: "leader"
    }
});
   expect(response.status()).toBe(201);
   const text= await response.text();
   expect(text).toContain('morpheus');
   console.log(text);
});

test('API put request test', async ({ request }) => {
const response = await request.put('https://reqres.in/api/users/2', {
    data: {  name: "Yogita",
        job: "leader"
    }
}); 
 expect(response.status()).toBe(201);
   const text= await response.text();
   expect(text).toContain('Yogita');
   console.log(text);
});  

test('API delete request test', async ({ request }) => {
const response = await request.delete('https://reqres.in/api/users/2');
   expect(response.status()).toBe(204);
});
//204 no content so no text to verify