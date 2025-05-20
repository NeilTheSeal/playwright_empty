const { test, expect } = require("@playwright/test");

test("Inspector", async({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  await page.locator("#username").fill("rahulshettyacademy");
  await page.locator("#password").fill("learning");

  const title = await page.title();

  expect(title).toBe("LoginPage Practise | Rahul Shetty Academy");

  await page.locator("#signInBtn").click();
});