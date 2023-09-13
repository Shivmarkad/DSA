// const string = "nouggjon";

// function isPalindrom(str, start, end){
//     if(start>=end) return true
//     if(str[start] != str[end]) return false;
//     return isPalindrom(str, start+1, end - 1)
// }

// console.log(isPalindrom(string,0,string.length-1))

// // isPalindrom(noon,0,3)        n == n
// // isPalindrom(noon,1,2)        o == 0
// // isPalindrom(noon,2,1)        2>1 return true

var arr = [21, 34, 23, 56, 78]
for (var i = 0; i < arr.length; i++){
    (function(i){
    setTimeout(function(){
        console.log(i);
    }, 3000)})(i)
}

