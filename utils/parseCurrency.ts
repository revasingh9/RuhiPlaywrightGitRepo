
export  function parseCurrency(text: string): number{
    if (!text) return 0
     const numericPrice = parseInt(text.replace('$','').replace(',', '').trim());
    // const numericPrice = parseInt(text.replace(/[^0-9]/g, ''), 10);
     console.log('Prased price:', numericPrice)
     return numericPrice




}