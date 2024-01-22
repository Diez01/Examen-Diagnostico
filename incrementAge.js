function incrementAge(edad) {
    if (typeof edad === 'number') {
      return edad + 5;
    } else {
    }
  }
var edad1 = 2;
var edad2 = incrementAge(edad1);
console.log('Nueva edad:', edad2);