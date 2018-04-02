function solve(input) {
    let arr = [];

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' ');

        if (tokens[0] === 'add') {
            arr.push(tokens[1]);
        } else if (tokens[0] === 'remove') {
            arr.splice(tokens[1], 1);
        }
    }

    console.log(arr.join('\n'));
}

solve(['add 3', 'add 5', 'add 7']);
solve(['add 3', 'add 5', 'remove 1', 'add 2']);
solve(['add 3', 'add 5', 'remove 2', 'remove 0', 'add 7']);