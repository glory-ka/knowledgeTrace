```javascript

/**
 * JAVASCRIPT --> IMPERATIVE language
 * #REACT -JSX	--> DECLARATIVE language
 * #REACT IS MADE OF COMPONENTS THAT ARE REPRESENTED BY FUNCION. /
 * FUNCITONS OR COMPONENTS ARE RENDERED BY REACT-DOM AND TRANSLATED BY /
 * BABEL TO JAVASCRIPT AND HTML AND PLACED INTO THE DOM
 */
```

#### __JAVA SCRIPT SYNTAX__

**CREATE Object**
```javascript
const o = Object();

o.firstname = "name"
o.lastname = "lastname"
o.age = 12
o.isStudent = true

o.greet = function(){
	console.log('Hi!')
}
```
```javascript
const o1 = {}

o1.firstname = "name"
o1['lastname'] = 'lastname'

const key = 'isStudent'

o1[key] = true

o['greet'] = function() {
	console.log("Hi!")
}
```
```javascript
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

```

**COPY OBJECT**

```javascript
const objV = {
	a: 'val',
	b: 'other'
	obj: {
		key: 'key'
	}
}
```

#### **Shallow copy using assign() method**
##### **Works fine with primitive type, not good for object.**
##### **objV contains an obj, hence will be copy by reference**

```javascript
const objN = Object.assign({}, objV)  
```

**Deep Copy**
```javascript
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
```

### **ARRAY**
```javascript
const arr = []

/* adds value to an array */
arr.push('value')

/* shows functions and attribute of Array.prototype */
arr.__proto__

/* go further down the inheritance tree and show info about Object.prototype */
arr.__proto__.__proto__	
```

### **PROTOTYPE INHERITANCE**

**Javascript by default wrappes primitive type, but they are not descendent of Number prototype**

```javascript
/* returns false */
42.__proto__	

const num = 4

/* return info about its wrapper class */
num.__proto__ 

/* '4' */
num.toString()

/* false */
num instanceof Number 
```

**Although not recommanded we can change a prototype.**
**It would affect all descendent, because prototype are shared by all descendents.**

```javascript
/* This changes for all descendent objects */
Number.__proto__.toString = function () { return "100"} 

/* '100' */
num.toString()  
```

### **SCOPE**

#### **Scope type: Lexical scoping (var) and block scoping (let, const).** 
##### **READ ABOUT IT ON YOUR OWN time**

**NICE FUNCTION THAT BEHAVE LIKE A THREAD.SLEEP() FUNCTION**
```javascript
function hang(seconds = 5) {
  const doneAt = Date.now() + seconds * 1000
  while(Date.now() < doneAt) {}
}
```

**Windows is global object in browser. It is called globall in Node**
```javascript
<li>
	<input type='checkbox' />
	<button> delete </button>	
	<span> text </span>
</li>
```


