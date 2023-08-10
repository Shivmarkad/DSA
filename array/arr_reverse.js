let data = [2,4,1,5,9,12,9,34,23];

let temp ;

function reverse(data,start,end){
    console.log(data);
    if(start<=end){
        temp=data[start];
        data[start]=data[end];
        data[end]=temp;
        reverse(data,start+1,end-1);
    }
    return data;
}

console.log(reverse(data,0,data.length-1));
