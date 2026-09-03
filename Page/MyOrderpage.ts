import {type  Page, type Locator,expect} from '@playwright/test'



export class MyOrderPage{

    readonly page :Page
    readonly tableRows :Locator;
    readonly orderIdCells  : Locator

    constructor(page:Page){
        this.page= page
        this.tableRows = this.page.locator('tbody tr')
        this.orderIdCells =this.page.locator('tbody th')
    }


    async getallOrderIdsFromtable() :Promise<string[]>{
       await this.orderIdCells.first().waitFor()
        const allIds = await this.orderIdCells.allTextContents()
        return allIds.map((id) => id.trim())
    }



async getOrderIdByProductName(productName: string[]): Promise<Record<string,string>> {
    const productOrderIdMap : Record<string,string> ={};

    for (const name of productName){
    const row = this.tableRows.filter({ hasText: name }).first();
    await row.waitFor()
    const orderId = await row.locator('th').textContent();
   productOrderIdMap[name] = orderId ? orderId.trim() : ''
  
    }

return productOrderIdMap

}
}