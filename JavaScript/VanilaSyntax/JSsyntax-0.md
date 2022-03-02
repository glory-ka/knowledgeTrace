

#### __NOT ALL THE CODES ARE EXCLUSIVELY FOR REACT BUT THEY MOST OFTEN USED WHEN BUILDING WEB-APPLICATION NOT JUST WEBPAGE__


#### __SPREAD OPERATION__

**copy the content of a list**
```javascript
list1 = [1, 2, 3, 4, 5];
list2 = [...list1, 6];  //[1, 2, 3, 4, 5, 6]

dict1 = {'key1': value, 'key2': value}
dict2 = {...dict1, {'key3': value}} 	//{'key1': value, 'key2': value, 'key3': value}
```

**remove an elements in a list**
```javascript
list1 = [1, 2, 3, 4, 5];
list1.splice(3, 1);   // [1, 2, 3, 5] from index 3 <4> remove 1 elememts <4>
```

#### __Use LocalStorage to save and retrieve count value__


**This get executed before the load process**
```javascript
componentDidMount() //REACT FUNCTION GUARANTED TO RUN FIRST
{
	const count = localStorage.getItem("count");
	if (count !== null)
	{
		this.setState({
			count: parseInt(count)
		});
	}
}
```
**EventListeners activates before the page is closed (unloaded).**
```javascript
window.addEventListener("beforeunload", () => {
	localStorage.setItem("count", this.state.count);
});

```
