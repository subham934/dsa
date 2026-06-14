// count of primes(sieve of Eratosthenes)

// Given an integer n, return the number of prime numbers that are strictly less than n.


n = 10

// Primes strictly less than 10 are: 2, 3, 5, 7
// Count = 4


/**
 * @param {number} n
 * @return {number}
 */
//  var isPrime = function(n){
//     if(n<=1) return false;
//     if(n==2) return true;
//     if(n%2 == 0) return false;
//     for(let i = 3; i*i <=n; i+=2){
//         if(n%i == 0) return false;
//     }
//     return true;
// }

// var countPrimes = function(n) {
//         let count = 0;
//     for(let i = 2; i<n; i++){
//         if(isPrime(i)){
//             count++;
//         }
//     }

//     return count;
// };

// console.log(countPrimes(10));

// this is time consuming, for this , we have different efficient approach 
//======================================
// approach 2: sieve of Eratosthenes

    function countPrimes(n){
    let count = 0;
    let primes = new Array(n+1).fill(true);
    primes[0] = primes[1] = false;
    for(let i = 2; i*i<n; i++){
        if(primes[i]){
            for(let j = i*i; j<n; j+=i){
                primes[j] = false;
            }
        }
    }

    for(let i = 2; i<n; i++){
        if(primes[i]){
            count++;
        }
    }
    return count;
}

console.log(countPrimes(25));

// At first, because 0 and 1 are not prime numbers, they are marked as false. The array is filled with true by default because initially we assume every number is prime. In the first for loop, we start from i = 2 because 0 and 1 are already handled, and we check till i*i < n because after √n the same factors start repeating. So for n = 25, the possible values of i are 2, 3, 4, but when i = 4, it is skipped because primes[4] is already false. Now, in the second loop, when i = 2, j starts from i*i, meaning 4, and since j += i, the values become 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24. We mark all these multiples of 2 as false because they are not prime. Then when i = 3, j starts from 9, and with j += 3, the values become 9, 12, 15, 18, 21, 24, so all multiples of 3 are marked as false. When i = 4, it is skipped because 4 was already marked false while processing multiples of 2. After all multiples are removed, the remaining indexes that still contain true are the prime numbers.