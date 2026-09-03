import{ type Page, type Locator, expect} from '@playwright/test'

let countryNameOption = " Cambodia"


export class PaymentPage{ 

 readonly page : Page;
 readonly cvvCodeInputBox : Locator;
 readonly enterNameOnCard  : Locator;
 readonly applyCouponTextBox : Locator;
 readonly applyCouponButton : Locator;
 readonly couponAppliedAsserted : Locator;
 readonly selectCountryTextBox : Locator;
 readonly selectDropdownCountryOption : Locator;
 readonly placeOrderButton : Locator




 constructor(page:Page){
         this.page= page
         this.cvvCodeInputBox = page.getByRole('textbox').nth(1)
         this.enterNameOnCard = page.getByRole("textbox").nth(2)
         this.applyCouponTextBox = page.locator('input[name="coupon"]')
         this.applyCouponButton = page.getByRole('button',{name:'Apply Coupon'})
         this.couponAppliedAsserted = page.getByText('* Coupon Applied')
         this.selectCountryTextBox = page.getByRole('textbox',{name:"Select Country"})
         this.selectDropdownCountryOption =page.getByRole('button', { name: countryNameOption })
         this.placeOrderButton = page.getByText('Place Order')

 }
    async enterCreditCardInformation():Promise<void>{

        await this.cvvCodeInputBox.fill('66789')
        await this.enterNameOnCard.fill('Ruhi Kumari')
        await this.applyCouponTextBox.fill('rahulshettyacademy')
        await this.applyCouponButton.click()
        await this.selectCountryTextBox.click()
        await  this.selectCountryTextBox.fill('Cam')
        await  this.selectCountryTextBox.press('Backspace')

        
        await this.selectDropdownCountryOption.click()
            }    

    async assertCouponApplied(): Promise<void>{

        await expect(this.couponAppliedAsserted).toBeEnabled()
    }

    async clickOnPlaceOrder(){
        await this.placeOrderButton.click()
    }


 }


