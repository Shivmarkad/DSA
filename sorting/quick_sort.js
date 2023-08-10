// function quickSort(){
//     if(arr.length<2){
//         return arr;
//     }
//     let pivot =arr[arr.length -1];

//     let left = [];
//     let right = [];

//     for (let i = 0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i]);
//         }else{
//             right.push(arr[i]);
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

function partition(arr,low,high){
    let pivot = arr[low];
    let i = low;
    let j = high;
    while (i<j){
        while(arr[i]<=pivot && i <= high-1 ){
            i++
        }
        while(arr[j]>pivot && j>= low +1){
            j--;
        }
        if(i<j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] =temp;
        }
    }
    let temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;
    return j
}

function quickSort(arr,low,high){
    if(low<high){
        pindex = partition(arr,low,high);
        quickSort(arr,low,pindex-1);
        quickSort(arr,pindex+1,high)
    }
    return arr;
}

const arr = [8,3,2,4,8,2,3,19,11,12];

console.log(quickSort(arr,0,arr.length-1));