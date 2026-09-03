import { test, expect } from '@playwright/test';

test('First Playwright Test', async ({ page }) => {
    await page.goto('https://www.way2automation.com/');
    const title = await page.title();
    console.log(title);
    await expect(title).toContain('Way2Automation');

    await page.goto('https://www.google.com/');
    await page.waitForTimeout(2000);
    await page.goBack();

    await page.goForward


    await page.reload();


});

test('Finding Elements', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://www.way2automation.com/');
    // await page.goto('https://www.gmail.com/');

    await page.getByLabel('Email or phone', { exact: true }).fill('Kumariruhi0417@gmail.com');
    await page.waitForTimeout(2000)
    await page.locator('#identifierId').fill('Kumariruhi0417@gmail.com');
    await page.locator('//input[@id="identifierId"]').fill('Kumariruhi0417@gmail.com');
    await page.locator("button:has-text('Next')").click();
    await page.locator('button').filter({ hasText: 'Next' }).click();
    await page.getByLabel('Enter your password', { exact: true }).fill("");
    await page.locator('//*[@id="passwordNext"]/div/button/span').click();
    const errorMessage = await page.locator('//*[@id="c7"]/div[2]/span').innerText();
    console.log('Error message:', errorMessage);
    expect(errorMessage).toContain('Wrong password');
    //await expect(heading).toHaveText('Way2Automation');

});

test('handling dropdown', async ({ page }) => {
    await page.goto("https://www.wikipedia.org/");
    await page.selectOption('//select[@id="searchLanguage"]', { label: 'Eesti' });
    await page.selectOption('//select[@id="searchLanguage"]', { value: 'hi' });
    await page.selectOption('//select[@id="searchLanguage"]', { index: 0 });
    const options = await page.locator('option').all();
    console.log('Total options: ' + options.length);

    for (let i = 0; i < options.length; i++) {
        const option = options[i];
        const lang = await option.getAttribute('lang');
        console.log('Option ' + i + ': ' + await option.innerText());
        console.log(`{text} ---- ${lang}`);
    }

});

test('Working on Assignment', async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.locator("//textarea[@class ='gLFyf']").fill('Way2Automation');
    await page.waitForTimeout(2000);

    await page.getByLabel('Google Search', { exact: true }).nth(0).click();

    await page.waitForTimeout(8000);
    const Link = await page.locator('a').all();
    console.log('Total links: ' + Link.length);

});

test('TOTAL NO OF OPTIONS IN DROPDOWN', async ({ page }) => {
    await page.goto("https://www.makemytrip.global/");
    await page.locator('.commonModal__close').click();
    await page.waitForTimeout(5000);
    await page.getByRole('textbox', { name: 'From NYC, All airports-NY' }).click();
    const options = await page.locator("//ul/li[@role ='option']").all();
    console.log('Total options: ' + options.length);
});


test('Handling Checkboxes', async ({ page }) => {
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
    console.log("Total checkboxes: " + checkboxesCount);

    /*for(let i=0;i<checkboxesCount;i++){
        if (!(await checkboxes.nth(i).isChecked()))
        await checkboxes.nth(i).check();
    }*/

});


test('Handling Assertions', async ({ page }) => {
    await page.goto("http://www.tizag.com/htmlT/htmlcheckboxes.php");
    await expect(page).toHaveURL("http://www.tizag.com/htmlT/htmlcheckboxes.php");
    console.log('URL matched successfully');
    await expect(page).not.toHaveURL(/.*error/);
    console.log('No error on the page hence passed');

    const link = page.locator("//*[@id='menu']/a[19]");
    await expect(link).toHaveText('HTML - Tags');
    console.log('Text matched successfully');


});

test('webtable', async ({ page }) => {
    await page.goto("https://money.rediff.com/indices");
    const rowCount = await page.locator('//table[@class="dataTable"]/tbody/tr');
    console.log('Total no of rows: ' + await rowCount.count());
    const colsCount = await page.locator('//table[@class="dataTable"]/tbody/tr[1]/td');
    console.log('Total no of cols: ' + await colsCount.count());
    const text = await page.locator("//table[@class='dataTable']/tbody/tr[1]/td[1]");
    console.log('First cell text: ' + await text.innerText());
    await expect(text).toHaveText('BSE Sensex');
    const allInnerText = await page.locator('//*[@id="dataTable"]/tbody').allInnerTexts();
    for (const tableText of allInnerText) {
        console.log(tableText);
    }

});

