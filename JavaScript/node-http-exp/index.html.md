```html
<!DOCTYPE htlm>
```
...

```html
<html>
    <head>
```
...

```html
        <script type="module">
            import {io} as io from "./node_modules/socket.io/client-dist/socket.io.esm.js";
            io.connect('/');
        </script>
```    
```html
    <!--
        <script type="module">
            import {io} from "https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.4.1/socket.io.min.js";
            io.connect('/');
        </script>
     -->
```
```html
    <!--
        <script src='/socket.io/socket.io.js'></script>
        <script src='script.js'></script>
     -->
```
...

```html
    </head>
</html>
```
