import { test, expect } from '@playwright/test';

test('First Playwright Test', async ({ page }) => {
    await page.goto('https://www.way2automation.com/');
    const title= await page.title();
    console.log(title);
    await expect(title).toContain('Way2Automation');

    await page.goto('https://www.google.com/');
    await page.waitForTimeout(2000);
    await page.goBack();

    await page.goForward


await page.reload();


});

test('Finding Elements',async({page})=>{
    await page.setViewportSize({ width: 1920, height: 1080 }); 
    await page.goto('https://www.way2automation.com/');
   // await page.goto('https://www.gmail.com/');
    
    await page.getByLabel('Email or phone',{exact: true}).fill('Kumariruhi0417@gmail.com');
    await page.waitForTimeout(2000)
    await page.locator('#identifierId').fill('Kumariruhi0417@gmail.com');
    await page.locator('//input[@id="identifierId"]').fill('Kumariruhi0417@gmail.com');
    await page.locator("button:has-text('Next')").click() ;
    await page.locator('button').filter({hasText:'Next'}).click(); 
    await page.getByLabel('Enter your password',{exact: true}).fill("");
    await page.locator('//*[@id="passwordNext"]/div/button/span').click();
    const errorMessage = await page.locator('//*[@id="c7"]/div[2]/span').innerText();
    console.log('Error message:', errorMessage);
    expect(errorMessage).toContain('Wrong password');
    //await expect(heading).toHaveText('Way2Automation');
    
});

test('handling dropdown',async({page})=>{
    await page.goto("https://www.wikipedia.org/");
    await page.selectOption('//select[@id="searchLanguage"]',{label:'Eesti'});
    await page.selectOption('//select[@id="searchLanguage"]',{value:'hi'});
    await page.selectOption('//select[@id="searchLanguage"]',{index:0});
    const options =  await page.locator('option').all();  
    console.log('Total options: '+options.length);

    for(let i=0;i<options.length;i++){
        const option = options[i];
        const lang = await option.getAttribute('lang');
        console.log('Option '+i+': '+await option.innerText());
        console.log(`{text} ---- ${lang}`);
    }

});

test('Working on Assignment',async({page})=>{
    await page.goto("https://www.google.com/");
    await page.locator("//textarea[@class ='gLFyf']").fill('Way2Automation');
    await page.waitForTimeout(2000);

    await page.getByLabel('Google Search',{exact: true}).nth(0).click();

    await page.waitForTimeout(8000);
    const Link = await page.locator('a').all();
    console.log('Total links: '+Link.length);

   });

test('TOTAL NO OF OPTIONS IN DROPDOWN',async({page})=>{
    await page.goto("https://www.makemytrip.global/");
    await page.locator('.commonModal__close').click();
    await page.waitForTimeout(5000);
    await page.getByRole('textbox', { name: 'From NYC, All airports-NY' }).click();
    const options =  await page.locator("//ul/li[@role ='option']").all();
    console.log('Total options: '+options.length);
});


test('Handling Checkboxes',async({page})=>{
    await page.goto("http://www.tizag.com/htmlT/htmlcheckboxes.php");
    const block = await page.locator('xpath =/html/body/table[3]/tbody/tr[1]/td[2]/table/tbody/tr/td/div[4]');
    /*const block = await page.locator('xpath=/html/body/table[3]/tbody/tr[1]/td[2]/table/tbody/tr/td/div[7]');*/
    const checkboxes = await block.locator('[name ="sports"]');
    await page.waitForTimeout(3000);
    const allText = await block.innerText();
    console.log(allText);
    var randomIndex = Math.floor(Math.random() * await checkboxes.count());
    await checkboxes.nth(randomIndex).check();
    randomIndex = Math.floor(Math.random() * await checkboxes.count());
    await checkboxes.nth(randomIndex).check();
    const checkboxesCount = await checkboxes.count();
    console.log("Total checkboxes: "+checkboxesCount);

    /*for(let i=0;i<checkboxesCount;i++){
        if (!(await checkboxes.nth(i).isChecked()))
        await checkboxes.nth(i).check();
    }*/
    
});


