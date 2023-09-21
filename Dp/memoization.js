function fiboNacci(n){
    if(n == 0){
        return 0
    }else if(n == 1){
        return 1
    }
    return fiboNacci(n-1) + fiboNacci(n-2)
}

console.log(fiboNacci(7))