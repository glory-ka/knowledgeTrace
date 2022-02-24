**INSTALL VIRTUAL ENVIRONMENT**
```shell=
pip install virtualenv
python -m venv [name]
```


**SET UP ENV VARIABLE TO AUTO UPDATE SERVER**
```shell=
export FLASK_ENV=development
export FLASK_APP=hollo.py
```

**SQLITE3 IN CS50 IDE**

```shell
sqlite3 path/file.db

>>> .schema         # show the tables sql commands 
>>> .tables         # show all the tables name
>>> .header on      # add a hearder to the each column
>>> .mode column    # improve the view of the columns
>>> .timer on       # turn on the CPU timer measurement
>>> .show           # show the settings
>>> .quite
```
```python
sqlite3 file.db < command.sql # apply pre-written sql commands to file.db
```

