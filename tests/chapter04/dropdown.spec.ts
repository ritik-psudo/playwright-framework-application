import { test, expect } from "@playwright/test";

test("dropdown test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");

  await page.getByText("Dropdown").click();

  //select dropdown using value

  await page.locator('select[id="dropdown"]').selectOption("2");

  //select by visible text

  await page.locator('select[id="dropdown"]').selectOption("Option 1");

  //validate all values of the dropdown
  const drop_values: string = " Please select an option Option 1 Option 2";
  await expect(page.locator('select[id="dropdown"]')).toHaveText(drop_values);
});
