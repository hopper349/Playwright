const { test,expect } = require("@playwright/test");

test("Browser contxt test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.google.com");
  console.log(await page.title());
  await expect(page).toHaveTitle('Google');

});

//if we don't have any specific context defined then we can use page fixture directly
test("page contxt test", async ({ page }) => {
  await page.goto("https://www.google.com");
  console.log(await page.title());
  await expect(page).toHaveTitle('Google');
});
