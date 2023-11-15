/*Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs,
such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly.*/

// Interface for the car object
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow any additional properties
  }
  
  // Function to create a car object
  function createCar(manufacturer: string, model: string, ...options: [string, any][]): Car {
    const car: Car = {
      manufacturer,
      model,
    };
  
    // Process additional options
    options.forEach(([key, value]) => {
      car[key] = value;
    });
  
    return car;
  }
  
  // Call the function with required information and additional properties
  const myCar = createCar('Toyota', 'Camry', ['color', 'Blue'], ['year', 2022]);
  
  // Print the returned car object
  console.log(myCar);
  