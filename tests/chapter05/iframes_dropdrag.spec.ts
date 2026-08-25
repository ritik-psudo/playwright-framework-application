import { test, expect } from "@playwright/test";

test("iframes dragdrop test", async ({ page }) => {
  await page.goto("https://jqueryui.com/droppable/");

  //drag and drop are inside an iframe, so it have to handled differently

  const iframe = page.frameLocator('[class="demo-frame"]');

  const dragElement = iframe.locator('div[id="draggable"]');

  const dropElement = iframe.locator('div[id="droppable"]');

  await dragElement.dragTo(dropElement);

  await expect(iframe.locator('div[id="droppable"]')).toHaveText("Dropped!");
});
