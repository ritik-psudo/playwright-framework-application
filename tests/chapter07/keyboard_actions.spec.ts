import { test, expect } from "@playwright/test";

test("press enter", async ({ page }) => {
  await page.goto("https://www.amazon.com/");

  //   await page.getByText("Dismiss").click();

  //keyboard actions
  await page.getByPlaceholder("Search Amazon", { exact: true }).click();

  await page.getByPlaceholder("Search Amazon", { exact: true }).fill("phone");

  await page.getByPlaceholder("Search Amazon", { exact: true }).press("Enter");

  await expect(page.getByText("phone")).toBeVisible();
});

test("selecting & deleting from keyboard", async ({ page }) => {
  await page.goto("https://www.amazon.com/");

  await page.getByPlaceholder("Search Amazon", { exact: true }).click();

  await page
    .getByPlaceholder("Search Amazon", { exact: true })
    .fill("random incorrect item");

  await page.keyboard.press("Control+A"); //selects all text

  await page.keyboard.press("Delete");
});

test("press TAB & Enter from keyboard", async ({ page }) => {
  await page.goto("https://www.amazon.com/");

  await page.getByPlaceholder("Search Amazon", { exact: true }).click();

  await page.keyboard.press("Tab");

  await page.keyboard.press("Enter");
});
