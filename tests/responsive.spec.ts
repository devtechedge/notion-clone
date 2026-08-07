import { expect, test } from "@playwright/test";

test("homepage remains present at each configured viewport", async ({ page }) => {
  await page.goto("/reference.html");
  await expect(page.locator("body")).toBeVisible();
  await expect(page.getByText("AI where your team works.", { exact: false })).toBeVisible();
});
