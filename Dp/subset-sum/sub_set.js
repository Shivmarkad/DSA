function countSubSet(arr, sum, i){

    //sum value achieved
    if(sum == 0){
        return 1
    }

    //sum value crossed
    if(sum<0){
        return 0
    }

    //iterated all the elements
    if(i == arr.length){
        return 0;
    }

    return (countSubSet(arr, sum-arr[i], i+1) + countSubSet(arr, sum, i+1))
}

const array = [3, 2, 5, 6]

const sum = 8

const result = countSubSet(array, sum, 0)

console.log(result)