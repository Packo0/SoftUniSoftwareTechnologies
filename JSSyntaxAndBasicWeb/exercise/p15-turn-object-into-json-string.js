function solve (input) {
    let obj = {};

    for (let ob of input) {
        let tokens = ob.split(' -> ');
        let key = tokens[0];
        let value = tokens[1];
        if(key === 'age') {
            value = Number(value);
        } else if (key === 'grade') {
            value = Number(value);            
        }

        obj[key] = value;
    }

    console.log(JSON.stringify(obj));
}

solve([
    'name -> Angel',
    'surname -> Georgiev',
    'age -> 20',
    'grade -> 6.00',
    'date -> 23/05/1995',
    'town -> Sofia',
]);