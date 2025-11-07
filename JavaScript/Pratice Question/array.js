let prices = [100, 200, 300, 900, 500];
let discountedPrices= [];

for(let i=0; i<prices.length; i++){
    let discount = prices[i] / 10;
    discountedPrices.push(prices[i] - discount);
}
console.log(discountedPrices);