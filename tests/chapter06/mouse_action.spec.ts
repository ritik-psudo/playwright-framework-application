import { test, expect } from "@playwright/test";

test("mouse actions", async ({ page }) => {
  await page.goto("https://demoqa.com/");

  //left click on the mouse
  await page
    .getByRole("link", { name: "Elements" })
    .first()
    .click({ button: "left" });

  await page.goBack();

  //middle click on the mouse
  await page
    .getByRole("link", { name: "Widgets" })
    .first()
    .click({ button: "middle" });

  await page.goBack();

  //right click on the mouse
  await page
    .getByRole("link", { name: "Interactions" })
    .first()
    .click({ button: "right" });

  //hover mouse action
  await page.goto("https://qa-practice.razvanvancea.ro/mouse-hover.html");

  await expect(page.locator('p[id="demo"]')).toHaveText(
    "If you hover this text, it will be changed.",
  );

  await page.locator('button[id="button-hover-over"]').hover();

  await expect(page.locator('div[class="hide"]')).toBeVisible();

  await expect(page.locator('div[class="hide"]')).toHaveText(
    "I am shown when someone hovers over the text above.",
  );

  //double click action

  await page.goto("https://qa-practice.razvanvancea.ro/double-click.html");

  await page.getByRole("button", { name: "Double click me" }).dblclick();

  await expect(page.locator('div[id="double-click-result"]')).toHaveText(
    "Congrats, you double clicked!",
  );
});
