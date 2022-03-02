### __JAVASCRIPT LIBRARIES__

### __HANDLEBAR__

**NOTE: Template library like Jinja but client sidebar**

#### __EXAMPLE 1__
```javascript
const template = Handlebars.compile("<li>{{ value }}</li>");
const content = template({'value': value});

```

#### __EXAMPLE 2__
```javascript
<script id="id", type="text/x-handlebar-template">
	
	//for loop
	{{#each values}}
		<img alt="{{this}}" title="{{this}}" src="img/{{this}}.png">
	{{/each}}
	
	total={{total}}
	
</script>

const template = Handlebars.compile(document.querySelector('#id').innerHTML);
const content = template({'values': [array], 'total': value});
```

#### __EXAMPLE 3__
```javascript
<script id='post' type=text/x-handlebar-template
	// raw is a Jinja syntax to skip the enclosed area	
	{% raw -%}
		{{content}}
	{%-endraw %}
</script>
```
