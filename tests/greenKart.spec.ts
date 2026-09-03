import { test, expect } from '@playwright/test';
import { GreenKartPage } from '../Page/GreenKartPage';
import { generateRandomTestData } from '../TestData/testData.ts'

test('E2E Checkout flow with randomized product data matching interface specifications', async ({ page }) => {
  const greenKartPage = new GreenKartPage(page);
  const testData = generateRandomTestData();


await greenKartPage.navigate();
  await greenKartPage.searchProduct(testData.searchTerm);

  // 2. Assert correct product displays and Add to Cart
  const firstProductTitle = page.locator('.product-name').first();
  await expect(firstProductTitle).toContainText(testData.expectedProductName);
  await greenKartPage.addProductToCart(testData.expectedProductName);

  // 3. Move to Checkout Overview Drawer/Page
  await greenKartPage.proceedToCheckout();

  // 4. Verify checkout URL redirect constraints
  await expect(page).toHaveURL(/.*cart/);

  // 5. Verify correct item is displayed inside the summary tables
  const summaryItemName = page.locator('p.product-name');
  await expect(summaryItemName).toContainText(testData.expectedProductName);

  // 6. Apply random promo code and assert total configuration layouts exist
  await greenKartPage.applyPromoCode(testData.promoCode);
  await expect(page.locator('span.totAmt')).toBeVisible();
  // Locates the text immediately following the <b> tag
const numberOfItemLocator = page.locator('//html/body/div/div/div/div/div');

// Read the text value directly
const fullText = await numberOfItemLocator.textContent();
const match = fullText.match(/No\.\s*of\s*Items\s*:\s*(\d+)/i);
console.log(match); 
// Output: "1"
if (match) {
    // Grab index 1 from the array to isolate the number!
    const justNumber = match[1]; 
    
    console.log("My Isolated Number is:", justNumber); // Output: "1"
    
    // Now you can assert cleanly using standard JavaScript matchers
    expect(justNumber).toBe('1');
}

  await expect(numberOfItemLocator).toBeVisible();
  await expect(page.locator('span.discountAmt')).toBeVisible();
  await expect(page.locator('span.discountPerc')).toBeVisible();

  // 7. Click Place Order
  await greenKartPage.placeOrderBtn.click();

  // 8. Handle country loop drop selections and finalize check bounds
  await greenKartPage.selectCountryFromDropdown(testData.country);
  await greenKartPage.completeOrder();

  // 9. Confirm completion validation notification blocks matches
  const outputMessage = page.locator('span:has-text("Thank you")');
  await expect(outputMessage).toContainText('Thank you, your order has been placed successfully');






})