// function fiboNacci(n) {
//     if (n == 0) {
//         return 0
//     } else if (n == 1) {
//         return 1
//     }
//     return fiboNacci(n - 1) + fiboNacci(n - 2)
// }

const memo = []
memo[0] = 0
memo[1] = 1

function fibonacciVal(n) {
    if (memo.length > n) {
        return memo[n]
    }
    for (let i = 2; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2]
    }
    return memo[n]
}

console.log(fibonacciVal(9))
console.log(fibonacciVal(6))
// console.log(fiboNacci(7))
console.log(memo)