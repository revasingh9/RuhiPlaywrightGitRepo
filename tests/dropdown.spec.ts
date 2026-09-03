import{test,expect} from '@playwright/test'

test('Dropdown Test',async ({page}) => {

 await page.goto('https://rahulshettyacademy.com/dropdownsPractise/')
await page.locator('#ctl00_mainContent_ddl_originStation1_CTXT').click()

await page.locator('//a[@value="DEL"]').click();


await page.locator('(//a[@value="BOM"])[2]').click();
 await expect(page.locator('#ctl00_mainContent_ddl_originStation1_CTXT')).toHaveValue('Delhi (DEL)')

 await expect(page.locator('#ctl00_mainContent_ddl_destinationStation1_CTXT')).toHaveValue('Mumbai (BOM)')


  const today = new Date();
  const futuredate = new Date(today);
  futuredate.setDate(today.getDate() +5);
  const targetDay = futuredate.getDate().toString();
  const calendarContainer = page.locator('.ui-datepicker-calendar').first();
 await  calendarContainer.waitFor({ state: 'visible' });
  //const targetMonth = futuredate.getMonth().toString()
  //const targetYear = futuredate.getFullYear().toString();
  // await page.locator('#ctl00_mainContent_view_date1').click()
   await page.pause()

  // const dateCell = page.locator(`td[data-month="${targetMonth}"][data-year="${targetYear}"]`,{ hasText: targetDay }).locator('a')
  const datecell = calendarContainer.locator('a',{ hasText: new RegExp(`^${targetDay}$`) })
await datecell.click()

//await expect(page.locator('#ctl00_mainContent_view_date1')).toHaveValue(futuredate.toLocaleDateString('en-GB').replace(/\//g, '/'))

//await page.locator('label:has-text("Return date")').click()
await page.locator('.ui-datepicker-trigger').nth(1).click()
  const returnDate = new Date(today);
  returnDate.setDate(today.getDate() +8);
  const retDay = returnDate.getDate().toString()
  
 const retCalendar = page.locator('.ui-datepicker-group-first .ui-datepicker-calendar');
  
  await retCalendar.locator('a', { hasText: new RegExp(`^${retDay}$`) }).click();
   await retCalendar.waitFor({ state: 'visible' });
   await page.locator('#divpaxinfo').click();
   await page.locator("#hrefIncAdt").click();
   await page.getByRole('button', { name: 'Done' }).click();

})

test.only('Dropdown Test2',async ({page}) => {
 await page.goto('https://the-internet.herokuapp.com/dropdown')
const clickDropdown = page.locator('#dropdown')
//await clickDropdown.click()
await clickDropdown.selectOption({ value: "1" })

await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

await page.on('dialog', async dialog => {
  console.log(`Dialog message: ${dialog.message()}`);
  await dialog.accept();

})

await page.getByRole('button', { name: 'Click for JS Alert' }).click()

await page.getByRole('button', { name: 'Click for JS Confirm' }).click()

})