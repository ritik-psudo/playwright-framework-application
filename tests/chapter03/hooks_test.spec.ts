import { test, expect } from "@playwright/test";

//beforeAll hook
test.beforeAll(async () => {
  console.log("Running Before All Tests");
});

//beforeEach
test.beforeEach(async ({ page }) => {
  console.log("Running Before Each Test");

  //adding navigating to url in beforeEach hook, as it's the same step in start of each test
  await page.goto("https://www.youtube.com/results?search_query=testers+talk");
});

//afterEach
test.afterEach(async () => {
  console.log("Running After Each Test");
});

//afterAll hook
test.afterAll(async () => {
  console.log("Running After All Tests");
});

test("test 1", async ({ page }) => {
  console.log("Test 1 Execution Started");

  //   await page.goto("https://www.youtube.com/results?search_query=testers+talk");

  await page.getByPlaceholder("Search").fill("men of culture");
  await page.getByPlaceholder("Search").press("Enter");

  await expect(page).toHaveURL(
    "https://www.youtube.com/results?search_query=men+of+culture",
  );
});

test("test 2", async ({ page }) => {
  console.log("Test 2 Execution Started");

  //   await page.goto("https://www.youtube.com/results?search_query=testers+talk");

  await page.getByPlaceholder("Search").fill("inkflowritik");
  await page.getByPlaceholder("Search").press("Enter");

  await expect(page).toHaveURL(
    "https://www.youtube.com/results?search_query=inkflowritik",
  );
});

//Output:

/*
[chromium] › tests\chapter03\hooks_test.spec.ts:23:5 › test 1
Running Before All Tests
Running Before Each Test
Test 1 Execution Started
Running After Each Test
[chromium] › tests\chapter03\hooks_test.spec.ts:36:5 › test 2
Running Before Each Test
Test 2 Execution Started
Running After Each Test
Running After All Tests
  2 passed (41.3s)
*/
