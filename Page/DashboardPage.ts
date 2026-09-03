import{type Page ,type Locator} from '@playwright/test'
import { getnoOfItemCountInCart } from '../HelperFolder/totalItemCountInCart.helper.js'


export class DashboardPage{

   readonly  page :Page;
   readonly getAllProductName : Locator;
  // readonly addToCartButton : Locator;
   readonly cartIcon :Locator;
   readonly noOfItemInCart : Locator;


    constructor(page :Page){
    this.page = page
    this.getAllProductName =  page.locator('.card-body h5')
    
    this.cartIcon =  page.locator('label', {hasText:/^[0-9]+$/})
    //this.cartIcon = await page.locator('label: text-matches("^[0-9]+$")')
    this.noOfItemInCart  =this.page.locator('label',{hasText :/^[0-9]+$/})

    }

    async readAllProductNameOnPage(): Promise<string[]>{
        await this.getAllProductName.first().waitFor()
        
         const collectedAllProuctName =  await this.getAllProductName.allTextContents()
         
         console.log(collectedAllProuctName)
         //await this.page.waitForTimeout(5000)
         return collectedAllProuctName
    }
    async addProductToCart(productName:string[]): Promise<void>{
        for (const name of productName){
        const productCard = this.page.locator('.card-body', { hasText: name })

        await productCard.getByRole("button",{ name: 'Add To Cart'}).click()
        await this.page.waitForTimeout(6000)
       // await this.page.locator('#toast-container').waitFor({ state: 'hidden' });

        } 
    }

     async getcartItemCount(): Promise<number>{
        //await this.page.waitForTimeout(6000)
        return await getnoOfItemCountInCart(this.page)
    }

    async clickOncartIcon(): Promise<void>{
        await this.cartIcon.click()
    }

   
    

}