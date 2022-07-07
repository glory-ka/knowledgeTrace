BOOTSTRAP
---------
```html
<div class="container-fluid">
<div class="row">
<div class="col-xs-*">
<div class="col-md-*">
<div class="well">
```
SASS
----
```scss
/* Declare variable with $ then the variable name */
$red: #8934

h1{
   color: $red;
}
```
```scss
/* Extend rules */
.button {
    color: blue;
    padding: 12px;
}

push-button {
 @extend .button;
 margin: 2px;
}
```
```scss
/* Mixins */
@mixin link-style {
    text-decoration: none;
    color: blue;
}

@mixin generic-border($px, $style, $color) {
    border: $px $style $color;
}

@mixin default-border($px:1px, $style:solid, $color:black){
    border: $px $style $color;
}

.border1 {
    @include default-border();
}

.border2 {
    @include generic-border( 2px, dashed, red);
}

.link {
    @include link-style;
    background-color: orange;
}

```
```scss
/* Nested css rules */
.list-items {
  a {
    color: blue;
    &:hover {
      color: lightblue;
    }
  }
}
```
```scss
/* for through loop (inclusive) */
@for $i from 1 through 4 {
  .item-#{$i} { width: 20px * $i; }
}

/* for to loop (exclusive) */
@for $i from 1 through 4 {
  .item-#{$i} { width: 20px * $i; }
}

/* each loop*/
$menu-items: home about services contact;

@each $item in $menu-items {
  .photo-#{$item} {
    background: url('images/#{$item}.jpg');
  }
}

/* while loop */
$i: 6;
@while $i > 0 {
  .item-#{$i} { width: 2em * $i; }
  $i: $i - 2;
}
```

JQUERY
------
```javascript
$("#classID").addClass("className")
$("#classID").removeClass("className")
$("#classID").appendTo("#containerID")
$("#classID").clone().appendTo("#containerID")
$("#classID").css("property", "value");
$("#classID").prop("disabled", true); //html properties
$("#classID").html("<em>text<em>");
$("#classID").remove();
$("#classID").text("enter text");
$("#classID").parent().css("property", "value");
$("#classID").children().css("property", "value");
```
React
-----
```javacript
ComponentName.defaultProps = {name: value}
MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }
import PropTypes from 'prop-types' // As of React v15.5.0

button: onClick
form: onSubmit -> <button type="submit">
input/texterea: onChange
/*
Note: if statement doesnt work in JSX -> {expression}, use either AND/OR
operator ( &&, || ) or ternary operator.
*/
```

Redux
-----
```javascript
const reducer1 = ()=> {...}
const reducer2 = ()=> {...}
const rootReducer = Redux.combineReducer({
    stateEntry1: reducer1,
    stateEntry2: reducer2,
});

const store = Redux.createStore(rootReducer);

const actionCreator = (data)=> ({action:type, payload:{data: data}})
store.dispatch(actionCreator(data));


const Provider = ReactRedux.Provider();
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational)

class AppWrapper extends React.Component {
   render(){
    return(
      <Provider store={store} >
        <Container />
      <Provider>
    )
   }
}
```


