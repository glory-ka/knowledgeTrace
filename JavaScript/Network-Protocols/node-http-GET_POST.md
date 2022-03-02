

**GET REQUEST WITH NODE HTTP**

##### __HTTP request using node built-in http module. It is a sort of alternative to using fetch or axios get method. However, axios get and node-fetch fetch are simpler to use.__

```javascript
const http  = require("http");
```
```javascript
// https://example.com/todos
const options = {
  hostname: 'example.com',
  port: 443,
  path: '/todos',
  method: 'GET'
}
```
```javascript
const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})
```
```javascript
req.on('error', error => {
  console.error(error)
})

req.end()
```


**POST REQUEST WITH NODE HTTP**

```javascript

const https = require('https')

const data = JSON.stringify({
  todo: 'Buy the milk'
})
```

```javascript
const options = {
  hostname: 'whatever.com',
  port: 443,
  path: '/todos',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}
```
```javascript
const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})
```
```javascript
req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()
```
