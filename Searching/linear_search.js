// Linear Search
let arr = [1, 2, 4, 22,234,99];
let ele =3;

function linearSearch(arr,ele){
    for(i = 0;i<arr.length;i++){
        if(arr[i]==ele){
            return i;
        }
    }
    return "item not in array";
}

console.log(linearSearch(arr,ele))