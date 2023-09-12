let arr = [12,22,14,11,2,6,8,];

function mergeSort(arr){
   if(arr.length <2){
    return arr;
   }
   const mid = Math.floor(arr.length/2)
   const leftArr = arr.slice(0,mid);
   const rightArr = arr.slice(mid);
   return sort(mergeSort(leftArr),mergeSort(rightArr));
}
    
function sort(leftArr,rightArr){
    const sortedArr = [];

    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr,...leftArr,...rightArr]
}

const array = [1,7,3,9,2]

console.log(mergeSort(array))