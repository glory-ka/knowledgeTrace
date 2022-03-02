```javascript

/*
	**** IMPORTANT QUESTIONS ****
	CAN ONLY FORM SEND POST REQUEST ? -> don't think so, but not sure
	[FLASK POST SYNTAX: request.form.get(['id'| 'name'| 'class'])]
*/

// ********************************************************
//				JAVASCRIPT SELECTORS AND FUNCTIONS
// ********************************************************

document.getElementById('elememt_id');
document.querySelector('<reference>');

const tag = document.createElement('html_tag_name');
tag.innerHTML = data;
tag.className = 'name';

//add child to a parent
document.querySelector('html_container_tag').append(tag); 

//------------------------------------------------------------
.disable = bolean [true|false]
.append(html_tag)
.innerHTML

// ********************************************************
//				JAVASCRIPT EVENTLISTENER
// ********************************************************

/** 
 * if we put () after function name, the call happens right away
 * Note only use () in html tag attribute: <button onclick="function()">butn</button>
 */
document.querySelector('button').onclick = function_name; 

//'<event>' : onclick, onkeyup, onload, onkeydown, onblur, onmouseover, ...
document.addEventListener('<event>', [function_name | anonymous_function | arrow_function])

document.querySelector('select').onChange = () => {
	//this --> <option/> within <select> that received the event 
	document.querySelector('<ref>').style.color = this.dataset.color; 
}

// not really an event listern 
setInterval(time_millisecond, function_name) 

// ********************************************************
//				BROWSER LOCAL STORAGE
// ********************************************************

localStorage.setItem('variable_name', initial_value)
localStorage.getItem('variable_name')

// ********************************************************
//					JAVASCRIPT AJAX SYNTAX
//				AJAX : Asynchronous JavaScript And XML
// ********************************************************

// ********* RECEIVING DATA VIA POST REQUEST ************

// STEP 1: CREATE A REQUEST OBJECT AND INITIALIZE CONNECTION TYPE
const request = new XMLHttpRequest();
request.open('POST', '/url')

// STEP 2: LISTEN TO ONLOAD EVENT -> ONLY HAPPENS AFTER DATA IS SENT
request.onload = () =>{
	
	const data = JSON.parse(request.responseText);
};

// STEP 3: CREATE A FORM OBJECT AND SEND THE POST REQUEST
const data = new FormData();

// ON SERVER SIDE: request.form.get('key')
data.append('key', value);

request.send(data);
//-------------------------------------------------------

return false; // don't reload the page on form submission

// REQUESTING DATA VIA GET REQUEST
const request = XMLHttpRequest('GET', '/url');

request.onload = () => {
	const response = request.responseText;
};
request.send();

//######################## AJAX WITH FETCH ########################
fetch('/url')
.then('response => response.json()' or 'other things')
.then('data => {	console.log(data);' or 'other things'}
);

/**
 * fetch('/url') returns Request object			: https://developer.mozilla.org/en-US/docs/Web/API/Request
 * fetch('/url') --> fetch(Request('/url')) 	: https://developer.mozilla.org/en-US/docs/Web/API/Request/Request
 * in addtion to the request object as parameter, fetch can also take an initializer json Object
 * fetch can also send a POST request			: https://stackoverflow.com/questions/29775797/fetch-post-json-data
 * the step is fairly similar to the default GET request, the output of console.log(data) show how POST request is wrapped.   	
 * : https://developer.mozilla.org/en-US/docs/Web/API/Request/json
 */

// ********************************************************
//				FOREACH, FOR LOOP AND MAP EXAMPLE
// ********************************************************

const httpTags = document.querySelectorAll(['tag' | 'class_name']); // [value, value, value]

// forEach
httpTags.forEach((argument) => {});  							// access each element but does not return

// ForOf
for (httpTag of httpTags){ /*do something with each httpTag */ } // access each element but does not return

// MAP
const newHttpTags = httpTags.map(httpTag => {}); 				// returns new object [newValue, newValue, newValue]

// ********************************************************
//			WINDOWS FUNCTIONS
// ********************************************************

//EXECUTE A FUNCTION AT A MILLISECOND INTERVAL
window.setInterval(function_name, number)

//POP URL STATE EVENT
window.onpopstate = e =>{} // e is the event associated with onpopstate

//WINDOW SCROLL EVENT
window.onscroll = () =>{};

//WINDOW DIMENSIONS AND DOCUMENTS (FOR GOOD MEASURE) 
window.innerWidth
window.innerHeight
window.scrollY
document.body.offsetHeight

// ********************************************************
//			JSON DATA ACCESS METHOD AND CONVERSION
// ********************************************************

let json = {
		data1:"data1"
		data2:"data2"
		data3:"data3"
};
console.log(json.data1, json.data2, json.data3);
console.log(json['data1'], json['data2'], json['data3'])

const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';

let json2 = JSON.parse(text) // {name:"John", birth:"1986-12-14", city:"New York"}
let json3 = JSON.stringify(json2) // '{"name":"John", "birth":"1986-12-14", "city":"New York"}'

// ********************************************************
//						HTML5 HISTORY API
// ********************************************************

//PUSH URL STATE
document.title = 'title';
history.pushState('associated_data', 'title', 'url');

//PUSH AND POP URL STATE
history.pushState({title: "tile", text: "raw_data"}, 'title', 'url')

window.onpopstate = e =>{
	const data = e.state;
	document.title = data.title;
	document.querySelector('<ref>').innerHTML = data.text;
}

// ********************************************************
//				Template Literal: String manupilation
// ********************************************************
const var1 = value;
let string1 = `This is a string ${value} that has a value inserted`;

// ********************************************************
//						JAVA SCRIPT BUILTIN LIBRARIES
// ********************************************************

// GENERATE RANDOM NUMBERS
let random = Math.floor(Math.random() * n)


git htmlCss flask sql ormsApis javaScript frontEnds django testingCiCd Security

```