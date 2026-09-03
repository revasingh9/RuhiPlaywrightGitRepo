import { Page,Locator,expect} from "@playwright/test";

import { IBasePage } from "../Page/BasePageInterface.ts";




export class GreenKartPage implements IBasePage {
    readonly page: Page

    readonly searchInput: Locator;
  readonly productCards: Locator;
  readonly cartIcon: Locator;
  readonly proceedToCheckoutBtn: Locator;
  readonly promoInput: Locator;
  readonly promoBtn: Locator;
  readonly placeOrderBtn: Locator;
  readonly countryDropdownInput: Locator;
  readonly termsCheckbox: Locator;
  readonly proceedBtn: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('input.search-keyword');
    this.productCards = page.locator('.product');
    this.cartIcon = page.locator('a.cart-icon');
    this.proceedToCheckoutBtn = page.locator('button:has-text("PROCEED TO CHECKOUT")');
    this.promoInput = page.locator('input.promoCode');
    this.promoBtn = page.locator('button.promoBtn');
    this.placeOrderBtn = page.locator('button:has-text("Place Order")');
    this.countryDropdownInput = page.locator('#react-select-4-input'); // matching fallback ID from source html
    this.termsCheckbox = page.locator('input.chkAgree');
    this.proceedBtn = page.locator('button:has-text("Proceed")');
    this.successMessage = page.locator('span[style*="color:green"]'); 
  }
  async navigate(): Promise<void> {
    await this.page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
  }

  // Reusable search helper method
  async searchProduct(productName: string): Promise<void> {
    await this.searchInput.fill(productName);
    await this.searchInput.press('Enter');
  }

  async addProductToCart(fullName: string): Promise<void> {
    const targetProduct = this.productCards.filter({ hasText: fullName });
    await expect(targetProduct).toBeVisible();
    await targetProduct.locator('button:has-text("ADD TO CART")').click();
  }

  async proceedToCheckout(): Promise<void> {
    await this.cartIcon.click();
    await this.proceedToCheckoutBtn.click();
  }

  async applyPromoCode(code: string): Promise<void> {
    await this.promoInput.fill(code);
    await this.promoBtn.click();
    // Wait for validation engine to process coupon response
    await this.page.locator('span.promoInfo').waitFor({ state: 'visible' });
  }

  // Reusable helper function to select dynamic country dropdown
  async selectCountryFromDropdown(countryName: string): Promise<void> {
    // Falls back to direct tag select if standard wrapper, or click and input layout
    if (await this.countryDropdownInput.isVisible()) {
      await this.countryDropdownInput.fill(countryName);
      await this.countryDropdownInput.press('Enter');
    } else {
      await this.page.locator('div select, .wrapperTwo select').selectOption(countryName);
    }
  }

  async completeOrder(): Promise<void> {
    await this.termsCheckbox.check();
    await this.proceedBtn.click();
  }

}