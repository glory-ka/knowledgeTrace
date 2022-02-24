**PYTHON SYNTAX**

###### AN INDENTATION LEVEL DOES NOT RESTRICT THE SCOPE OF A VARIABLE IN PYTHON !!
###### A VARIABLE DECLARED IN A LOOP IS ACCESSIBLE OUTSIDE THE LOOP !!

##### **CHECK A VALUE IN A DICTIONARY**
```python
currency = value
dict = python_dictionry

if currency not in dict: #match with the keys in dict
    ...
```

***END***

**SWAP TWO VARIABLE VALUES**
```python
x, y = 10, 20       # x= 10, y = 20
x, y = y, x         # x= 20, y = 10
```

    
**USE THE REQUESTS OBJECT TO MAKE GET OR POST REQUESTS**
```python
import requests

# url/page?base=value&symbols=value
# returns JASON string : text
res = requests.get('url', params={"base": value, "symbols": value}) 

# FROM TEXT TO JSON : JSON CONVERSION
json = res.json()      
```

***************END***************

**OPEN A CSV OR TSV FILE (COMMA/TAB SEPARATED VALUE)**
```python
import csv

# csv reader_function parmeters -> (delimiter=',', quotechar='"', escapechar='|') 

file = open('file.csv', 'r') # OR, SEE BELOW
file = open('file.tsv', 'r')

# delimiter='\t' -> add this for TSV FILE
# delimiter= ',' -> implicite default parmeter
```

# ..

###      ---------- CSV READERS ----------

```python
**reader function**
read = csv.reader(file, delimiter=',') # returns a <reader object> 

# read returns each row as a list. [column1, column1, ...]
for column1, column2, ... in read:  
    #codes goes here
```
   
```python   
# DictReader function
read = csv.DictReader(file, delimiter=',') # returns a reader object
```

**ADD ELEMENTS TO A DICTIONARY**

```python=
titles = {}        # {"title": num_of_repetition}

# read returns each row as a dictionary {title:value, name:value, ...}
for row in read:   
    
    title = row['title']
    
    if title in titles:     # check the keys
       titles[title] += 1;
    else
        titles[title] = 1; # add a key and assign it value to 1
```

        
###       ---------- CSV WRITERS ----------

```python=
# write in a csv file
writer = csv.write(file_object)  # returns <csv write object>

#best to put the headers in firt row write
writer.writerow(["col1", "col2", "col3",...]) 
```
 
*******************END*******************

**SORT A DICTIONARY**
```python
def f(item)
    item[1]
```
```python
# dict_obj.items(): returns list of (key, value) tuples : [(k, v), (k, v), (k, v), ...]
for key, value in sorted(dict_obj.items(), key=f, reverse=True): #descending sort
    #code goes here
```
# ..........................................

```python
# sortes the list of tuples <dict_obj.items> based on their second elements
for key, value in sorted(dict_obj.items(), key= lambda item: item[1], reverse=True):
    #code goes here
```
    
*******************END*******************

**CREATE A FILE IN PYTHON**

#### **overwrite exiting file or create new file**
```python
open('file_name', 'w').close() # similar to touch in linux
```

*******************END*******************


#### **SPECIAL BUILD IN METHODS AND OJECTS**
```python
instanceName.__dict__ # returns attribute of the instance object
help(object)          # show the inheritance hierarchys
dir(object)           # show valid attributes and methods for the object 
isinstance(object1, object2)
issubclass(object1, object2)
```

*******************END*******************

### **MAGIC METHODs AKA DUNDER**

**These are methods preceeded by double quotes ```<__method__>```**.

__They have a special meaning and are initialized by default__
__Much like in C++ we can override them__
```python
print(object)                   # print.__str__(self, object)
ClassName(value1,value2)        # ClassName.__init__(self, value1, value2)
dict['key'] = value             # dict.__setitem__(self, 'key', value)
var = dict['key']               # dict.__getitem__(self, 'key')
del dict['key']                 # dict.__delitem__(self, 'key')
len(object)                     # object.__len__(self)
var in object                   # object.__contain__(self, var)
var1 + var2                     # var1.__add__(var2)
var1 += var2                    # var1.__iadd__(var2)
function()                      # function.__call__(self) 
```

### **Dunder method we should always implement**

