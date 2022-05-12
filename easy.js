function average(array) {
    let sum = 0;
    for (i = 0; i<array.length; i++) {
        sum += array[i]
    }
    return sum = sum / array.length

}
console.log(average([1, 4, 7])); //output = 4
console.log(average([10, 5])); //output = 7.5
console.log(average([1.5, 3, 2.5, 1])); // output = 2