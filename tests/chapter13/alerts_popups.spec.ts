import { test, expect } from "@playwright/test";

test("alerts handling", async ({ page, browser }) => {
  //navigate to URL
  await page.goto(
    "https://www.selenium.dev/documentation/webdriver/interactions/alerts/",
  );

  page.once("dialog", (dialog) => {
    dialog.accept();
    console.log(`Alert message is: ${dialog.message()}`);
    console.log(dialog.type());
  });

  await page.getByText("See an example alert", { exact: true }).click();
});

test("handling popups", async ({ page, browser }) => {
  //navigate to URL
  await page.goto(
    "https://www.selenium.dev/documentation/webdriver/interactions/alerts/",
  );

  page.once("dialog", (dialog) => {
    dialog.accept();
    console.log(`Confirm alert message is: ${dialog.message()} (accepted)`);
    console.log(dialog.type());
  });

  await page.getByText("See a sample confirm", { exact: true }).click();

  page.once("dialog", (dialog) => {
    dialog.dismiss();
    console.log(`Confirm alert message is: ${dialog.message()} (dismissed)`);
    console.log(dialog.type());
  });

  await page.getByText("See a sample confirm", { exact: true }).click();
});

test("handling input prompt popups", async ({ page, browser }) => {
  //navigate to URL
  await page.goto(
    "https://www.selenium.dev/documentation/webdriver/interactions/alerts/",
  );

  page.once("dialog", async (dialog) => {
    await dialog.accept("Accepted"); //accepting the dialog with "Accepted" in input field
    console.log(`Prompt message is: ${dialog.message()} (accepted)`);
    console.log(dialog.type());
  });

  await page.getByText("See a sample prompt", { exact: true }).click();

  page.once("dialog", async (dialog) => {
    await dialog.dismiss(); //dismissing doesn't expectes any input
    console.log(`Prompt message is: ${dialog.message()} (dismissed)`);
    console.log(dialog.type());
  });

  await page.getByText("See a sample prompt", { exact: true }).click();
});
