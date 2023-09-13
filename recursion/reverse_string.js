const str = "string"

function reverseString(str){
    if(str == '') return '';
    return reverseString(str.slice(1)) + str[0]
}

const str2 = reverseString(str)
console.log(str2)

//reverseString('tring') + s       gnirt + s
//reverseString('ring') + t        gnir + t
//reverseString('ing') + r         gni + r
//reverseString('ng') + i          gn + i
//reverseString('g') + n           g + n
//reverseString('') + g            g