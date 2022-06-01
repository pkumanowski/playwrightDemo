import { test, expect } from '@playwright/test';

test.describe('cart tests', () => {
  test('add to cart', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  // Click a:has-text("Samsung galaxy s6")
  await page.locator('a:has-text("Samsung galaxy s6")').click();
  await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=1');
  // Click text=Add to cart
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('text=Add to cart').click();
  await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=1#');
  // Click #cartur
  await page.locator('#cartur').click();
  await expect(page).toHaveURL('https://www.demoblaze.com/cart.html');
  // Click text=Delete
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://demoblaze.com/cart.html#' }*/),
    page.locator('text=Delete').click()
  ]);
  // Click #page-wrapper
  await expect(page.locator('[id="tbodyid"]')).toBeEmpty()
  });
});