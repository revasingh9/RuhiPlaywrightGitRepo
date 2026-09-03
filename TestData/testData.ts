

export interface ITestData{
    searchTerm: string;
    expectedProductName: string;
    promoCode: string;
    country: string;

}

const products = [
  { search: 'Brocolli', fullName: 'Brocolli - 1 Kg' },
  { search: 'Cauliflower', fullName: 'Cauliflower - 1 Kg' },
  { search: 'Cucumber', fullName: 'Cucumber - 1 Kg' }
];
const countries = ['India', 'United States', 'Canada', 'United Kingdom'];

export function generateRandomTestData(): ITestData {

   const randomProduct = products[Math.floor(Math.random() * products.length)];
  const randomCountry = countries[Math.floor(Math.random() * countries.length)];
  const randomPromo = 'PROMO_' + Math.floor(1000 + Math.random() * 9000);

return {
    searchTerm: randomProduct.search,
    expectedProductName: randomProduct.fullName,
    promoCode: randomPromo,
    country: randomCountry
  };




}