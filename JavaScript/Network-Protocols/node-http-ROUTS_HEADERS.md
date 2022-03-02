

**Built in Https syntax**
```javascript
/** content -Type , only use one of them*/
writeHead(200, {'content-type' : 'text/plain'	})
writeHead(200, {'content-type' : 'text/html'	})
writeHead(200, {'content-type' : 'text/csv'	})
writeHead(200, {'content-type' : 'application/json'	})
```

**csv or document type**
```javascript
setHeader("content-Type", "text/csv")
```

**Asks browser to download, create and name file**
```javascript
setHeader("content-Disposition", "attachment; filename=randomName.csv"); 
```


**Async Load file from file system into variable. Then send it to client/browser via http.**

```javascript
const fs = require('fs').promises;
```
```javascript
const requestListner = function(req, res) {
    fs.readFile(__dirname + /'index.html')
        .then(contents => {
            //writeHead(200, {'content-type' : 'text/html'})
            res.setHeader("content-Type", "text/html");
            res.writeHead(200);
            res.(contents);
    })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        })
}
```

**Create Routes with switch keyword**

```javascript
const books = JSON.stringify([...jsonObjects]);
const authors = JSON.stringify([...jsonObjects]);
```
```javascript
const requestListner = function(req, res) {

    res.setHeader("content-Type", "application/json");

    switch(req.url)
    {
        case '/books':
                res.writeHead(200);
                res.end(books);
                break;
        case '/authors':
                res.writeHead(200);
                res.end(authors);
                break;
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error: "Resource not Found"}));
    }
}
```
