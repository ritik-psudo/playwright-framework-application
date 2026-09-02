import { test, expect } from "@playwright/test";

test.skip("flipkart_ps5", async ({ page }) => {
  //goto URL
  await page.goto("https://www.amazon.com/");

  //click on element
  await page.getByPlaceholder("Search Amazon").click();

  //pass the keyword to search
  await page.getByPlaceholder("Search Amazon").fill("Playstation 5");

  //click enter to search
  await page.getByPlaceholder("Search Amazon").press("Enter");

  //validate correct url page is opened
  await expect(page).toHaveURL(
    "https://www.amazon.com/s?k=Playstation+5&ref=nb_sb_noss",
  );
});

test("flipkart_xbox", async ({ page }) => {
  //goto URL
  await page.goto("https://www.amazon.com/");

  //click on element
  await page.getByPlaceholder("Search Amazon").click();

  //pass the keyword to search
  await page.getByPlaceholder("Search Amazon").fill("xbox");

  //click enter to search
  await page.getByPlaceholder("Search Amazon").press("Enter");

  //validate correct url page is opened
  await expect(page).toHaveURL(
    "https://www.amazon.com/s?k=xbox&ref=nb_sb_noss",
  );
});

test.only("flipkart_gta", async ({ page }) => {
  //goto URL
  await page.goto("https://www.amazon.com/");

  //click on element
  await page.getByPlaceholder("Search Amazon").click();

  //pass the keyword to search
  await page.getByPlaceholder("Search Amazon").fill("gta 6");

  //click enter to search
  await page.getByPlaceholder("Search Amazon").press("Enter");

  //validate correct url page is opened
  await expect(page).toHaveURL(
    "https://www.amazon.com/s?k=gta+6&ref=nb_sb_noss",
  );
});
