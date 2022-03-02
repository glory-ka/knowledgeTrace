[source](https://github.com/fireship-io/tdd-basics-project)
#### __Asynch (macro vs micro tasks) and Synch code__

```javascript
console.log(_ => console.log("Synchronous 1"));

setTimeout(_ => console.log("Timeout 2"), 0);

Promise.resolve().then(_ => console.log("Promise 3"));

console.log("Synchronous 4")
```

#### __Promise__

```javascript
import fetch from 'node-fetch';
```

**Part 1**
```javascript
const promise  = fetch ('url');

promise
	.then(res => res.json())
	.then(user => console.log(user.title));

console.log("Synchronous");
```

**Part 2 : Error Handling --> better to put it last**
```javascript
promise
	.then(res => res.json())
	.then (user => {
			throw new Error('uh oh');
			return user; //never reached. NOTE: ()=> also returns
	 })
	.then(user => console.log(user.title))
	.catch(err => console.error(err));

console.log("Synchronous");
```

**Part 3**
```javascript

const tick = Date.now();
const log = (v) => console.log(`${v} \n Ellapsed: ${Date.now() - tick}`)

const codeBlocker = () => {
	
		let i = 0;
		while (i < 1000000000){ i++;}
		return 'Billion Loops done';
}

log('Synchronous 1');

log(codeBlocker());

log('Synchronous 2')
```


**Part 4 : Wrong use of promise**
```javascript

const codeBlocker = () => {
	
		//let i = 0;
		//while (i < 1000000000){ i++;}
		//return 'Billion Loops done';

		const promise = new Promise((resolve, reject) => {

				let i = 0;
				while (i < 1000000000){ i++;}

				resolve( 'Billion Loops done');
		});
}

log('Synchronous 1');

codeBlocker().then(log);

log('Synchronous 2')

```

**Part 5 : Correct usage**
**Goal : run code with delay, still on the main thread**

```javascript

const codeBlocker = () => {
	
		return Promise.resolve().then(v => { 

				let i = 0;
				while (i < 1000000000){ i++;}
				return 'Billion Loops done';
		});
}

log('Synchronous 1');

codeBlocker().then(log);

log('Synchronous 2')
```

**Part 6 : Async**
```javascript
/**
 *	Async sets up a context to use Await
 *  Await much like .then() pauses the execution
 *  until promise is resolve (e.g value is assigned to variable).
 *  Note: This is possible because both promises don't have side effect,
 *  aka do not interact with one another.
 */
```
```javascript
//const getFruit = (name) => {
//		const fruits = 
//		{
//				pineapple: 'pineapple',
//				peach: 'peach',
//				strawberry: 'strawberry'
//		}
//
//		await delay(1000);
//
//		return Promise.resolve(fruits[name]);
//}
```

**The commented code above is similar to this one**
```javascript
const getFruit = async (name) => {
		const fruits = 
		{
				pineapple: 'pineapple',
				peach: 'peach',
				strawberry: 'strawberry'
		}

		await delay(1000);

		return fruits[name]; 
}

getFuite('peach').then(console.log)
```

**Part 7 : Await -> Good but not efficient**
**Here we wait twice.**
```javascript
const makeSmoothie = {

		const a = await getFruit('Pineapple');
		const b = await getFruit('Strawberry');
		
		return [a, b];
}

makeSmoothie().then(log); // log function defined up top
```

**Part 8 : Await -> Efficient**
Here we get both promises and resolve them at once.
```javascript

const makeSmoothie = {

		const a = getFruit('Pineapple');
		const b = getFruit('Strawberry');
		
		const smootie = Promise.all([a, b]);
		
		//return Promise.all([a, b]); 
		return smootie;
}

makeSmoothie().then(log); // log function defined up top
```

**Part 9 : Error Handling -> {Return: continue, Throw: stop}**
```javascript
const badSmootie = {
	try {

			const a = getFruit('Pineapple');
			const b = getFruit('Strawberry');

			const smootie = Promise.all([a, b]);

			throw 'broken'; // go to -> catch {Return: continue, Throw: stop}

			return smootie; 
	} 
	catch (err) {
			console.log(err);

			//return 'Go to next then statement if exist';

			throw 'Stop block';
	}
}
```

**Promise Hell**
```javascript

function promiseHell {
	let userID;
	let postID;
	let db;

	db.then(u => {
			return db.user().then((v) => v.json())
	})
	.then (u => {
			userID = u.id;

			return db.post(userID).then((v) => v.json())
	})
	.then ( p => {
			postID = p.id;

			return db.comments(postID).then((v) => v.json())
	});
}
```


**RUN CONCURRENTLY**
**NOTE:** might not be the behavior you expect
```javascript

const fruits = ['peach', 'pineapple', 'strawberry'];
```

**ARRAY : MAP FUNCTION**

**No pausing code, all promises would run concurrently**

```javascript
const smootie = fruits.map( async v => {
		const fruit = await getFruit(v);
		log(fruit); // log function defined up top
		return fruit;
}
```

**ARRAY : MAP FUNCTION AND FOR LOOP**
```javascript

// return promises
const smoothie = fruits.map(v => getFruit(v));

const fruitLoop = async () => {

	// wait until all promises are resolved, run concurrently.
	// That is because we only wait once. 
	for await (const fruit of smootie)
	{
			//code goes here
	}
}
```


**RUN IN CHAIN**
Run one promises after the other, wait until promise resolves

```javascript
const fruitLoop = async () => {
	for (const f of fruits)
	{
			const fruit = await getFruit(f);
			log(fruit); // log function defined up top
	}
}
```
