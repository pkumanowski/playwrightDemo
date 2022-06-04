import { test, expect } from '@playwright/test';

const Chance = require('chance');
const chance = new Chance();
const name = chance.word({syllables: 2});
const password = chance.word({syllables: 2})

test.beforeEach(async ({ page }) => {
      await page.goto('https://www.demoblaze.com/index.html');
});

test.describe('Login test', () => {
  test('signUp', async ({ page }) => {
      await expect(page.locator('[id="signin2"]')).toBeVisible()
      await  page.locator('[id="signin2"]').click({force: true})
      await expect(page.locator('[id="signInModalLabel"]')).toBeVisible()
      await page.locator('[id="sign-username"]').type(name)
      await page.locator('[id="sign-password"]').type(password, {delay: 50})
      await page.locator('[onclick="register()"]').click()
      page.on('dialog', dialog => dialog.accept());
      await expect(page.locator('[id="tbodyid"]')).toBeVisible();
  });
  test('login', async ({ page }) => {
      await page.locator('[data-target="#logInModal"]').click()
      await expect(page.locator('[id="logInModalLabel"]')).toBeVisible()
      await page.locator('[id="loginusername"]').type(name)
      await page.locator('[id="loginpassword"]').type(password)
      await page.locator('[onclick="logIn()"]', {hasText: 'Log in'}).click({force: true})
      await expect(page.locator('[id="nameofuser"]', {hasText: `Welcome ${name}`})).
      toBeVisible()
  });
});
