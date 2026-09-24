import { test, expect,firefox } from '@playwright/test';
import path from "path"
import  fs  from 'fs';
import { fileURLToPath } from 'url'


 const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

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

    await page.getByRole('button', { name: 'Open Dialog with template' }).screenshot({path:'screenshot/Dialogbox.png'})
  await page.getByRole('button', { name: 'Open Dialog with template' }).click()
  await page.getByRole('button',{name: "OK"}).click()
  await page.getByRole('button',{ name: 'Open with delay 3 seconds' }).click()
  //expect(page.getByRole('button',{ name: 'Open with delay 3 seconds' })).toBeAttached()
  await page.getByRole('button',{name: "OK"}).waitFor()
  expect(page.getByRole('button',{name: "OK"})).toBeVisible()
  await page.getByRole('button',{name: "OK"}).click()

  await page.getByRole('button',{name:"Enter Name"}).click()
  expect(page.getByText('Reminder, name should start with capital case!')).toContainText('Reminder, name should start with capital case!')
  expect(page.getByText('Reminder, name should start with capital case!')).toBeVisible()
  await page.screenshot({path:'screenshot/iframePage.png'})
  await page.getByRole('button',{name:"OK"}).click()
  await page.getByRole('textbox',{name:"Name"}).fill('Ruhi Kumari')
  await page.getByRole('button',{name :"Submit"}).click()
  

  const frameLocator = page.frameLocator('[data-cy="esc-close-iframe"]')
  await frameLocator.getByRole('button',{name:"Open Dialog with esc close"}).click()

// await frameLocator.locator("li a[href*='lifetime-access']:visible") - This is to identify visible locator



})


test('Find No Of Link on facebook homepage', async({page})=>{

  await page.goto('https://www.facebook.com/')
  const getAllLink = await page.getByRole('link')
  const countNoOfLink = await getAllLink.count()
  console.log(' Count No Of Link:', countNoOfLink)


const fireFoxBrowser = await firefox.launch()
  const fireFoxContext = await fireFoxBrowser.newContext()
  const fireFoxPage = await fireFoxContext.newPage()
  await fireFoxPage.goto('https://www.amazon.com/')
  await fireFoxPage.pause()
   await fireFoxPage.getByText('Kindle Books').waitFor()

    await fireFoxPage.getByText('Kindle Books').screenshot({path:'screenshot/kindlebooks.png'})
  await fireFoxPage.getByText('Kindle Books').click()
  
})  

test('Practicing Different Alert', async({page})=>{

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

 // page.on('dialog', dialog => dialog.accept());

  page.once('dialog',async dialog => {
    expect(dialog.type()).toBe('alert')
    expect(dialog.message()).toBe('I am a JS Alert')
    await dialog.accept()

  })

  await page.getByRole("button",{name:"Click for JS Alert"}).click()
  await expect(page.locator('#result')).toHaveText('You successfully clicked an alert')

  page.once('dialog',async dialog =>{
    expect(dialog.type()).toBe("confirm")
    await dialog.dismiss()
  })


  await page.getByRole('button',{name:"Click for JS Confirm"}).click()
  await expect(page.locator('#result')).toHaveText('You clicked: Cancel')

  await page.once('dialog',async dialog=>{
    expect(dialog.type()).toBe('prompt')
    await dialog.accept('Playwright')
  })
 await page.getByRole("button",{name:'Click for JS Prompt'}).click()
 expect(page.locator('#result')).toHaveText('You entered: Playwright')

 await page.goto('https://the-internet.herokuapp.com/upload')
 const dirname = "C:/Users/singh/OneDrive/Desktop"

 const filePath = path.join(dirname,'test_upload.txt');
 fs.writeFileSync(filePath,"Hello from playwright! Example File" )

await page.locator('#file-upload').setInputFiles(filePath)
await page.getByRole('button',{name:"Upload"}).click()
expect(page.locator('h3')).toHaveText('File Uploaded!')
await expect(page.locator('#uploaded-files')).toContainText('test_upload.txt')
 //Clenup
 fs.unlinkSync(filePath)

 
 
})

test('Practicing download',async({page},testInfo )=>{

  
 await page.goto('https://playground.bondaracademy.com/pages/extra-components/pdf-download')
  const downloadPromise = page.waitForEvent('download')
  await page.getByRole('button',{name:" Download PDF "}).click()
  const download = await downloadPromise
  //Wait for download process

  const suggstedFileName =  download.suggestedFilename()

  //save the download file to path
  const downloadPath = testInfo.outputPath(suggstedFileName)
  await download.saveAs(downloadPath)
  expect(fs.existsSync(downloadPath)).toBeTruthy()
})