```python
#print a user friendly representation of the object
__str__    

#print the syntax used to create an instance of the object: ClassName(val1, val2, ..)
__repr__   
```

*******************END*******************

### **PROPERTY DECORTOR**

A property decorator change the behavior of a method. 
They are placed about a function an start with a @

```python
@property # makes a method callable without the parenthesis: print (instance.methode)
@propertyName.setter #pass values in a method using the equal sign: instance.methode = value
@propertyName.deleter #defines how a instance of an object is to be deleted

class Example:
    
    @property # this acts as a getter
    def method1():
        #code goes here
    
    #setter, getter and deleter expands on a @property method
    @method1.setter
    def method1(self, value):
        #code goes here
       
    @method2.deleter
    def mehod1(self):
        self.value=None
        #other code can go too
    
inst1 = Example()

var1 = inst1.method1    # no parenthesis needed!
inst1.method1 = value   # update a value in the class using value: method(value)
del inst1.method1
```

*******************END*******************

### **TERNARY OPERATION**

```python
condition = True

var = 1 if condition else 0
```
*******************END*******************

### **NUMBER FORMATING**

```python
million = 1000000
formatMillion = 1_000_000
decimal = 34.8943099
strSize = 23.49

print (formatMillion) #1000000
print (f'{formatMillion:,}')    # 1,000,000
print (f'{formatMillion:_}')    # 1_000_000
print (f'{decimal:.2f}')        # 34.90 Round to 2 decimal places
print (f'{strSize:0>n}'}        # make the total string size at least n, add left
print (f'{strSize:0>7}'}        # 0023.49 : returns a string
print (f'{strSize:<0n}'}        # make the total string size at least n, add right
print (f'{strSize:<07}'}        # 23.4900 : returns a string
```
*******************END*******************

### **ENUMERATE AND ZIP FUNCITIONS**

```python
list1 = [val1, ...., val12]
list2 = [val1,....., val12]
list3 = [val1,....., val12]

for index, value in enumerate(list1):
    ## index of each list value

for list1Val, lis2Val, list3Val in zip (list1, list2, list3):
    #zip return a tuple of the three list values at each iteration
    #the list should have the same size if not, use the ziplongest from the iterloop library
    
for tuple in zip (list1, list2, list3):
    #return a single touple of three values
```
*******************END*******************
  
### **UNPACKING**

```python
a, b        = (1, 2)                #unpack a tuple to a and b
a, b, _     = (1, 2, 3)             #unpack 1 and 2 and ignore 3
a, b, *c    = (1, 2, 3, 5, 6)       #upack a=1, b=2, c=[5,6]
a, b, *c, d = (1, 2, 3, 5, 6, 7)    #upack a=1, b=2, c=[5,6], d=7
```

*******************END*******************

### **ADD ATTRIBUTE TO OBJECT**

```python
class Example:
    pass

dict_info = {'name': 'valery', 'age': 18, 'mother': 'Alice'}
instance1 = Example()

for key, value in dict_info.items():
    setattr(instance1, key, value)

for key in dict_info:
    print(getattr(instance1, key))
    
print(instance1.name)
print(instance1.age)
print(instance1.mother)
```

*******************END*******************

### **USE GETPASS TO ASK FOR USER PASSWORD**

```python=
from getpass import getpass

username = input("Username: ")
password = getpass("Password: ") # The user keystroke will be visible 
```

*******************END*******************

### **FIRST-CLASS FUNCTION IN PYTHON AND OTHER LANGUAGE (JAVASCRIPT, ...)**

```python
#This creates a sort of local enviroment that persistes even after
#it has finished executing. That is because it returns a function
#This is called "Closure"
def parentFunction (arg1):
    def innerFunction(arg2):
        return (f"arg1: {arg1}  arg2: {arg2}")
    return innerFunction
        
# the arguments is kept within the parentFunction as in a class.
funVar = parentFunction("parentFunction") 

# arg1: parentFunction  arg2: innerFunction
print (funVar("innerFunction"))             

```

*******************END*******************

### **DECORATOR FUNCTION**

```python
# Here we wrap the original_function and add an extra functionality
def decorator_function1(original_function):
    def wrapper_function():
        print (f"The wrapper executed this before {original_function.__name__}")
        return original_function()
    return wrapper_function
```

    
# ..

