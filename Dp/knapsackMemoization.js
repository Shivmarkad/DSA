const wt = [1, 3, 4, 5]
const val = [1, 4, 5, 7]
const w = 7


const n = wt.length;

const t = Array.from({ length: w + 1 }, () => Array(n + 1));


function knapsack(wt, val, w, n,t) {
    // BASE Condition => Think for smallest valid input

    if (n == 0 || w == 0) {
        return 0
    }
    if (t[w][n] !== undefined) {
        return t[w][n]
    }
    // CHOICE Diagram

    if (wt[n - 1] <= w) {
        // can include or not
        return t[w][n] = Math.max(val[n - 1] + knapsack(wt, val, w - wt[n - 1], n - 1,t), knapsack(wt, val, w, n - 1,t))
    }
    if (wt[n - 1] > w) {
        // don't include
        return t[w][n] = knapsack(wt, val, w, n - 1,t)
    }
}

console.log(knapsack(wt, val, w, wt.length,t))