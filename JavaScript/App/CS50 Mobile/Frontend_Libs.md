```javascript

// #JAVASCRIPT LIBRARIES

// HANDLEBAR
// NOTE: Template library like Jinja but client sidebar

//EXAMPLE 1
const template = Handlebars.compile("<li>{{ value }}</li>");
const content = template({'value': value});

//EXAMPLE 2
<script id="id", type="text/x-handlebar-template">
	
	//for loop
	{{#each values}}
		<img alt="{{this}}" title="{{this}}" src="img/{{this}}.png">
	{{/each}}
	
	total={{total}}
	
</script>

const template = Handlebars.compile(document.querySelector('#id').innerHTML);
const content = template({'values': [array], 'total': value});

//EXAMPLE 3
<script id='post' type=text/x-handlebar-template
	// raw is a Jinja syntax to skip the enclosed area	
	{% raw -%}
		{{content}}
	{%-endraw %}
</script>

```