```python
def display():
    print ("Display function ran")
    
decorated_display1 = decorator_function1(display)
```


***A simpler way to pass function to a decorator is to use the @ symbole***
***This is equal to: decorator_function2(newDisplay)***
```python
@decorator_function1 
def newDisplay ():
    print("NewDisplay Function ran after being implicitly passed to decorated_display2()")
```
# ..

```python
decorated_display1()    # The wrapper executed this before display
                        # Display function ran
```

```python
# newDisplay = decorator_function2(newDisplay)
newDisplay()    # The wrapper executed this before newDisplay
                # NewDisplay Function ran after being 
                # implicitly passed to decorated_display2()
```                
 
*******************END*******************
 
### **DECORATOR FUNCTION WITH ARGUMENT: ARGS AND KWARGS -> KEYWORD ARGUMENTS**

```python
def decorator_function2(original_function):
    def wrapper_function(*args, **kwargs):
        print (f"The wrapper executed this before {original_function.__name__}")
        return original_function(*args, **kwargs)
    return wrapper_function
```



```python
@decorator_function2
def display_info(name, age):
    print (f"Display_info ran with arguments ({name}, {age})")
```
```python
display_info("Samule", 20)  # The wrapper executed this before
                            # Display_info ran with arguments (samuele, 20)
```                           

*******************END*******************
                            
### **ITERABLE AND ITERATOR**

A method is iterable if it has an method called `__iter()__`
A method is an iterator if it has the dunder `__next()__`
A iterator is an object with a state. It knows its state and knows where to get the next value
How to check if a object has certain method?

```python
# returns a list of method and attribute within the object
print(dir(object)) 
```

__next(object) --> `object.__next()__`__
__iter(object) --> `object.__iter()__`__

```python
nums = [1, 2, 3]
print(dir(nums)) # we see __iter__ but not __next__

for num in nums:
    print (num)

 #__iter()__ returns an object that has a dunder __next()__ . An iterator object 
inum  = nums.__iter()__ 
print(dir(inum))    # we now see both __iter__ and __next__
                    # the dunder __iter__ of an iterator object returns itself (self)
print (next(inum)) # 1
print (next(inum)) # 2
print (next(inum)) # 3
print (next(inum)) # StopIteration exception

# # This is an approximation of what a for loop above does in the background
inum = iter(num)
while True:
    try:
        item = next(inum)
        print (item)
    except StopIteration:
        break
```
*******************END*******************

### **USER THE ITERABLE AND ITERATOR KNOWLEDGE TO CREATE A CLASS THAT BEHAVES LIKE RANGE()**

```python
class MyRange:

    def __init__(self, start, end):
        self.value = start
        self.end = end
    
    # an iterator needs to return an object that has a dunder __next__ method
    def __iter__(self):
        return self
        
    def __next__(self):
        if self.value >= self.end:
            raise StopIteration
        current = self.value
        self.value += 1
        return current
        
nums  = MyRange(1, 10)

# This only works once peer instance as the __next()__ can not reset
for num in nums:
    print(num)  # return value from 1 to 10
```

*******************END*******************
  
### **GENERATOR**

__We can consider functions that contain the key work 'yield' as generator__
__They do not store information in merory but rather return on at the time as we call it__
__This comes after python_iterator__
__function that use yield get dunders `__next__` and `__iter__` by default__

```python
def my_range (start, end):
    current = start
    while current < end:
        yield current
        current += 1
        
nums = my_range (1, 10)

for num in nums:
    print (num)

print ('*' * 34)
```   
    
# ..
```python
def square_numbers (nums):
    for i in nums:
        yield (i * i)
        
list_num = [1, 2, 3, 4, 5, 6, 7, 8]
my_nums = square_numbers(list_num) # returns a iterator object

# #WE can directly call the iterator function __next()__
print (next(my_nums))   #1
print (next(my_nums))   #2
print (next(my_nums))   #3
print (next(my_nums))   #4   
print (next(my_nums))   #5
print (next(my_nums))   #6
print (next(my_nums))   #7
print (next(my_nums))   #8
# #print (next(my_nums))   #StopIteration Exception

print ('*' * 34)

# #We can pass it to a for loop for security and exception avoidance
my_nums2 = square_numbers(list_num) # returns an iterator object
for num in my_nums2:
    print (num)
    
```
### **THE ADVANTAGE OF A GENERATOR IS THAT IT DOES NOT HOLD LIST IN MEMORY**