test('Handling Assertions',async({page})=>{
     await page.goto("http://www.tizag.com/htmlT/htmlcheckboxes.php");
     await expect(page).toHaveURL("http://www.tizag.com/htmlT/htmlcheckboxes.php");
     console.log('URL matched successfully');
     await expect(page).not.toHaveURL(/.*error/);
     console.log('No error on the page hence passed');

     const link = page.locator("//*[@id='menu']/a[19]");
     await expect(link).toHaveText('HTML - Tags');
        console.log('Text matched successfully');


});

test('webtable',async({page})=>{
    await page.goto("https://money.rediff.com/indices");
    const rowCount = await page.locator('//table[@class="dataTable"]/tbody/tr');
    console.log('Total no of rows: '+await rowCount.count());
    const colsCount = await page.locator('//table[@class="dataTable"]/tbody/tr[1]/td');
    console.log('Total no of cols: '+await colsCount.count());
    const text = await page.locator("//table[@class='dataTable']/tbody/tr[1]/td[1]");
    console.log('First cell text: '+await text.innerText());
    await expect(text).toHaveText('BSE Sensex');
    const allInnerText = await page.locator('//*[@id="dataTable"]/tbody').allInnerTexts();
    for(const tableText of allInnerText){
        console.log(tableText);
    }

});

test('Handling Alerts',async({page})=>{
    await page.goto("chrome://downloads/");
    await page.waitForTimeout(2000);
    await page.locator('#searchInput').fill('playwright');


});


test('Mouse Hover Element',async({page})=>{
    await page.goto("https://www.way2automation.com/");
    await page.getByRole("link", { name: "All Courses"}).hover();
    page.on('dialog', dialog => dialog.dismiss());
    
    /*await page.locator("locator('.eicon-close')").click();*/
    /*await page.locator("//a[@href='#'][text()='Resources']").hover();*/
   /* await page.locator('//*[@id="menu-item-27580"]/a/span[2]').hover();*/
    await page.getByRole("link", { name: "All Courses"}).hover();
    
    await page.getByRole('link', { name: 'Selenium ' }).hover();
   
    await page.waitForTimeout(4000);

    await page.getByRole('link', { name: 'Selenium with Java' }).click();

});


test('Slide Movement',async({page})=>{

    await page.goto("https://jqueryui.com/slider/");
    const slider = await page.locator('iframe').contentFrame().locator('span');
    const boundingBox = await slider.boundingBox();
    await page.waitForTimeout(2000);
    if (boundingBox) {
        const sliderHandleX = boundingBox.x + boundingBox.width / 2;
        const sliderHandleY = boundingBox.y + boundingBox.height / 2;
        await page.mouse.move(sliderHandleX, sliderHandleY);
        await page.mouse.down();
        await page.mouse.move(sliderHandleX + 400, sliderHandleY);
        await page.mouse.up();
    }

    const slider1 = await page.locator('iframe').contentFrame().locator('span');
    const boundingBox1 = await slider1.boundingBox();
    await page.waitForTimeout(2000);
    if (boundingBox1) {
        const sliderHandleX = boundingBox1.x + boundingBox1.width / 2;
        const sliderHandleY = boundingBox1.y + boundingBox1.height / 2;
        await page.mouse.move(sliderHandleX, sliderHandleY);
        await page.mouse.down();
        await page.mouse.move(sliderHandleX + -400, sliderHandleY);
        await page.mouse.up();
    }
});

test('Resizeable Element',async({page})=>{

    await page.goto("https://jqueryui.com/resizable/");
    const resizable = await page.locator('iframe').contentFrame().locator('div').nth(3);
    const initialBoundingBox = await resizable.boundingBox();
    console.log(initialBoundingBox);
    /*await page.waitForTimeout(2000);*/
    if (initialBoundingBox) {
        const sliderHandleX = initialBoundingBox.x + initialBoundingBox.width / 2;
        const sliderHandleY = initialBoundingBox.y + initialBoundingBox.height / 2;
        await page.mouse.move(sliderHandleX, sliderHandleY);
        await page.mouse.down();
        await page.mouse.move(sliderHandleX + 300, sliderHandleY + 200);
        await page.mouse.up();
    }
});

