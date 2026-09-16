import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('Exercise to select radio Button', async ({ page }) => {

  await page.goto('https://playground.bondaracademy.com/pages/forms/layouts')
  await page.locator('span.inner-circle').first().check()
  expect(page.locator('span.inner-circle').first()).toBeChecked()
  await page.locator('.custom-checkbox').first().check()
  expect(page.locator('.custom-checkbox').first()).toBeChecked()
  await page.locator('.custom-checkbox').nth(1).check()
  expect(page.locator('.custom-checkbox').nth(1)).toBeChecked()
  await page.locator('.custom-checkbox').nth(2).check()
  expect(page.locator('.custom-checkbox').nth(2)).toBeChecked()

  await page.goto('https://playground.bondaracademy.com/pages/forms/datepicker')
  await page.getByRole('textbox', { name: 'Form Picker' }).fill('Sep 14, 2026')
  await expect(page.getByRole('textbox', { name: 'Form Picker' })).toHaveValue('Sep 14, 2026')
  await page.getByRole('textbox', { name: 'Range Picker' }).fill('Sep 28, 2026')
  await expect(page.getByRole('textbox', { name: 'Range Picker' })).toHaveValue('Sep 28, 2026')

  await page.getByPlaceholder('Form Picker').click()
  await page.locator('nb-calendar-picker').waitFor({ state: 'visible' });
  await page.locator('nb-calendar-day-cell',{hasText: /^\s*22\s*$/ }).click()

  // await page.locator('nb-calendar-picker').waitFor()
  // const allDatesCollected = await page.locator('nb-calendar-picker')
  // const getalltextFromCalender = await allDatesCollected.allTextContents()
  // console.log(getalltextFromCalender)

  // const daycells = page.locator('nb-calendar-day-cell')
  // await daycells.first().waitFor()
  // const getalltextFromCalender1 = await daycells.allTextContents()
  // console.log(getalltextFromCalender1)

  // const count = await daycells.count()
  // console.log(count)
  // for (let i = 0; i < count; i++) {
  //   const text = await daycells.nth(i).textContent()
  //   if (text?.trim() === '22') {
  //     await daycells.nth(i).click()
  //     break;
  //   }

  // }

  await page.getByRole('link', { name: 'Modal & Overlays' }).click()
  await page.getByRole('link', { name: 'Dialog' }).click()
  await page.getByRole('button', { name: 'Open Dialog with component' }).click()
  await page.getByRole('button',{name :'Dismiss Dialog'}).click()
  await page.getByRole('button', { name: 'Open Dialog with template' }).click()
  await page.getByRole('button',{name: "OK"}).click()
  await page.getByRole('button',{ name: 'Open with delay 3 seconds' }).click()
  //expect(page.getByRole('button',{ name: 'Open with delay 3 seconds' })).toBeAttached()
  await page.getByRole('button',{name: "OK"}).waitFor()
  expect(page.getByRole('button',{name: "OK"})).toBeVisible()
  await page.getByRole('button',{name: "OK"}).click()




})
