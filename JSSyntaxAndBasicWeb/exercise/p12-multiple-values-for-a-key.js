function solve(input) {
    let obj = {};
    let last = input[input.length - 1];
    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' ');
        let key = tokens[0];
        let value = tokens[1];

        if (last === key) {
            console.log(value);
        }
    }
}

solve(['key value', 'key eulav', 'test tset', 'key']);
// solve(['3 test', '3 test1', '4 test2', '4 test3', '4 test5', '4']);
// solve(['3 bla', '3 alb', '2']);