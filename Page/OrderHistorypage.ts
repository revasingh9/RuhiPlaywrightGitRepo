import {type  Page, type Locator,expect} from '@playwright/test'


export class OrderHistoryPage{
   readonly page : Page;
   readonly orderId : Locator;
   readonly assertAllProductOnOrderHistoryPage : Locator;
   readonly clickAtOrdersHistoryPageLink : Locator
  


   constructor(page:Page){
    this.page = page
    this.orderId = page.locator('label',{hasText: /[a-z0-9]{24}/i})
    this.assertAllProductOnOrderHistoryPage = page.locator('.product-info-column.m-3 .title')
    this.clickAtOrdersHistoryPageLink = page.getByText('Orders History Page')

   }
    async getConfirmedProductName(expectedItemCount: number): Promise<string[]>{
       await expect(this.assertAllProductOnOrderHistoryPage).toHaveCount(expectedItemCount);
       const productNames = await this.assertAllProductOnOrderHistoryPage.allTextContents()

       const cleanedProductNames = productNames.map((name) =>name.trim())
       console.log('Confirmed Ordered Products:', cleanedProductNames);

    return cleanedProductNames;
    }
   async getOrderIDs(): Promise<string[]>{
    await this.orderId.first().waitFor()
    const fullText = await this.orderId.allTextContents()
    const orderIds = fullText.flatMap((text) => text.match(/[a-z0-9]{24}/gi) || [])
      .map((id) => id.trim());
    console.log('Extracted Order IDs:', orderIds);
    
    return orderIds;
   }
 async clickAtOrderHistoryPagelink(){
   await this.clickAtOrdersHistoryPageLink.click()
 }



   }




