import { test, expect } from '@playwright/test'
import { LoginPage } from '../Page/LoginPage.js'
import { DashboardPage } from '../Page/DashboardPage.js'
import { Cartpage } from '../Page/CartPage.js'
import { PaymentPage } from '../Page/PaymentPage.js'
import { OrderHistoryPage } from '../Page/OrderHistorypage.js'
import { MyOrderPage } from "../Page/MyOrderpage.js";
import productNameData from '../TestData/productNameData.json' with {type: 'json'}

test('End To End Complete Flow test', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const dashboardPage = new DashboardPage(page)
    const cartpage = new Cartpage(page)
    const paymentPage = new PaymentPage(page)
    const  orderHistoryPage  = new OrderHistoryPage(page)
    const  myOrderPage = new MyOrderPage(page)

    await page.goto('https://rahulshettyacademy.com/client/#/dashboard/dash')
    await loginPage.login()
    await loginPage.clickOnButton()
    await dashboardPage.addProductToCart(productNameData.shoppingItemList)
    await dashboardPage.clickOncartIcon()
    const totalItemCount = await dashboardPage.getcartItemCount()
    await cartpage.assertProductPriceToTotalPrice()
    expect(totalItemCount).toEqual(await cartpage.getcartItemCount())
    await cartpage.clickOnCheckOutButton()
    await paymentPage.enterCreditCardInformation()
    await paymentPage.assertCouponApplied()
    await paymentPage.clickOnPlaceOrder()
    const confirmedProducts = await orderHistoryPage.getConfirmedProductName(productNameData.shoppingItemList.length)
    for(const orderHistoryPageProductItemList of productNameData.shoppingItemList)
        {
        expect(confirmedProducts).toContain(orderHistoryPageProductItemList)
    }

     const orderIds = await orderHistoryPage.getOrderIDs()
     console.log('Order Ids:', orderIds)
    expect(orderIds.length).toBeGreaterThan(0);
    await orderHistoryPage.clickAtOrderHistoryPagelink()
     const orderIdatMyorderpage = await myOrderPage.getallOrderIdsFromtable()
     console.log('OrderIdatMyorderpage:', orderIdatMyorderpage)
    const readIdByProductname= await myOrderPage.getOrderIdByProductName(productNameData.shoppingItemList)
    console.log(readIdByProductname)
    
})