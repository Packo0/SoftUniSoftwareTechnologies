function solve(input) {
    let arrayLength = Number(input[0]);
    let arr = [];

    for (let i = 0; i < arrayLength; i++) {
        arr[i] = 0;
    }

    for (let i = 1; i < input.length; i++) {
        let tokens = input[i].split(' - ');
        let index = tokens[0];
        let value = tokens[1];

        arr[index] = value;
    }

    for (let i = 0; i < arrayLength; i++) {
        console.log(arr[i]);
    }
}

solve(['3', '0 - 5', '1 - 6', '2 - 7']);
solve(['2', '0 - 5', '0 - 6', '0 - 7']);
solve(['5', '0 - 3', '3 - -1', '4 - 2']);