test('Drag And Drop Element',async({page})=>{

    await page.goto("https://jqueryui.com/droppable/");
    const draggable = await page.locator('iframe').contentFrame().locator('#draggable');
    const droppable =await page.locator('iframe').contentFrame().locator('#droppable');
    const draggableBox = await draggable.boundingBox();
    const droppableBox = await droppable.boundingBox();
    if (draggableBox && droppableBox) {
        const dragStartX = draggableBox.x + draggableBox.width / 2;
        const dragStartY = draggableBox.y + draggableBox.height / 2;
        const dropX = droppableBox.x + droppableBox.width / 2;
        const dropY = droppableBox.y + droppableBox.height / 2;
        await page.mouse.move(dragStartX, dragStartY);
        await page.mouse.down();
        await page.mouse.move(dropX, dropY);
        await page.mouse.up();
    }

    const draggable1 = await page.locator('iframe').contentFrame().locator('#draggable');
    const draggableBox1 = await draggable1.boundingBox();
    const droppableBox1 = await droppable.boundingBox();
    if (draggableBox1 && droppableBox1) {
        const dragStartX = draggableBox1.x + draggableBox1.width / 2;
        const dragStartY = draggableBox1.y + draggableBox1.height / 2;
        const dropX = droppableBox1.x + droppableBox1.width / 2 + 200;;
        const dropY = droppableBox1.y + droppableBox1.height / 2 + 200;
        await page.mouse.move(dragStartX, dragStartY);
        await page.mouse.down();
        await page.mouse.move(dropX, dropY);
        await page.mouse.up();
    }
});


test('Right Click Element',async({page})=>{

    await page.goto("https://deluxe-menu.com/popup-mode-sample.html");
    const rightClickElement = await page.locator('p:nth-child(17) > img');
    await rightClickElement.click({ button: 'right' });
    const secondOptionrightClick = await page.getByRole('cell', { name: 'Product Info', exact: true }).nth(3);
    await secondOptionrightClick.click();
    const alertMessage = page.getByRole('cell', { name: 'Installation' }).nth(3);
    console.log('Alert message displayed: '+await alertMessage.innerText());
    /*await expect(alertMessage).toBeVisible();*/
    await page.waitForTimeout(2000);
    await alertMessage.click();
    const setUpText = await page.getByText('How To Setup').innerText();
    console.log('Setup text displayed: ' + setUpText);

});

test('Handle Alerts',async({page})=>{

    await page.goto("https://mail.rediff.com/cgi-bin/login.cgi");

    page.on('dialog',async dialog => {
        await page.waitForTimeout(2000);
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept();
    });
    await page.getByRole('button', { name: 'Log In' }).click();

    await page.waitForTimeout(4000);
    
});


test('Handling iframe',async ({ page }) => {
    
    test.setTimeout(800000)
    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit") ;
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.locator('iframe[name="iframeResult"]').contentFrame().getByRole('textbox', { name: 'First name:' }).fill('');
    await page.locator('iframe[name="iframeResult"]').contentFrame().getByRole('textbox', { name: 'First name:' }).fill('Ruhi');
    await page.locator('iframe[name="iframeResult"]').contentFrame().getByRole('textbox', { name: 'Last name:' }).fill('');
    await page.locator('iframe[name="iframeResult"]').contentFrame().getByRole('textbox', { name: 'Last name:' }).fill('Smith');
    await page.locator('iframe[name="iframeResult"]').contentFrame().getByRole('button', { name: 'Submit' }).click();

    await page.screenshot({ path: 'screenshot/screenshot.png',fullPage:true });
});


test('Handling New Tab',async ({ page }) => {
    await page.goto("https://www.way2automation.com/way2auto_jquery/automation-practice-site.html");
   
   const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
         await page.getByRole('link', { name: 'Frames and Windows' }).click()
       /* await page.locator('iframe[name="iframeResult"]').contentFrame().getByRole('link', { name: 'Visit W3Schools.com!' }).click()*/
    ]);
    await newPage.waitForLoadState();
    console.log('New tab title: '+await newPage.title());
    console.log('New tab URL: '+await newPage.url());
    await newPage.locator('#example-1-tab-1 iframe').contentFrame().getByRole('link', { name: 'New Browser Tab' }).click();
     console.log('New tab title: '+await newPage.title());
    console.log('New tab URL: '+await newPage.url());
});