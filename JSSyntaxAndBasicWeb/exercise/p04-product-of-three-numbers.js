function solve(input) {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 0) {
            return 'Positive';
        }

        if (input[i][0] === '-') {
            count++;
        }
    }

    return count % 2 ? 'Negative' : 'Positive';
}

console.log(solve(['2', '3', '-1']));
console.log(solve(['5', '4', '3']));
console.log(solve(['-3', '-4', '5']));