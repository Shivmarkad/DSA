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

const array = [1, 4, 2, 5, 3]

maxHeapify(array, array.length,1)

console.log(array)