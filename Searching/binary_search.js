// Recursive binary search

let arr = [1,2,3,5,6,7,9,10,11,15,18];          //sorted array

let ele = 10;
let start = 0;
let end = arr.length-1;

function search(arr,item,start,end){

    // let mid = parseInt((start+end)/2);
    let mid = (start+end)/2;

    if(start>end){
        console.log("item not in the array");
        return;
    };
    if(item==arr[mid]){
        console.log(`itme found at ${mid}`)
        return;
    }else if((item<arr[mid])){
        search(arr,item,start,mid-1);
    }else{
        search(arr,item,mid+1,end);
    };
}
search(arr,ele,start,end);