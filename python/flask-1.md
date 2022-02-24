**FLASK FUNCTIONS**

**RUN THE SERVER**
```python-repl=
flask run
```


**GET A VALUE PASSED BY A USER IN A GET REQUEST** *[url/?varName=value]*
```python-repl=
request.args.get('variable-name')
```


 
**GET A VALUE PASSED BY THE USER IN A POST REQUEST**
>request.form.get("nameOFinputTag")

```html
 <form action="url" method=[get|post]>
```     
 
**CREATE AN URL FOR POST REQUEST**
```python
@app.route("/url", methods=["POST"])
```

**CREATE AN URL FOR GET REQUEST**
```python
@app.route("/url")
```

**CREATE AN URL THAT ACCEPT INTEGER**
```python
@app.route("/url/<int:value>")
```

**CREATE AN URL THAT ACCEPT ANY VALUE**
```pthon
@app.route("/url/<value1>/<value2>")
```

**CHECK FOR THE REQUEST METHOD**
```python
@app.route("/url", methods=["POST", "GET"])
def methodName ():
    if request.method == "GET":
    if request.method == "POST":
```


**ON HTML FILE, TO ACCESS A URL LOCATION
IN LOCAL static/ FILE GIVE THE URL ROUTE FOR index.js**
```htmlbars=
<script src="{{ url_for('static', filename='index.js') }}"></script>
```


**USE SESSSION TO SEPARATE USERS DATA**
[SOURCE: Youtube Video](https://www.youtube.com/watch?v=j5wysXqaIV8)

```python
from flask_session import Session
from flask import Flask, session

app = Flask(__name__)
Session(app)

if session.get("notes") is None:
    session["name"] = []    # creates and stores a variable "name" within the current session

session["name"] = userInfo;  # use this instead of list or local dictionary
```



 