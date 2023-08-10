let data = [60, 30, 10, 67, 40];
let newEl = 70;
let position = 2;
console.log(data)

for (let i = data.length - 1; i >= 0; i--) {
   
    if (i >= position) {
        data[i + 1] = data[i];
        if (i == position) {
            data[i] = newEl;
        }
    }
}
console.log(data)