function selectionSort(arr){
    for(let i = 0;i<arr.length;i++){
        let min = i;
        for(let j = i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        if(i!==min){
            temp= arr[i];
            arr[i]=arr[min];
            arr[min]=temp;
        }
    }
    return arr;
}

// let arr = [1,2,66,7,2,8,12,99];
let arr = [2,0,2,1,1,0];

console.log(selectionSort(arr));