
**IMPORTANT QUESTIONS**

>CAN ONLY FORM SEND POST REQUEST ? -> don't think so, but not sure
	[FLASK POST SYNTAX: request.form.get(['id'| 'name'| 'class'])]

---
#### __JAVASCRIPT SELECTORS AND FUNCTIONS__
```javascript
document.getElementById('elememt_id');
document.querySelector('<reference>');

const tag = document.createElement('html_tag_name');
tag.innerHTML = data;
tag.className = 'name';
```

**add child to a parent**
```javascript
document.querySelector('html_container_tag').append(tag); 
```
```javascript
.disable = bolean [true|false]
.append(html_tag)
.innerHTML
```
---
#### __JAVASCRIPT EVENTLISTENER__

**If we put () after function name, the call happens right away**
**Note:** only use () in html tag attribute: **<button onclick="function()">butn</button>**

```javascript
document.querySelector('button').onclick = function_name; 
```

**'\<event\>' : onclick, onkeyup, onload, onkeydown, onblur, onmouseover, ...**
**document.addEventListener('\<event\>', [function_name | anonymous_function | arrow_function])**
    
```javascript
document.querySelector('select').onChange = () => {
	/* this --> <option/> within <select> that received the event */
	document.querySelector('<ref>').style.color = this.dataset.color; 
}
```
...   
**Not really an event listern**
```javascript
setInterval(time_millisecond, function_name) 
```
---    
#### __BROWSER LOCAL STORAGE__

```javascript
localStorage.setItem('variable_name', initial_value)
localStorage.getItem('variable_name')
```
---    
#### __JAVASCRIPT AJAX SYNTAX__
##### **AJAX : Asynchronous JavaScript And XML**
    
##### **RECEIVING DATA VIA POST REQUEST**

###### **STEP 1: CREATE A REQUEST OBJECT AND INITIALIZE CONNECTION TYPE**

```javascript
const request = new XMLHttpRequest();
request.open('POST', '/url')
```
    
###### **STEP 2: LISTEN TO ONLOAD EVENT -> ONLY HAPPENS AFTER DATA IS SENT**
    
```javascript
request.onload = () =>{
	
	const data = JSON.parse(request.responseText);
};
```
    
###### **STEP 3: CREATE A FORM OBJECT AND SEND THE POST REQUEST**

```javascript
const data = new FormData();
```

**ON SERVER SIDE** 
    
```javascript
request.form.get('key')
data.append('key', value);

request.send(data);
```
    
**Don't reload the page on form submission**
```javascript    
return false;
```
    
##### **REQUESTING DATA VIA GET REQUEST**
```javascript
const request = XMLHttpRequest('GET', '/url');

request.onload = () => {
	const response = request.responseText;
};
request.send();
```
##### **AJAX WITH FETCH**

```javascript
fetch('/url')
.then('response => response.json()' or 'other things')
.then('data => {	console.log(data);' or 'other things'}
);
```
*Returns Request object*
[Mozilla Developer](https://developer.mozilla.org/en-US/docs/Web/API/Request)
```javascript    
fetch('/url')
```
[Mozilla Developer](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request)
```javascript
fetch('/url') --> fetch(Request('/url'))
```
**In addtion to the request object as parameter, fetch can also take an initializer json Object**
**fetch can also send a POST request.** [Mozilla Developer](https://stackoverflow.com/questions/29775797/fetch-post-json-data)

*The step is fairly similar to the default GET request, the output of console.log(data) show how POST request is wrapped.* [Mozilla Developer](https://developer.mozilla.org/en-US/docs/Web/API/Request/json)

---    
#### __FOREACH, FOR LOOP AND MAP EXAMPLE__
```javascript
/* [value, value, value] */
const httpTags = document.querySelectorAll(['tag' | 'class_name']); 
```

**forEach**
```javascript
/* access each element but does not return */
httpTags.forEach((argument) => {});  							
```
    
**ForOf**
```javascript
/* access each element but does not return */
for (httpTag of httpTags){ /*do something with each httpTag */ } 
```
    
**MAP**
```javascript
/* returns new object [newValue, newValue, newValue] */
const newHttpTags = httpTags.map(httpTag => {}); 				
```
---    
#### __WINDOWS FUNCTIONS__

##### **EXECUTE A FUNCTION AT A MILLISECOND INTERVAL**
```javascript
window.setInterval(function_name, number)
```

##### **POP URL STATE EVENT**
```javascript
window.onpopstate = e =>{} // e is the event associated with onpopstate
```

##### **WINDOW SCROLL EVENT**
```javascript
window.onscroll = () =>{};
```

##### **WINDOW DIMENSIONS AND DOCUMENTS (FOR GOOD MEASURE)**
```javascript
window.innerWidth
window.innerHeight
window.scrollY
document.body.offsetHeight
```
---
#### __JSON DATA ACCESS METHOD AND CONVERSION__
```javascript
let json = {
		data1:"data1"
		data2:"data2"
		data3:"data3"
};
console.log(json.data1, json.data2, json.data3);
console.log(json['data1'], json['data2'], json['data3'])

const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';

/* {name:"John", birth:"1986-12-14", city:"New York"} */
let json2 = JSON.parse(text) 

/* '{"name":"John", "birth":"1986-12-14", "city":"New York"}' */
let json3 = JSON.stringify(json2) 
```
---
#### __HTML5 HISTORY API__

##### **PUSH URL STATE**
```javascript
document.title = 'title';
history.pushState('associated_data', 'title', 'url');
```

##### **PUSH AND POP URL STATE**
```javascript
history.pushState({title: "tile", text: "raw_data"}, 'title', 'url')

window.onpopstate = e =>{
	const data = e.state;
	document.title = data.title;
	document.querySelector('<ref>').innerHTML = data.text;
}
```
---

#### __Template Literal: String manupilation__
```javascript
const var1 = value;
let string1 = `This is a string ${value} that has a value inserted`;
```
---

#### __Console object methods__
```javascript
/**
Some console functions are:

.log()
.assert()
.count()
.table()
.trace()
.time()

You can also use string substitution for output, just like in c
Here are the sustitution strings:

%o or %O : object
%i or %d : integer
%s       : string
%f       : float-point
%c       : apply css style to  output
**/

console.log("This is an %s", 'example');
console.log("Add %d + %d", 2, 5);
console.log("Apply %cCSS style to this part", "color: blue; background-color: blue; padding: 2px");

console.table(['car', 'truck', 'Plane']);
```
---
#### __JAVA SCRIPT BUILTIN LIBRARIES__

##### **GENERATE RANDOM NUMBERS**
```javascript
let random = Math.floor(Math.random() * n)
```
```
git htmlCss flask sql ormsApis javaScript frontEnds django testingCiCd Security
```
