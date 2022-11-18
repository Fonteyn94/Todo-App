

let names = ['Ivan', 'Anna', "Lucas", 'Albert'];

let shortNames = names.filter((name) => {
    return name.length < 5
});

console.log(shortNames);

