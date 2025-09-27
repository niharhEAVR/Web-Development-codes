let descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter)


{
    //Example: enumerable
    const person = {
        name: "cooldude",
        age: "Infinity"
    };

    Object.defineProperty(person, 'phoneNumber', {
        value: '123-45-6789',
        enumerable: false, // This makes 'phoneNumber' non-enumerable
    });

    // Enumerating properties with for...in loop
    for (let [key, value] of Object.entries(person)) {
        console.log(`${key}: ${value}`); // Only 'name' and 'age' will be logged
    }

    // Checking with Object.keys()
    console.log(Object.keys(person));

    // but we can access non-enumerable property directly
    console.log(person.phoneNumber);

    console.log(Object.getOwnPropertyDescriptor(person, "phoneNumber"));
    console.log(Object.getOwnPropertyDescriptor(person, "name"));
    // .getOwnPropertyDescriptor takes two arguments one is the object name, and other one is for the object keys
}




{
    //Example: writable and configurable
    console.log("\n\n\n")
    const car = {}; //empty object

    // Defining a non-writable property
    Object.defineProperty(car, 'make', {
        value: 'Toyota',
        writable: false,      // The 'make' property cannot be changed
        configurable: true    // The 'make' property can be deleted or redefined
    });

    // Defining a non-configurable property
    Object.defineProperty(car, 'model', {
        value: 'Corolla',
        writable: true,
        configurable: false
    });

    console.log(car)
    console.log(car.make);
    console.log(car.model);

    console.log("\n")
    // Attempting to change the non-writable property 'make'
    car.make = 'Honda';
    console.log(car.make); // Output: 'Toyota' (no change due to writable: false)

    // Changing the writable property 'model'
    car.model = 'Camry';
    console.log(car.model); // Output: 'Camry' (change successful)

    // Attempting to delete both properties
    delete car.make;  // Successfully deleted because configurable: true
    delete car.model; // Will fail because configurable: false

    console.log(car);

}