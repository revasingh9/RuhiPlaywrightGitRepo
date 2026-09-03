import { type Page, type Locator, expect } from '@playwright/test'
import { parseCurrency } from '../utils/parseCurrency.js'
import { getnoOfItemCountInCart } from '../HelperFolder/totalItemCountInCart.helper.js'

export class Cartpage {
    readonly page: Page
    readonly assertMyCartTitle: Locator
    readonly checkOutButton: Locator
    readonly getProductPriceText: Locator
    readonly getTotalPriceText: Locator
   


    constructor(page: Page) {
        this.page = page
        this.assertMyCartTitle = this.page.getByRole('heading',{name:"My Cart"})

        this.getProductPriceText = this.page.locator('.prodTotal.cartSection')
        this.getTotalPriceText = this.page.getByText('$').nth(5)
        this.checkOutButton = this.page.getByRole('button', { name: "Checkout" })
        
    }
     async getcartItemCount(): Promise<number>{
        return await getnoOfItemCountInCart(this.page)
    }


    async assertProductPriceToTotalPrice(): Promise<void> {
        

        await this.assertMyCartTitle.waitFor()
        await expect(this.assertMyCartTitle).toContainText('My Cart')
         

        const headingMyCartText =await this.assertMyCartTitle.textContent()
        console.log('Heading MyCart Text:',headingMyCartText)
      
        await this.checkOutButton.waitFor()
        const productPriceOnCartpage = await this.getProductPriceText.allTextContents()
        console.log('Product Price On Cart Page:', productPriceOnCartpage)
        let calculatedSum = 0;
        for(const priceText of productPriceOnCartpage){
            calculatedSum += parseCurrency(priceText)
        }
       console.log('Calculated Sum of Products:',calculatedSum)
           
        const totalPriceOnCartPage = await this.getTotalPriceText.textContent()
        console.log('Total Price On Cart Page:', totalPriceOnCartPage)
        const actualTotalPrice = parseCurrency(totalPriceOnCartPage || '')
        console.log('Actual Total Price on Page: ',actualTotalPrice)
        expect(calculatedSum).toBe(actualTotalPrice)
        
    }

    async clickOnCheckOutButton(){
        await this.checkOutButton.click()
    }

   


}