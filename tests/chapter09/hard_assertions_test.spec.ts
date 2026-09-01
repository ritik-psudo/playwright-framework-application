import { test, expect } from "@playwright/test";
test.describe("assertions test", () => {
  test("hard assertions", async ({ page }) => {
    await page.goto("https://www.youtube.com/");

    //toBeVisible assertions
    await expect(
      page.getByPlaceholder("Search", { exact: true }).first(),
    ).toBeVisible();

    //toBeEditable assertions
    await expect(
      page.getByPlaceholder("Search", { exact: true }).first(),
    ).toBeEditable();

    //toBeEnabled assertions
    await expect(
      page.getByPlaceholder("Search", { exact: true }).first(),
    ).toBeEnabled();

    //isEmpty assertions
    await expect(
      page.getByPlaceholder("Search", { exact: true }).first(),
    ).toBeEmpty();
  });
  test("content assertions", async ({ page }) => {
    await page.goto("https://demo.opencart.com/");

    await page.getByPlaceholder("Search").first().click();

    await page.getByPlaceholder("Search").first().fill("car");

    await page.getByPlaceholder("Search").first().press("Enter");

    //toHaveURL assertions
    await expect(page).toHaveURL(
      "https://demo.opencart.com/index.php?route=product/search&language=en-gb&search=car",
    );

    //toHaveTitle assertions
    await expect(page).toHaveTitle("Search - car");

    //toHaveText assertions
    await expect(page.locator('div[id="content"] h1')).toHaveText(
      "Search - car",
    );

    //toHaveCount assertions
  });
});
