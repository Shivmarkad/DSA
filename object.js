
const newObj = {
    "name": "shiv",
    "role":"developer"
}


const {role} = newObj

console.log(role)

const arr = [2, 12, 4, 5, 6]

const sqr = arr.map((ele) =>{
    return ele*ele;
})


let myPromise = new Promise ((resolve , reject)=>{

    let a = 34;
    let b = 123;

    resolve(a*b)

}).then((result)=>{
    return result
}).catch((err)=>{
    console.log(err)
})

console.log(myPromise)


function sort(arr){

    for(let i = 0; i<arr.arrLength; i++){

        if(arr[i] < arr[i+1]){
            let temp = arr[i];
            arr[i] = arr[i+1]
            arr[i+1] = temp
        }
    }
    return arr

}

console.log(sort(arr))

//     const arrLength = arr;

//     let smallest = arr[0]
//     let ind ;
//     let swap = false;

//     for(let i = 1;i <arrLength;i++){
//         for(let j = i; j < arrLength; j++){
//             if(smallest > arr[j]){
//                 smallest = arr[j];
//                 swap = true;
//             }
//     }
//     if(swap == true){
//         let temp = arr[i]
//         arr[i] = temp;
//     }
// }

// // }
