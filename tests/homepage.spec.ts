import { expect, test } from "@playwright/test";

test("homepage renders the source-backed hero and navigation", async ({ page }) => {
  await page.goto("/reference.html");
  await expect(page).toHaveTitle(/The AI workspace that works for you/i);
  await expect(page.getByText("Where teams and agents", { exact: false })).toBeVisible();
  await expect(page.getByRole("link", { name: /Get Notion free/i }).first()).toBeVisible();
});

test("homepage exposes the CTA and footer content", async ({ page }) => {
  await page.goto("/reference.html");
  await expect(page.getByText("Get started today.", { exact: false })).toBeVisible();
  await expect(page.getByText("Notion Labs, Inc.", { exact: false })).toBeVisible();
});
