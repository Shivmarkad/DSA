
function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let leftArr = arr.slice(0,mid)
    let rightArr = arr.slice(mid)

    return sort(mergeSort(leftArr), mergeSort(rightArr))
}

function sort(leftArr, rightArr){
    let temp = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0] < rightArr[0]){
            temp.push(leftArr.shift())
        }else{
            temp.push(rightArr.shift())
        }
    }
    return [...temp, ...leftArr,...rightArr]
}

const arr = [34, 2, 6, 3, 89, 1, 4]

console.log(mergeSort(arr))