// PRIMITIVE TYPES //

let age = 19;
console.log(age, typeof(age));
console.log(age.toString(), typeof(age));

/*
In this example we are using toString() method, it mean js created a temporary wrapper object
to perform the task.
*/



// REFERENCE TYPES OR OBJECTS //

const arr = [1, 2, 3, 4];

// accessing property
const l = arr.length;
console.log(l);

// using method - map(), filter()
const evenNum = arr.filter(n => n % 2 === 0);
console.log(evenNum);


/*
whichever have their own properties and methods associated with them can be called as object.

While primitive data types like numbers, strings, booleans, null, and undefined are not technically 
objects in the traditional sense, JavaScript provides a mechanism to wrap them in object-like wrappers. 
*/