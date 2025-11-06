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