function solve(input) {
    let obj = {};
    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' ');

        if (tokens[1] !== undefined) {
            obj[tokens[0]] = tokens[1];
        } else {
            if (tokens[0] in obj) {
                console.log(obj[tokens[0]]);
            } else {
                console.log('None');
            }
        }
    }
}

solve(['key value', 'key eulav', 'test tset', 'key']);
solve(['3 test', '3 test1', '4 test2', '4 test3', '4 test5', '4']);
solve(['3 bla', '3 alb', '2']);