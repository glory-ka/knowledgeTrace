**ON CS50 IDE TO ALLOW THE SERVER TO BE ACCESS VIA URL**

**PERMANENT SOLUTION --> settings.py**
ALLOWED_HOSTS = ['ide-1258688eeedc440eaae4c99c914ba593-8080.cs50.ws', '0.0.0.0']

**ONE TIME SOLUTION**
python manage.py runserver 0.0.0.0:8080


**DJANGO**
python manage.py startserver
python manage.py makemigration
python manage.py migrate
python manage.py createsuperuser
python manage.py sqlmigrate [APP-Name] [Migration-Number]

# ..

python manage.py shell
```python
>>> from [APP-NAME].models import [MODEL-NAME]
>>> from django.contrib.auth.models import User
```
# ..
```python
>>> [MODEL-NAME].objects.all()
>>> [MODEL-NAME].objects.first()
>>> [MODEL-NAME].objects.filter(<argument>)
>>> [MODEL-NAME].objects.get(<argument>) # throws error if the 
```
**model has none or more than one objects**


# ..

``` python
# redirect to a url
from django.http import HttpResponseRedirect

#take the name of a path and return a url
from django.urls import reverse 

#args takes a tuple
return HttpResponseRedirect(reverse("path_name, as mentioned urls.py", args=("if any",))  

# flights : field of Passenger class
passenger.flights.add(flight) 
```

