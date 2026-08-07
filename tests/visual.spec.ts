import { expect, test } from "@playwright/test";

test("homepage visual baseline", async ({ page }) => {
  test.skip(!!process.env.CI, "The committed baseline is captured on Windows; run visual QA locally.");
  await page.goto("/reference.html");
  await expect(page).toHaveScreenshot("homepage.png", {
    animations: "disabled",
    fullPage: true,
    maxDiffPixelRatio: 0.01,
  });
});
