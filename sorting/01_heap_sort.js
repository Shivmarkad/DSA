function maxHeapify(arr, n , i)
    {
        let largest = i;
        let leftChildI = i * 2 + 1;
        let rightChildI = i * 2 + 2;

        if(leftChildI < n && arr[leftChildI] > arr[largest]){
            largest = leftChildI
        }

        if(rightChildI < n && arr[rightChildI] > arr[largest]){
            largest = rightChildI
        }

        if(largest != i){
            let temp = arr[i];
            arr[i] = arr[largest];
            arr[largest] = temp
            maxHeapify(arr, n, largest)
        }
}

function sort(arr, n){

    //building heap
    for(let i = parseInt(n/2 - 1); i>=0; i--){
        maxHeapify(arr, n, i)
    }

    for(let i = n-1; i>= 0; i--){
        let temp = arr[0];
        arr[0] = arr[i]
        arr[i] = temp;
        maxHeapify(arr, i, 0)
    }
}

const array = [1, 4, 2, 5, 3,56,8,9]

sort(array, array.length)

console.log(array)