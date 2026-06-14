// Leetcode 121

// You are given an array of stock prices where price[i] is the price of a stock on day i.

// You can buy and sell the stock only once.

let price = [7, 1, 5, 3, 6, 4];

let min = price[0];
let profit = 0;

for (let i = 1; i < price.length; i++) {
    if(price[i] < min){
        min = price[i];
    }
    profit = Math.max(profit, price[i] - min);
}

console.log(profit);

