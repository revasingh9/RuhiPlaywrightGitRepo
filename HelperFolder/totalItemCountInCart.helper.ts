
 import type { Page } from "@playwright/test"
 
 
 export async function getnoOfItemCountInCart(page:Page): Promise<number>{
  
       const getTheCartCount = page.locator("label").getByText(/^\d+$/)
        //await getTheCartCount.waitFor({state: "visible",timeout : 10000})
        const noOfItemCountInCart = await getTheCartCount.textContent()
        const numericCount = parseInt(noOfItemCountInCart?.trim()|| '0', 10)
         console.log("No Of Item Count InCart:", numericCount)
         return numericCount


    }