let queue = [];
let currentSize = queue.length;
let maxSize = 5;

function enqueue(newVal) {
    if (currentSize >= maxSize) {
        console.log("Queue is already full");
    } else {
        queue[currentSize] = newVal;
        currentSize++;
    }
}
function dequeue() {
    if (currentSize > 0) {
        for (let i = 0; i < queue.length; i++) {
            queue[i] = queue[i + 1];
        }
        currentSize--;
        queue.length = currentSize;
    } else {
        console.log("queue is already empty");
    }
}

enqueue(23);
enqueue(5);
enqueue(10);
dequeue()
console.log(queue);

