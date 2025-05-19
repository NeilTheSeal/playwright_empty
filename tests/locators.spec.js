const { test, expect } = require("@playwright/test");

test("Locators", async({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise");

  await page.getByLabel("Username").fill("rahulshettyacademy");
  await page.getByLabel("Password").fill("learning");
  await page.locator(`input[value="user"]`).click();
  await page.getByRole("button", { name: "Okay" }).click();
  await page.locator("css=#terms").click();
  await page.getByRole("button", { name: "Sign In" }).click();

  await page.waitForURL("https://rahulshettyacademy.com/angularpractice/shop");

  // Screenshot the page
  await page.screenshot({ path: "screenshots/login.png" });
});