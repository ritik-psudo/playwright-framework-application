import { test, expect } from "@playwright/test";

test("failure screenshot report", async ({ page }) => {
  await page.goto("https://www.youtube.com/");

  await page.locator('input[name="search_query"]').fill("hero man stan lee");

  await page.locator('input[name="search_query"]').press("Enter");

  await expect(page).toHaveURL(/hero fail/);
});

test("passed screenshot report", async ({ page }) => {
  await page.goto("https://www.youtube.com/");

  await page.locator('input[name="search_query"]').fill("hero man stan lee");

  await page.locator('input[name="search_query"]').press("Enter");

  await expect(page).toHaveURL(/hero/);
});
