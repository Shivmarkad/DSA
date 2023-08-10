function factorial(item){
    if(item==0){
        return 1
    }
   return item*factorial(item-1)
}

let data =9
console.log(factorial(data))