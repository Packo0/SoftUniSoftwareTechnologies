function solve(input) {
    let num = Number(input[0]), result = '';

    for (let i = 1; i <= num; i++) {
        if (isSymmetric(i.toString())) {
            result += i + ' ';
        }
    }

    console.log(result);

    function isSymmetric(str) {
        for (let i = 0; i < str.length / 2; i++) {
            if (str[i] != str[str.length - i - 1]) {
                return false;
            } 
        }    

        return true;
    }
}

solve(['100']);
// solve(['750']);
