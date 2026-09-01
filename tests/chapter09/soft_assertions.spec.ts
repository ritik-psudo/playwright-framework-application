import { test, expect } from "@playwright/test";

test("soft assertions", async ({ page }) => {
  await page.goto("https://www.youtube.com/");

  //toBeVisible assertions
  await expect.soft(page).toHaveTitle("YouTube"); //this will give error but will continue the flow

  //toBeVisible assertions
  await expect(
    page.getByPlaceholder("Search", { exact: true }).first(),
  ).toBeVisible();

  //toBeEditable assertions
  await expect(
    page.getByPlaceholder("Search", { exact: true }).first(),
  ).toBeEditable();
});
