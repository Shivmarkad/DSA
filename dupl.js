const array = [2, 2, 4, 8, 9, 12, 4]


function getDupl(arr) {

    const duplIt = []
    const visited = []

    for (let i = 0; i <= arr.length; i++) {

        let count = 0;
        var itm = arr[i]

        let isCounted = false

        for (let k = 0; k <= visited.length; k++) {
            if (itm == visited[k]) {
                isCounted = true
                break
            }
        }
        if (!isCounted) {
            visited.push(itm)
            for (let j = 0; j < arr.length; j++) {
                if (itm == arr[j]) {
                    count += 1
                }
            }
            let cObj = {
                itm: itm,
                val: count
            }
            duplIt.push(cObj)
        }

    }
    return duplIt
}


const cd = getDupl(array)


console.log(cd)