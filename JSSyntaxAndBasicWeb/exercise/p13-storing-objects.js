function solve(input) {
    for (let obj of input) {
        let tokens = obj.split(' -> ');
        console.log(`Name: ${tokens[0]}`);
        console.log(`Age: ${tokens[1]}`);
        console.log(`Grade: ${tokens[2]}`);
    }
}

solve([
    'Pesho -> 13 -> 6.00',
    'Ivan -> 12 -> 5.57',
    'Toni -> 13 -> 4.90',
]);