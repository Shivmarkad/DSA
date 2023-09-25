const maxHeapify = (arr, n, i) =>{
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    // if left child is smaller than root 
    if(l < n && arr[l] > arr[largest]){
        largest = l;
    }

    //if right child is smaller than smallest so far
    if(r<n && arr[r] > arr[largest]){
        largest =r;
    }

    //if smallest is not root 
    if(largest != i){
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp

        // Recursively heapify the affected sub-tree
        maxHeapify(arr, n, largest)
    }
}

const heapSort = (arr, n) =>{

    //build heap
    for(let i = parseInt(n/2 -1); i>=0; i--){
        maxHeapify(arr, n, i)
    }

    //one by one extract an element from heap

    for(let i = n-1; i>= 0; i--){

        let temp = arr[0];
        arr[0] = arr[i]
        arr[i] = temp

        //call max heapify on reduced heap

        maxHeapify(arr, i, 0)
    }
}

const arr = [2, 5, 3, 9, 8, 1]

heapSort(arr, arr.length);

console.log(arr)