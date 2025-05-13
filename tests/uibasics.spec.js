const { test, expect } = require("@playwright/test");

test("First Playwright test", async({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://neilhendren.com");
  const title = await page.title();
  expect(title).toBe("Neil Hendren Portfolio");
  await context.close();
  await browser.close();
  console.log("Test completed successfully");
});