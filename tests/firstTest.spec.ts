import{test,expect} from '@playwright/test'

test('Clicking at Multiple Windows', async({page,context}) =>{
   await  page.goto('https://the-internet.herokuapp.com/');
   await page.getByRole('link',{name:"Multiple Windows"}).click()

   await expect(page.getByRole('heading',{name:"Opening a new window"})).toBeVisible()
   const pagePromise  = context.waitForEvent('page')
  await page.getByRole('link',{name:"Click Here"}).click()
 
 //const firstTab = pages[0]
 const secondTab = await pagePromise
await  expect(secondTab.getByRole('heading',{name:"New Window"})).toBeVisible()
 await page.bringToFront()
  await expect(page.getByRole('heading',{name:"Opening a new window"})).toBeVisible()


});

test('JavaScript Alerts',async({page}) => {
   await page.goto('https://the-internet.herokuapp.com/')
   await page.getByRole('link',{name:"JavaScript Alerts"}).click()
   await page.pause()
   page.once('dialog', async dialog =>{
   expect(dialog.type()).toBe('alert')
   expect(dialog.message()).toBe('I am a JS Alert')
   dialog.accept()
})
   await page.getByRole('button',{name:"Click for JS Alert"}).click()
   await expect(page.locator('#result')).toHaveText('You successfully clicked an alert')

   //Handle Confirm(Dismiss)
   page.once('dialog', async dialog =>{
   expect(dialog.type()).toBe('confirm')
   await dialog.dismiss()

   })
   await page.getByRole('button',{name:"Click for JS Confirm"}).click()
   await expect(page.locator('#result')).toHaveText('You clicked: Cancel')

   //Handle Prompt

   page.once('dialog', async dialog =>{
   expect(dialog.type()).toBe('prompt')
   await dialog.accept('Playwright')

   })
   await page.getByRole('button',{name:"Click for JS Prompt"}).click()
   await expect(page.locator('#result')).toHaveText('You entered: Playwright')

})


test('Drag And Drop',async({page})=> {

   await page.goto('https://the-internet.herokuapp.com/')
   await page.getByRole('link',{name:"Drag and Drop"}).click()
   expect(page.getByRole('heading',{name:"Drag and Drop"})).toContainText('Drag and Drop')
   const dragSource = page.locator('#column-a')
   const dragTarget = page.locator('#column-b')
   await dragSource.dragTo(dragTarget)
   const header = page.getByRole('heading',{name:"B"})
   

   await page.goto('https://jqueryui.com/droppable/')
   const iframeDrop = page.frameLocator('.demo-frame')
   const draggable = iframeDrop.locator('#draggable')
   const droppable = iframeDrop.locator('#droppable')
    await draggable.dragTo(droppable)
    const confirmtext = draggable.locator('//p[contains(text(), "Drag me to my target")]')
    await expect(confirmtext).toContainText('Drag me to my target')

   // await page.goto('https://jqueryui.com/droppable/#accepted-elements');
  await page.getByRole('link',{name:"Accept"}).click()
  // Switch to the jQuery UI demo iframe
 // const frame = page.frameLocator('.demo-frame');

  // Click on the "Accept" example tab if needed, or navigate directly
  const nonValidDraggable = iframeDrop.locator('#draggable-nonvalid');
  const droppable1 = iframeDrop.locator('#droppable');

  // Attempting to drag the non-valid item
  await nonValidDraggable.dragTo(droppable1);

  // The droppable box should STILL retain its original text, NOT change to "Dropped!"
  await expect(droppable1.locator('p')).toHaveText("accept: '#draggable'");

})

test('Resizable box',async({page})=>{
   await page.goto('https://jqueryui.com/resizable/')
  const  frameLocator1 = page.frameLocator('.demo-frame')
  const  resizableBox = frameLocator1.locator('#resizable')
  const  resizableHaandle = frameLocator1.locator('.ui-resizable-se')
  const initialBox = await resizableBox.boundingBox()
  console.log(initialBox)
  const handleBox = await resizableHaandle.boundingBox()
  console.log(handleBox)

  if(handleBox && initialBox){
   const startX = handleBox.x + handleBox.width / 2
   const startY = handleBox.y + handleBox.height /2

   await page.mouse.move(startX, startY)
   await page.mouse.down()
   await page.mouse.move(startX + 150, startY + 100)
   await page.mouse.up()
  }
  const finalBox = await resizableBox.boundingBox();
  expect(finalBox?.width).toBeGreaterThan(initialBox!.width);
  expect(finalBox?.height).toBeGreaterThan(initialBox!.height);
});
