let data =  new Map([
    ['name','shiv'],
    ['lname','Markad'],
    [4,"hey"]
]);

data.set('myAge',24)
console.log(data.has('name'))
console.log(data.get('name'))
console.log(data.size)
// data.clear()
console.log(data.get('name'))
// console.log(data.size)
data.delete('name')
console.log(data.entries())