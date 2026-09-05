//locator strategy
import { test, expect } from "@playwright/test";

test("multi browser/tab test", async ({ page, browser }) => {
  //getByTitle
  await page.goto("https://www.amazon.com/");
  await page.getByPlaceholder("Search Amazon").fill("avengers doomsday");
  await page.getByPlaceholder("Search Amazon").press("Enter");

  //new browser session
  const context2 = await browser.newContext();

  const page2 = await context2.newPage();

  await page2.goto("https://www.amazon.com/");
  await page2.getByPlaceholder("Search Amazon").fill("hot wheels");
  await page2.getByPlaceholder("Search Amazon").press("Enter");

  //create new tab
  const newTab = await context2.newPage();

  await newTab.goto("https://www.amazon.com/");
  await newTab.getByPlaceholder("Search Amazon").fill("manga berserk");
  await newTab.getByPlaceholder("Search Amazon").press("Enter");
});
