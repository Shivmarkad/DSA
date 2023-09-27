function getSecLar(arr) {
  let largest = 0;
  let secLargest = 0;

  for (let i = 0; i <= arr.length; i++) {
    if (largest < arr[i]) {
      secLargest = largest;
      largest = arr[i];
    }

    if (secLargest < arr[i] && arr[i] < largest) {
      secLargest = arr[i];
    }
  }
  return secLargest;
}

const arr = [1, 5, 2, 2, 34, 23, 12, 88, 90, 7, 56, 78, 89];

console.log(getSecLar(arr));
