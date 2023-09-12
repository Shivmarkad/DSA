let a = [1, 23, 4, 12, 99, 0,1]

function insertionSort(arr){

    for(let i = 1;i <arr.length;i++){
        let cur = arr[i];
        let j = i-1;

        while(j>=0 && arr[j]>cur){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = cur
    }
    return arr
}

console.log("Result from insertion sort--",insertionSort(a))


function selectionSort(arr){
    for(let i = 0;i<arr.length;i++){
        let min = i;
        for(let j = i;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        if(min !== i){
            let temp = arr[min];
            arr[i] = arr[temp];
            arr[min] = arr[i]
        }
    }
    return arr
}

console.log("Result from selection sort--",selectionSort(a))


function bubbleSort(arr){
    for(let i = arr.length;i>0;i--){
        for(let j = 0; j<i;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log("Result from bubble sort--",bubbleSort(a))
