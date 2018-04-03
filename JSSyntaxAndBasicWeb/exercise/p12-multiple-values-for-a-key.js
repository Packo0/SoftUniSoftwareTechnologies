function solve(input) {
    let key = input.pop();
    let isMatch = false;
    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' ');

        if (tokens[0] == key) {
            console.log(tokens[1]);
            isMatch = true;
        }
    }

    if (!isMatch) {
        console.log('None');
    }
}

solve(['key value', 'key eulav', 'test tset', 'key']);
solve(['3 test', '3 test1', '4 test2', '4 test3', '4 test5', '4']);
solve(['3 bla', '3 alb', '2']);