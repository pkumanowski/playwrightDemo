import { chromium, expect, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.demoblaze.com/index.html');
  await page.locator('[data-target="#logInModal"]').click()
  await expect(page.locator('[id="logInModalLabel"]')).toBeVisible()
  await page.fill('[id="loginusername"]', 'kobulu');
  await page.fill('[id="loginpassword"]', 'puha');
  await page.locator('[onclick="logIn()"]', {hasText: 'Log in'}).click({force: true})
      await expect(page.locator('[id="nameofuser"]', {hasText: `Welcome kobulu`})).
      toBeVisible()
  await page.context().storageState({ path: './storageState.json' });
  await browser.close();
}

export default globalSetup;