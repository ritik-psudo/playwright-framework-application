import { test, expect } from "@playwright/test";

test("hardcoded date", async ({ page }) => {
  await page.goto("https://jqueryui.com/datepicker/");

  const iframe = page.frameLocator('[class="demo-frame"]');

  await iframe.locator('input[id="datepicker"]').fill("08/30/2026"); //hardcoding the date to be passed
});

test("dynamic date", async ({ page }) => {
  //automatically picks today exact date
  await page.goto("https://jqueryui.com/datepicker/");

  const iframe = page.frameLocator('[class="demo-frame"]');

  await iframe.locator('input[id="datepicker"]').click();

  await iframe.locator(".ui-datepicker-today").click();
});

test("past date", async ({ page }) => {
  await page.goto("https://jqueryui.com/datepicker/");

  const iframe = page.frameLocator('[class="demo-frame"]');

  await iframe.locator('input[id="datepicker"]').click();

  await iframe.getByTitle("Prev").click();

  await iframe.locator('text="15"').click();
});

test("future date", async ({ page }) => {
  await page.goto("https://jqueryui.com/datepicker/");

  const iframe = page.frameLocator('[class="demo-frame"]');

  await iframe.locator('input[id="datepicker"]').click();

  await iframe.getByTitle("Next").click();

  await iframe.locator('text="15"').click();
});
