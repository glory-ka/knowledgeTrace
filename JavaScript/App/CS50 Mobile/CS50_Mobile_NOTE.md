```javascript
// CS50 MOBILE DEVELOPMENT LECTURE

/**

 React-Prop-State:
 47:09 -- 10 minutes Erro due to binding issue And Update Issues

 React Native :
 44:53 -- 5 minutes 'this' set it to bind to the correct object.
 
 List User Input : 
 12:39 -- 5 minutes
 6:38  -- 5 minutes
 27:36 --10 minutes Stateless Functional Component | 'key' as a special meanin like onClick and others| 1:03:00 -- 5 minutes
 35:40 -- 5 minutes Ternary operation
 41:29 -- 5 minutes Benefit and Drawbacks of using FLATLIST over SCROLLVIEW
 51:44 -- 5 minutes Make an InplaceSort no Inplace
 55:42 -- 5 minutes Look at the doc and Trick to extract key from a passed object
 1:11:23 -- 5 minutes Algorithm to restructure an list
 
 List User Input Debugging :
 12:23 -- 5 minutes Cast STRING TO NUMBER
 19:30 -- 5 minutes How to pass a callback function on specific state update. ==> setState({}, ---)
 25:50 -- 5 minutes Accidental componentDidUpdate() Loop
 35:37 -- 5 minutes Introduction to KeyBoardAvoidingView
 39:10 -- 5 minutes Nexted Functions that both take arguments. functionName('arg1')('arg2')
 
 Date:
 1:39:30 -- 3 minutes Obeject Distructuring => const {key} = object --> {key:'', baz:'', foo:''}. => [const key = object.key]
 
 Redux:
 17:50 -- 5 minutes Merge two object using Spread Operation or (prev, next) => Object.assign({}, prev, next)
 22:10 -- 5 minutes Create a Store
 35:52 -- 5 minutes Description of Action. Despite it's name, action do not generate operation but are only data.


<View> => <div> : if view contains elements other that plain text
<Text> => ANY ELEMENT THAT CONTAINS TEXT. NOTE: ALL TEXT SHOULD BE ENCLOSED IN A HTML TAG for good measure
<SCROLLVIEW> => React Native Does not give automatic scrolling. You have to enclose large <TEXT> around <SCROLLWIEW>
<TEXTINPUT> => Take input from the user.

STYLESHEET INFO ON 'REACT NATIVE'-LECTURE 4 VIDEO

<SCROLLVIEW> VS <FLATLIST>
The former load all its children before it displays the result. The latter shows what is needed at the time (Size of the screen).

<FLATLIST> VS <SECTIONLIST>
The later work like the former but add support for sectioning data into groups, aka Sections : LIKE IN A PHONE CONTACT LIST

SPECIAL FUNCTION NAME THAT ALREADY HAVE PREDETERMINED BEHAVIOR
1. key -> don't pass props with this name. They are like onClick and other properties
2. renderItem -> This a function name that passed a specially structured object: refer to List User Input (55:42)| False conclusion


https://codesandbox.io
LIBRARY: 
Expo -> snack.expo.io -> CLI / XDE
React-natigation	

WEIRD JAVASCIPT:
1. Function don't have parameter signature. You can pass more or less parameters.	
*/
```