__We can also produce a GENERATOR using a list comprehension__

```python
my_nums = (x*x for x in [1, 2, 3, 4, 5, 6]) # returns a iterator object
my_nums_list = list(my_nums)                # converts to a list: [1, 4, 9, 25, 36]

for num in my_nums:
    print (num)
    
my_nums = [x*x for x in [1, 2, 3, 4, 5, 6]] # returns a list: [1, 4, 9, 25, 36]    
```

*******************END*******************

### **PRINT THE MEMORY ADDRESS OF VARIABLE**

__To print the memory address of a variable in python use the function id()__

```python
a = "Teacher"
b = "Firefighter"

print (f"Address of a is {id(a)}")
print (f"Address of b is {id(b)}")

```
*******************END*******************


### **USEFUL METHODS**

__To get more info about an object user dir(), and help()
dir(object), help(object), help(object.function_name)__

#### **strings**
__.count()__
```python
string.count('value') # returns the number of repetiton of 'value' in string
```


#### **Dictionary**

__.get()__

```python
# returns the value associated with a key or Non, if key doesn't exist
dictionary.get('key') 

# returns 'customed message' if key doesn't exist
dictionary.get('key', 'Customed message')
```
**.get('key') vs ['key']**
>if key not found: get('key') returns Non or Customed message / ['key']: raise exception 

__.update()__

```python
dictionary.update({'key':value, 'key':value, ...}) #updates a dictionary 
```
__.pop()__

```python
dictionary.pop('key')   # returns and remove the value associated with 'key'
```
__.keys()__
```python

dictionary.keys()   # returns all the keys
```
__.values()__

```python           
dictonary.values()  # returns all the values
```
__.items()__

```python          
dictionary.items()  # returns list of (key, value) tuples
```
### **List**

```python 
list0 = [1, 2, 4, 5]
list1 = [6, 7, 8, 9]
```

__.insert(location, value)__

```python
list0.insert(2, 3)       # Adds a value at an index : [1, 2, 3, 4, 5]
```
__.extend()__

```python
list.extend(list1)     # Merges two lists: [1, 2, 4, 5, 6, 7, 8, 9]
```
__.remove()__

```python
list.remove(valueToRemove)  # Removes the fisrt appearance of valueToRemove in the list
```
__.pop()__

```python
list.pop()             # removes and returns the last elements of the list
```

__.sort()
.reverse()__

__.index()__

```python
list.index('value')     # returns the index of 'value' within the list
```
```python
# turns list to string and put 'value' between each list values
'value'.join(list)   

 # result: 'value1, value2, .....'
','.join(list)             
```
### **SET**

```python
set1 = {'val1', 'val2', 'val3', 'val4', 'val5'}
set2 = {'val1', 'val5', 'val3', 'val7', 'val8'}

.intersection()
set1.intersection(set1) # returns a set of common elements

.difference()
set1.difference         # returns a set of unique value to each set

set3 = set()            # create empty set
```

### **BOOLEAN COMPARAISON**

**The 'is' operator compares the address of objects**
```python
a = [1, 2, 3]
b = [1, 2, 3]

print (a is b) # False

b = a
print (a is b) # id(a) == id(b) : True
```
### **List of object state that evaluate to False**

```python
condition = object 
```

__Any empty sequence evaluate to false: '', [], ()
Any empty mapping evaluate to false: {}
None and False evaluate to false__

```python
if condition:
    #code goes here

```
*******************END*******************

### **IMPORT SYS, IMPORT OS**

```python 
import sys

print(sys.path)           #   returns the path python search on for modules to import
sys.path.append('path')   #   we can add a path to the list of paths. Not best practice.

import os

print (os.getcwd())         # returns the current working directory
print (os.__file__)         # returns location of python in the system
os.chdir()                  # changes the current working directory
os.listdir()                # Lists the files and folders in current working directory
os.makedir('folderName')    # creates directory of depth 1
os.makedirs('parent/child') # creates a directory tree
os.rmdir('folderName')      # removes a sigle folder
os.removedirs('parent/child')   # removes a folder tree
os.rename('filename', 'newfilename')
os.environ                  # returns a list of environment variables
```
