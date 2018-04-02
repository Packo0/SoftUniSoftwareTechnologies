function solve(input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i] != 'Stop') {
            console.log(input[i]);
        } else {
            break;
        }
    }
}

solve(['Line 1', 'Line 2', 'Line 3', 'Stop']);
solve(['3', '6', '5', '4', 'Stop', '10', '12']);