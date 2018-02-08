const add = (a, b) => {
    return a + b;
}

console.log(add(5,10,30));

const user = {
    name : 'Anees',
    cities : ['Mumbai', 'Pune'],
    printPlacesLived() {
        
        const cityMessages = this.cities.map(city => `${this.name} has lived in ${city}`);

        return cityMessages;
    }
}

console.log(user.printPlacesLived());

// Challenge

const multiplier = {
    numbers : [1,2,3,4,5],
    multiplyBy : 10,
    multiply() {
        return this.numbers.map(n => n * this.multiplyBy);
    }
}

console.log(multiplier.multiply());


