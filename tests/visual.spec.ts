import { expect, test } from "@playwright/test";

test("homepage visual baseline", async ({ page }) => {
  await page.goto("/reference.html");
  await expect(page).toHaveScreenshot("homepage.png", {
    animations: "disabled",
    fullPage: true,
    maxDiffPixelRatio: 0.01,
  });
});
