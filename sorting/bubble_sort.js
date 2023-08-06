let arr = [1,2,88,23,7,28,44];

console.log(arr)
function bubbleSort1(arr){
for(let i=0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
        let temp = arr[j];
        if(arr[j]>arr[j+1]){
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}
return arr;
}

function bubbleSort2(arr){
    for(let i=arr.length;i>0;i--){
        for(j=0;j<i;j++){
            let temp = arr[j];
            if(arr[j]>arr[j+1]){
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort1(arr));

console.log(bubbleSort2(arr));