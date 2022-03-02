```css
@keyframes grow {
	from{
		font-size: 20px;
	}
	to {
		font-size: 100px;
	}
}

h1 {
	animation-name: grow;
	animation-duration: 2s;
	animation-fill-mode: forwards;
}

```
```css
@keyframes move {
	from{
		left: 0%;
	}
	to {
		left: 50px;
	}
}

hi {
	position:relative;
	animation-name: move;
	animation-duration: 3s;
	animation-fill-mode: forwards;
}

```

```css
@keyframes move {
	0% {
		left: 0%;
	}
	50% {
		left: 50px;
	}
	100% {
		left: 0%;
	}
}

h1 {
	position:relative;
	animation-name: move;
	animation-duration: 3s;
	animation-fill-mode: forwards;
}

```
```css
@keyframes moveInf {
	0% {
		left: 0%;
	}
	50% {
		left: 50px;
	}
	100% {
		left: 0%;
	}
}

h1 {
	position: relative;
	animation-name: moveInf;
	animation-duration: 3s;
	animation-fill-mode: forwards;
	animation-iteration-count: infinite;
}

```

### __Start and stop animation on click__

```javascript

h1.style.animationPlayState = 'paused';

document.querySelector('button').onclick = () =>{
	if (h1.style.animationPlayState === 'paused')
		h1.style.animationPlayState = 'running';
	else
		h1.style.animationPlayState = 'paused'
}	
```


