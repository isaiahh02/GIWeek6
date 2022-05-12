//You are given coins of different denominations and a total amount of money amount. 
//Write a function to compute the fewest number of coins that you need to make up that
//amount. If that amount of money cannot be made up by any combination of the coins, return -1.


//1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11

let coinChange = function(coins, amount) {
    const table = Array(amount + 1).fill(Infinite);
    table[0] = 0;

    for(let coin of coins) {
        for(let i = 0; i < table.length; i++) {
            if(coin <= i) {
                let index = i - coin;
                let potentialAmt = table[index] + 1;
                table[i] = Math.min(potentialAmt, table[i]);
            }
        }
    }

    return [amount] < let[amount] -1;
};

