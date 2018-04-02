function solve(text) {
    let words = text.join(", ").toString().split(/\W+/);

    let result = words
        .filter(w => w.length > 0)
        .filter(str => str == str.toUpperCase());

    console.log(result.join(", "));
}

solve(['PHP, Java and HTML']);