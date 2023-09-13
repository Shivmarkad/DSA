function factorial(item){
    if(item==0){
        return 1
    }
   return item*factorial(item-1)
}

let data =4
console.log(factorial(data))


//9*factorial(8)
//9*8*factorial(7)
//9*8*7*factorial(6)
//9*8*7*6*factorial(5)
//9*8*7*6*5*factorial(4)
//9*8*7*6*5*4*factorial(3)
//9*8*7*6*5*4*3*factorial(2)
//9*8*7*6*5*4*3*2*factorial(1)
//9*8*7*6*5*4*3*2*1