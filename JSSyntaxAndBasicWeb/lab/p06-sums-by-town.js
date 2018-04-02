function solve (input) {
    let objects = input.map(JSON.parse);
    towns = {};
    for(let obj of objects) {
        if(towns[obj.town] === undefined) {
            towns[obj.town] = 0;
        }

        towns[obj.town] += obj.income;
    }

    
    let names = Object.keys(towns).sort();

    for (let town of names) {
        console.log(`${town} -> ${towns[town]}`);
    }
}

solve([
    '{"town":"Sofia","income":200}',
    '{"town":"Varna","income":120}',
    '{"town":"Varna","income":70}',
    '{"town":"Pleven","income":60}'
]);