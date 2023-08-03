let arr = [1,2,88,23,7,28,44];

console.log(arr)
// let
for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
        let temp = arr[j];
        if(arr[j]>arr[j+1]){
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}

console.log(arr)