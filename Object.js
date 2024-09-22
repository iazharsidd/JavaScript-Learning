let arr = ["Azhar",21,71.9,true];
let info = {
    name: "Azhar",
    age: 23,
    percentage: 71.9,
    married: false
};
console.log(info);
let car = {
    price: 2000000,
    colour: "red",
    'manufactured by': "BMW"
};
console.log(car.manufacturer);
console.log(car.price);
console.log(car.colour);
console.log(car["manufactured by"],car.price,car["colour"]);
info.age = 24;
console.log(info['age']);
info['age'] = 25;
console.log(info.age);
for (const key in car) {
    if (Object.prototype.hasOwnProperty.call(car, key)) {
        console.log(key,car[key]);
        
    }
}


