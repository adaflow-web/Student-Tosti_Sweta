var car = {
    model : "A1X",
    brand : "Audi",
    year  : "2003",
    Type  : "Digital",
}

//console.log(car);

// accessing value
//console.log(car.brand);
//console.log(car["year"]);

// adding a key
car["color"] = "yellow";
//console.log(car);

car.madein = "China";
//console.log(car);

//Removing a key
car.madein = null;
console.log(car);

delete car.madein;
console.log(car);