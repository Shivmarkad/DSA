const arr = [1, 2, 1, 4, 6, 8]

function sort(arr){
    for(let i = 0;i<arr.length;i++){
        for(let j = 0;j<arr.length;j++){
            if(arr[i]<arr[j]){
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
                break
            }
        }
    }
    return arr;
}

console.log(sort(arr))