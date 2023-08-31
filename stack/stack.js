let data = [];
let currsize=data.length;

let max=5;

function push(val){
    if(currsize>=max){
        console.log("stack is full");
    }
    data[currsize]=val;
    currsize+=1;
}
function pop(){
    if (currsize>0) {
        currsize-=1;
        data.length=currsize
    }else{
        console.log("stack is already empty");
    }      
}

push(12);
push(33);
push(88);
pop();
console.log(data);