BASH ARRAY SCRIPT
=================

Example 1
---------

```bash
myArray=("cat" "dog" "mouse" "frog)

# Access each element directly
for str in ${myArray[@]}; do
  echo $str
done

# Access each element using their index
for i in ${!myArray[@]}; do
  echo "element $i is ${myArray[$i]}"
done

# create sequence using array length
seq 0 $(( ${#myArray[@]} - 1 ))
```

Example 2
---------

```bash
# Append element to an array
allThreads=(1 2 4 8 16 32 64 128)
allRuntimes=()
for t in ${allThreads[@]}; do
  runtime=$(./pipeline --threads $t)
  allRuntimes+=( $runtime )
done
```

Example 3
---------
```bash
# API Query
endpoint="https://jsonplaceholder.typicode.com/comments"
allEmails=()

# Query first 10 posts
for postId in {1..10};
do
  # Make API call to fetch emails of this posts's commenters
  response=$(curl "${endpoint}?postId=${postId}")

  # Use jq to parse the JSON response into an array
  allEmails+=( $( jq '.[].email' <<< "$response" ) )
done
```

Example 4
---------

```bash
# List of logs and who should be notified of issues
logPaths=("api.log" "auth.log" "jenkins.log" "data.log")
logEmails=("jay@email" "emma@email" "jon@email" "sophia@email")

# Look for signs of trouble in each log
for i in ${!logPaths[@]};
do
  log=${logPaths[$i]}
  stakeholder=${logEmails[$i]}
  numErrors=$( tail -n 100 "$log" | grep "ERROR" | wc -l )

  # Warn stakeholders if recently saw > 5 errors
  if [[ "$numErrors" -gt 5 ]];
  then
    emailRecipient="$stakeholder"
    emailSubject="WARNING: ${log} showing unusual levels of errors"
    emailBody="${numErrors} errors found in log ${log}"
    echo "$emailBody" | mailx -s "$emailSubject" "$emailRecipient"
  fi
done
```
[Bash array source](https://opensource.com/article/18/5/you-dont-know-bash-intro-bash-arrays)

[Bash array source](https://www.freecodecamp.org/news/bash-array-how-to-declare-an-array-of-strings-in-a-bash-script/)

