```javascript

/**
 * JAVASCRIPT --> IMPERATIVE language
 * #REACT -JSX	--> DECLARATIVE language
 * #REACT IS MADE OF COMPONENTS THAT ARE REPRESENTED BY FUNCION. /
 * FUNCITONS OR COMPONENTS ARE RENDERED BY REACT-DOM AND TRANSLATED BY /
 * BABEL TO JAVASCRIPT AND HTML AND PLACED INTO THE DOM
 */


// JAVA SCRIPT SYNTAX

/** 
 * CREATE Object 
*/

const o = Object();

o.firstname = "name"
o.lastname = "lastname"
o.age = 12
o.isStudent = true

o.greet = function(){
	console.log('Hi!')
}
// ------------------------

const o1 = {}

o1.firstname = "name"
o1['lastname'] = 'lastname'

const key = 'isStudent'

o1[key] = true

o['greet'] = function() {
	console.log("Hi!")
}
// ------------------------

const o2 = {
	
	firstname: 'firstname',
	lastname: 'lastname',
	isStudent: true,
	greet: function() {
		console.log('Hi!')
	},
	address: {
		street: 'Main St',
		number: 123,
	},
}

// ------------------------

// COPY OBJECT

const objV = {
	a: 'val',
	b: 'other'
	obj: {
		key: 'key'
	}
}

// *** shallow copy using assign() method

/**
 * good for primitive type, not good for object.
 * objV contains an obj, hence will be copy by reference
 */
const objN = Object.assign({}, objV)  


// *** Deep Copy
function deepCopy (obj) 
{
	// checks if vals are objects
	// if so, deep copy that object
	// else return the value
	const keys = Object.keys(obj)
	
	const newObject = {}
	
	for (let i = 0; i< keys.length; i ++)
	{
		const key = keys[i]
		if (typeof obj[key] === 'object')
		{
			newObject[key] = deepCopy(obj[key])
		}
		else 
		{
			newObject[key] = obj[key]
		}
	}
	return newObject
}

// ARRAY

const arr = []

arr.push('value')  	// adds value to an array
arr.__proto__		// shows functions and attribute of Array.prototype
arr.__proto__.__proto__	// go further down the inheritance tree and show info about Object.prototype

// PROTOTYPE INHERITANCE

/** Javascript by default wrappes primitive type, but they are not descendent of Number prototype **/

42.__proto__	// returns false

const num = 4
num.__proto__ 	// return info about its wrapper class
num.toString() 	// '4'
num instanceof Number // false

/** 
 * Although not recommanded we can change a prototype.
 * It would affect all descendent, because prototype are shared by all descendents.
 */
Number.__proto__.toString = function () { return "100"} // This changes for all descendent objects
num.toString() // '100' 

// SCOPE

// Scope type: Lexical scoping (var) and block scoping (let, const)
// READ ABOUT IT ON YOUR OWN time

// ############ NICE FUNCTION THAT BEHAVE LIKE A THREAD.SLEEP() FUNCTION ##################
function hang(seconds = 5) {
  const doneAt = Date.now() + seconds * 1000
  while(Date.now() < doneAt) {}
}


// Windows is global object in browser. It is called globall in Node

<li>
	<input type='checkbox' />
	<button> delete </button>	
	<span> text </span>
</li>


```