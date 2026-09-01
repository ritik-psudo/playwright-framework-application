//locator strategy
import { test, expect } from "@playwright/test";

test("locators test", async ({ page }) => {
  //Go To URL
  //await page.goto("https://github.com/BakkappaN/");

  //getByRole
  //await page.getByRole("link", { name: "Sign in" }).click();

  //getByLabel
  //await page.getByLabel("Homepage", { exact: true }).first().click();

  //getByAltText - used for Images
  //await page.getByAltText("View BakkappaN's full-sized avatar").click();

  //getByTestId - for custom attribute defined in playwright.config file
  //await page.getByTestId("projects").first().click();

  //getByText
  //await page.getByText("Sign up").click();

  //getByPlaceholder, XPath & CSS selector

  //await page.goto("https://www.youtube.com/results?search_query=testers+talk");

  //placeholder
  //await page.getByPlaceholder("Search").fill("inkflowritik");
  //await page.getByPlaceholder("Search").press("Enter");

  //XPath - "//" and "@" is used in XPath
  //await page.locator('//input[@name="search_query"]').fill("indirapuram in 2016");
  //await page.locator('//input[@name="search_query"]').press("Enter");

  //CSS Locator
  //await page.locator('input[name="search_query"]').fill("nostalgia podcast");
  //await page.locator('input[name="search_query"]').press("Enter");

  //getByTitle
  await page.goto("https://www.google.com/");
  await page.getByTitle("Search").fill("avengers doomsday");
  await page.getByTitle("Search").press("Enter");
  await page.goBack();
  await page.getByTitle("Search").fill("spiderman");
  await page.getByTitle("Search").press("Enter");
});
