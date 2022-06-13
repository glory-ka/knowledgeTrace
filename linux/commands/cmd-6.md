BASH USEFUL KNOWLEDGE
=====================

COMMANDS
--------

* **seq**
```bash
seq 10 -2 1        # from 10 to 1, negative increment -2
seq 1 3 10         # from 1 to 10, positive increment 3

seq -w 01 10       # from 1 to 10 output result with leading zero
seq -s - 8         # from 0 to 8 with separtor '-'

seq -f "%g/04/2018" 10 # replace placeholder with sequence result
seq -f "%f" 3 0.8 6 # %f for floating points
```

* **{start..stop}**
```bash
for name in image{1..5}.png; do
    echo "Filename: $name"
done
```

* **Array**
```bash
# Create array
myArray=() # create empty array
myArray=("eat" "sink", "fly")
myArray=(./*) # array on current directory files
myArray=(`seq 10`) # array of seq result
myArray=$( ./myscript ) # stores the output of the script into the array
```
```bash
# Append element to an array
myArray+=( ./* )
```
```bash
# Access Array values
echo ${myArray[@]}     # access all array content at once
echo ${myArrat[1]}     # access element at position one. Zero based index
echo ${!myArray[@]}    # return an array of the index
echo ${#myArray[@]}    # return the size of the array
echo ${arr[@]:s:n}     # return subarray starting at position s
```