test('Handling Alerts', async ({ page }) => {
    await page.goto("chrome://downloads/");
    await page.waitForTimeout(2000);
    await page.locator('#searchInput').fill('playwright');


});


test('Mouse Hover Element', async ({ page }) => {
    await page.goto("https://www.way2automation.com/");
    await page.getByRole("link", { name: "All Courses" }).hover();
    page.on('dialog', dialog => dialog.dismiss());

    /*await page.locator("locator('.eicon-close')").click();*/
    /*await page.locator("//a[@href='#'][text()='Resources']").hover();*/
    /* await page.locator('//*[@id="menu-item-27580"]/a/span[2]').hover();*/
    await page.getByRole("link", { name: "All Courses" }).hover();

    await page.getByRole('link', { name: 'Selenium ' }).hover();

    await page.waitForTimeout(4000);

    await page.getByRole('link', { name: 'Selenium with Java' }).click();

});


test('Slide Movement', async ({ page }) => {

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

test('Resizeable Element', async ({ page }) => {

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

test('Drag And Drop Element', async ({ page }) => {

    await page.goto("https://jqueryui.com/droppable/");
    const draggable = await page.locator('iframe').contentFrame().locator('#draggable');
    const droppable = await page.locator('iframe').contentFrame().locator('#droppable');
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


test('Right Click Element', async ({ page }) => {

    await page.goto("https://deluxe-menu.com/popup-mode-sample.html");
    const rightClickElement = await page.locator('p:nth-child(17) > img');
    await rightClickElement.click({ button: 'right' });
    const secondOptionrightClick = await page.getByRole('cell', { name: 'Product Info', exact: true }).nth(3);
    await secondOptionrightClick.click();
    const alertMessage = page.getByRole('cell', { name: 'Installation' }).nth(3);
    console.log('Alert message displayed: ' + await alertMessage.innerText());
    /*await expect(alertMessage).toBeVisible();*/
    await page.waitForTimeout(2000);
    await alertMessage.click();
    const setUpText = await page.getByText('How To Setup').innerText();
    console.log('Setup text displayed: ' + setUpText);

});

test('Handle Alerts', async ({ page }) => {

    await page.goto("https://mail.rediff.com/cgi-bin/login.cgi");

    page.on('dialog', async dialog => {
        await page.waitForTimeout(2000);
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept();
    });
    await page.getByRole('button', { name: 'Log In' }).click();

    await page.waitForTimeout(4000);

});


test('Handling iframe', async ({ page }) => {

    test.setTimeout(800000)
    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit");
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.locator('iframe[name="iframeResult"]').contentFrame().getByRole('textbox', { name: 'First name:' }).fill('');
    await page.locator('iframe[name="iframeResult"]').contentFrame().getByRole('textbox', { name: 'First name:' }).fill('Ruhi');
    await page.locator('iframe[name="iframeResult"]').contentFrame().getByRole('textbox', { name: 'Last name:' }).fill('');
    await page.locator('iframe[name="iframeResult"]').contentFrame().getByRole('textbox', { name: 'Last name:' }).fill('Smith');
    await page.locator('iframe[name="iframeResult"]').contentFrame().getByRole('button', { name: 'Submit' }).click();

    await page.screenshot({ path: 'screenshot/screenshot.png', fullPage: true });
});


test('Handling New Tab', async ({ page }) => {
    await page.goto("https://www.way2automation.com/way2auto_jquery/automation-practice-site.html");

    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        await page.getByRole('link', { name: 'Frames and Windows' }).click()
        /* await page.locator('iframe[name="iframeResult"]').contentFrame().getByRole('link', { name: 'Visit W3Schools.com!' }).click()*/
    ]);
    await newPage.waitForLoadState();
    console.log('New tab title: ' + await newPage.title());
    console.log('New tab URL: ' + await newPage.url());
    await newPage.locator('#example-1-tab-1 iframe').contentFrame().getByRole('link', { name: 'New Browser Tab' }).click();
    console.log('New tab title: ' + await newPage.title());
    console.log('New tab URL: ' + await newPage.url());
});
//Reverse an array without using temp array

// function reverseArray(arr: any[]): any[] {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++;
//     right--;
//   }
//   return arr;
//}
function reverseArrayInPlace<T>(arr: T[]): T[] {
    // Loop from 0 to halfway point (floor of length/2)
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        // Calculate the corresponding element from the end
        let oppositeIndex = arr.length - 1 - i;

        // Swap elements using destructuring assignment
        [arr[i], arr[oppositeIndex]] = [arr[oppositeIndex], arr[i]];
    }
    return arr;
}

// Example usage
const data = [1, 2, 3, 4, 5];
reverseArrayInPlace(data);
console.log(data); // Output: [5, 4, 3, 2, 1]

//Rotate an array by k positions
//function rotateArray(arr: any[], k: number): any[] {
//   const n = arr.length;
//   k = k % n;
//   return arr.slice(n - k).concat(arr.slice(0, n - k));
// }
test('Reverse the array', async ({ }) => {
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [...arr1].reverse();
    console.log(arr1);
    console.log(arr2);
});

test('final price', async ({ }) => {
    let prices = [250, 645, 300, 900, 50];

    let idx = 0;

    for (let price of prices) {
        console.log(`value at index  ${idx} = ${price}`);

        let offer = price / 10;
        prices[idx] = prices[idx] - offer;
        console.log(`value after offer = ${prices[idx]}`);
        //for(let i=0;i<prices.length; i++)
        //console.log(price)
        idx++;

        // for  (let i=0;i<prices.length; i++){
        //     let offer =prices[i]/10;
        //     prices[i -= offfer;]
        // }
        //  console.log(prices);
    }

});


test('Array Method use', async ({ }) => {

    let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

    console.log(companies.pop());
    console.log(companies.shift());

    console.log(companies.splice(2, 1, "Ola"));
    console.log(companies.push("Amazon"));
});

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// function twoSum(nums: number[], target:number): number[]{
//     for (let i = 0;i<nums.length;i++){

//         for(let j = 0; j<nums.length;j++){

//             if (nums[i] + nums[j] === target){
//                 return [i,j];
//             }           




//         }

//     }
//     return[];
// }
// const numbers =[2,7,11,15];
// const target = 9;
// const result = twoSum(numbers,target);
// console.log(result);

// function twoSum(nums: number[], target: number): number[] {
//     const map = new Map<number,number>(); // value -> index
//     for (let i=0; i<nums.length;i++){
//         const complement = target - nums[i];

//         if(map.has(complement)){
//             return [map.get(complement)!,i]
//         }
//         map.set(nums[i],1);
//     }

//  return[];

// }

// const numbers =[2,7,11,15];
// const target = 9;
// const result = twoSum(numbers,target);
// console.log(result);


// function longestCommonPrefix(strs: string[]): string {
//     if(!strs || strs.length === 0){
//     return "";
//     }
//     strs.sort();
//     const firstStr = strs[0];
//     const lastStr = strs[strs.length - 1];
//     let prefixLength = 0;
//     for (let i=0; i < firstStr.length ;i++){
//         if (firstStr[i] !== lastStr[i]){

//             return firstStr.slice(0,i);
//             }
//             prefixLength++;
//     }
//   return firstStr;  
// };
// const input1 = ["flower", "flow", "flight"];
// console.log(`Input: [${input1}]`);
// console.log(`Output: "${longestCommonPrefix(input1)}"`);

test('remove duplicate from sorted array', async ({ }) => {
    console.log('start');
    const nums = [1, 1, 1, 2, 7, 9, 3, 3, 3, 4];
    let nums1 = nums.sort();
    const resultnums = [];
    let unique = 0;
    let current = 0;
    console.log(nums);
    //resultnumss.push(nums1[current]);
    for (current = 0; current < nums1.length; current++) {
        if (nums1[current] != nums1[current + 1]) {
            resultnums.push(nums1[current]);
            nums1[unique] = nums1[current];


            unique++;

        }
    }
    //console.log(resultnums);
    console.log(unique);
    console.log(nums);
});

// function removeDuplicates(nums: number[]): number {


//     let k=1;
//     for( let i=1 ; i < nums.length ;i++) {
//         if (nums[i] !== nums[i-1]) {
//             nums[k] = nums[i];
//             k++;
//         }
//     }

//       return k;  
//     }

//  const input1 = [1,1,2];
// console.log(`Input: [${input1}]`);
// console.log(`Output: "${removeDuplicates(input1)}"`);

test('remove element', async ({ }) => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const nums1 = [];
    let k = 0;
    let i = 0;
    const val = 2;

    for (i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums1[k] = nums[i];
            k++;
        }
    }
    console.log(nums1);
    console.log(nums1.length);
})
test('search Insert position', async ({ }) => {
    const nums = [1, 3, 5, 6];
    const target = 7;
    let i = 0;
    while (nums[i] < target) {
        i++;
    }
    console.log(i);
});

test('plus one', async ({ }) => {
    const nums = [4, 3, 2, 1];
    let resultnum = [];
    let i = 0;
    let nums1 = 0;
    for (i = 0; i < nums.length; i++) {
        nums1 = nums1 * 10 + nums[i];

    }
    nums1 = nums1 + 1;

    let j = 0;
    console.log(nums1);
    for (i = nums.length - 1; i >= 0; i--) {
        resultnum[j] = Math.trunc(nums1 / (10 ** i));
        nums1 = nums1 - (resultnum[j] * (10 ** i));
        j++;
    }

    console.log(resultnum);

});


test('Merge sorted array', async ({ }) => {
    const num1 = [1];
    const num2 = [];
    const withoutzero = num1.filter(item => item != 0);
    console.log(withoutzero);
    const mergedArray = [...withoutzero, ...num2];

    console.log(mergedArray.sort());
});


test('single number', async ({ }) => {

    const num1 = [4, 1, 4, 1, 3];
    const sortedNum = num1.sort();
    let countOfNumber = 1;
    let i: number = 0;

    for (i = 0; i < num1.length; i++) {
        if (sortedNum[i] == sortedNum[i + 1]) {
            ++countOfNumber;
        }
        else if (countOfNumber == 1) {
            break;
        }
        else {
            countOfNumber = 1;
        }

    }
    console.log(sortedNum[i]);
})


test('Find Missing Elements', async ({ }) => {


    const num = [1, 4, 2, 6];
    const sortednum2 = num.sort();
    let minimumNumber = sortednum2[0];
    const missingNumber = [];
    let k = 0
    for (let i = 0; i < sortednum2.length; i++) {
        if (sortednum2[i] == minimumNumber) {
            minimumNumber++;
        } else {
            for (k = minimumNumber; k < sortednum2[i]; k++) {
                if (sortednum2[i] == minimumNumber) {
                    minimumNumber++;
                }
                else {
                    missingNumber.push(minimumNumber);
                    minimumNumber++;
                }
            }

        }


    }

    console.log(missingNumber);

});



function mergeSortedArray(num1: number[], num2: number[]) {


    const mergedArray = [...num1, ...num2];
    return mergedArray.sort((a, b) => a - b);
}
test('sortedMergedNumber', async ({ }) => {
    const num3 = [1, 5, 8, 9, 10];
    const num4 = [11, 18, 14, 13];
    console.log(mergeSortedArray(num3, num4));

});

test('mergedTwoNumber', async ({ }) => {

    let arr1 = [1, 3, 5, 7];
    let arr2 = [2, 4, 6, 8];

    let i = 0;
    let j = 0;

    let sortedArray = [];
    while (i<arr1.length && j<arr2.length){
        if (arr1[i] < arr2[j]){
            sortedArray.push(arr1[i]);
            i++;
        }
        else 
        {
            sortedArray.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
    sortedArray.push(arr1[i]);
    i++;
  }

  // Append remaining elements from arr2 (if any)
    while (j < arr2.length) {
    sortedArray.push(arr2[j]);
    j++;
  }
    console.log(sortedArray);
    });

test('select oklahomacityFromDropdownOption',async({page})=>{


 await page.goto('https://www.mytrip.com/');
await page.getByRole('button', { name: 'Allow All' }).click();
const fromDestination = await page.getByPlaceholder('From');
await fromDestination.click();
await fromDestination.fill('Oklahoma City');
await page.waitForTimeout(5000);
const options = await page.locator("xpath=//div[@class='css-cssveg']/ul/li").all();
 for (const option of options) {
    const value = await option.getAttribute('value');
    const text = await option.textContent();

    console.log(`Option: ${text} | Value: ${value}`);

    if (text == 'Oklahoma City-Tinker, USA, Oklahoma') {
      await option.click();
      break;
    }
  }


//const value1 = await page.locator("xpath=(//div[@class='css-cssveg']/ul/li/div/span[1])[1]").getAttribute('innertext');
//const value2 = await page.locator("xpath=(//div[@class='css-cssveg']/ul/li/div/span[1])[1]").getAttribute('class');
const optionAll1= await page.locator("xpath=//div[@class='css-cssveg']/ul/li/div/span[2]").allInnerTexts();
console.log(optionAll1);
//console.log(value1);
//console.log(value2);



});


test('romanToInt',async({})=>{



});


test('Longest common integer',async({})=>{

    const strs = ["flower","flow","flight"];
    const newString = strs.toString();
    console.log(newString)

    
        const charArrays : string[]= newString.split("");
        console.log(charArrays);
        
  
       


});