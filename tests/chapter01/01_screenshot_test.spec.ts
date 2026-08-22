import { test, expect } from "@playwright/test";

test("screenshot test", async ({ page }) => {
  //go to url
  await page.goto("https://www.youtube.com/@testerstalk");

  //capture the element screenshot
  await page.locator("#page-header-container").screenshot({
    path: "tests/chapter01/screenshots/Element_screenshot.png",
  });

  await page.waitForLoadState("networkidle");

  //capture page screenshot
  await page.screenshot({
    path: "tests/chapter01/screenshots/Page_screenshot.png",
  });

  //capture full page screenshot
  await page.screenshot({
    path: "tests/chapter01/screenshots/FullPage_screenshot.png",
    fullPage: true,
  });
});

test("Passed_screenshot in report", async ({ page }) => {
  //go to url
  await page.goto("https://www.youtube.com/@testerstalk");

  //capture the element screenshot
  await page.locator("#page-header-container").screenshot({
    path: "tests/chapter01/screenshots/Element_screenshot.png",
  });

  await page.waitForLoadState("networkidle");

  //capture page screenshot
  await page.screenshot({
    path: "tests/chapter01/screenshots/Page_screenshot.png",
  });

  //capture full page screenshot
  await page.screenshot({
    path: "tests/chapter01/screenshots/FullPage_screenshot.png",
    fullPage: true,
  });
});
