const wt = [1, 3, 4, 5]

const val = [1, 4, 5, 7]

const capacity = 7


function knapsack(wt, val, w, n) {
    // BASE Condition => Think for smallest valid input

    if (n == 0 || w == 0) {
        return 0
    }
    // CHOICE Diagram

    if (wt[n - 1] <= w) {
        // can include or not
        return Math.max(val[n - 1] + knapsack(wt, val, w - wt[n - 1], n - 1), knapsack(wt, val, w, n - 1))
    }
    if (wt[n - 1] > w) {
        // don't include
        return knapsack(wt, val, w, n - 1)
    }

}

console.log(knapsack(wt,val, capacity, wt.length))