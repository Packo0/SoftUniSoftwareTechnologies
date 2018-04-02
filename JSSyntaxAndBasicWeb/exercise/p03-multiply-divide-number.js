function solve (input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    if (num2 >= num1) {
        return num1 * num2;
    } else {
        return num1 / num2;
    }
}

console.log(solve(['2', '3']));
console.log(solve(['13', '13']));
console.log(solve(['3', '2']));
console.log(solve(['144', '12']));