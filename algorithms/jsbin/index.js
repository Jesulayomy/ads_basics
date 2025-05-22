 let behavioral = [
"Give me an example of the project or initiative that you started on your own. It can be a non-business one. What prompted you to get started?",
"Tell me about a time you had to work on several projects at once. How did you handle this?",
"Describe a situation in which you felt you had not communicated well enough. What did you do? How did you handle it?",
"Tell me about when you had to deal with conflict within your team. How was the conflict solved? How did you handle that? How would you deal with it now?",
"Give me an example of a time you had to take a creative and unusual approach to solve coding problem. How did this idea come to your mind? Why do you think it was unusual?",
"Describe a situation in which you worked diligently on a project and it did not produce the desired results. Why didn't you get the desired results? What did you learn from the experience?",
"Give an example of an important project goal you reached and how you achieved it.",
"Describe a situation in which you experienced difficulty in getting others to accept your ideas? What was your approach? How did this work? Were you able to successfully persuade someone to see things your way?",
"Tell me about a situation when you were responsible for project planning. Did everything go according to your plan? If not, then why and what kind of counteractions did you have to take?",
"Tell me about a situation when you made a mistake at work. What happened exactly and how did you deal with it? What steps did you take to improve the situation?",
"Tell me about a time when you worked with someone who was not completing his or her share of the work. How did you handle the situation? Did you discuss your concern with your coworker? With your manager? If yes, how did your coworker respond to your concern? What was your manager's response?",
"Describe a situation when you worked effectively under pressure. How did you feel when working under pressure? What was going on, and how did you get through it?",
"Tell me about yourself.",
"Tell me about your experience at Resilient Coders. ",
"What do you know about our company?",
"Why do you want to work for us?",
"Why are you interested in this opportunity.",
"Tell me about your dream job?  What do you really want to do with your career?",
"Tell me a time when you failed.",
"What do you read on a regular basis?",
"What's some critical feedback you've gotten recently?",
"Do you have any questions?"
]

let html = [
// "What does a doctype do?",
// "How do you serve a page with content in multiple languages?",
// "What kind of things must you be wary of when design or developing for multilingual sites?",
// "What are data- attributes good for?",
// "Consider HTML5 as an open web platform. What are the building blocks of HTML5?", // Semantics, Styling, Presentation, I/O, 
// "Describe the difference between a cookie, sessionStorage and localStorage.",
// "Describe the difference between <script>, <script async> and <script defer>.",
// "Why is it generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before </body>? Do you know any exceptions?",
// "What is progressive rendering?",
// "Why you would use a srcset attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.",
// "Have you used different HTML templating languages before?"
]

let css = [
// "What is CSS selector specificity and how does it work?", // Weight
// "What's the difference between \"resetting\" and \"normalizing\" CSS? Which would you choose, and why?", // Normalize if writing css, reset if using prebuilt style/thems
// "Describe floats and how they work.", // Positioning left & Right
// "Describe z-index and how stacking context is formed.", // In front of you
// "Describe BFC (Block Formatting Context) and how it works.", // Creating blocks to prevent overflow
// "What are the various clearing techniques and which is appropriate for what context?", // Empty div, clear both (Clearfix - Best), overflow
// "Explain CSS sprites, and how you would implement them on a page or site.", // Big collage of images, one request
// "How would you approach fixing browser-specific styling issues?", // Using normalize or reset
// "How do you serve your pages for feature-constrained browsers? What techniques/processes do you use?", // Use semantic tags, minimal features and design for accessibility
// "What are the different ways to visually hide content (and make it available only for screen readers)?", // 0 w/h, absolute left -99999, aria-label
// "Have you ever used a grid system, and if so, what do you prefer?", // Yes, 12 col-grid
// "Have you used or implemented media queries or mobile specific layouts/CSS?", // Always, mobile first, queries to scale to big screns
// "Are you familiar with styling SVG?", // Yes, using fill and stroke or actual css
// "Can you give an example of an @media property other than screen?", // all, print, speech
// "What are some of the \"gotchas\" for writing efficient CSS?", // Broswers match selectors from right to left, shorter is better.
// "What are the advantages/disadvantages of using CSS preprocessors?", // Maintenance, less repitition with mixins | More tooling, less features
// "Describe what you like and dislike about the CSS preprocessors you have used.", // change theme, extra compilation complexity
// "How would you implement a web design comp that uses non-standard fonts?", // Font face and font-family i..e google fonts
// "Explain how a browser determines what elements match a CSS selector.", // p span, all span - all matching p
// "Describe pseudo-elements and discuss what they are used for.", // Keyword to style
// "Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.", // Width + padin + border + margin
// "What does * { box-sizing: border-box; } do? What are its advantages?", // No math
// "What is the CSS display property and can you give a few examples of its use?", // block/inline, children behavior
// "What's the difference between inline and inline-block?", // Cant set w/h, can only set m/p for sides
// "What's the difference between a relative, fixed, absolute and statically positioned element?", // Well in that case
// "What existing CSS frameworks have you used locally, or in production? How would you change/improve them?", // B and TW, More of the other
// "Have you played around with the new CSS Flexbox or Grid specs?", // Yes grid layout, flex sections
// "Can you explain the difference between coding a web site to be responsive versus using a mobile-first strategy?", // responsiv eis fluid, mobile first scales up
// "How is responsive design different from adaptive design?", // Responsive is fuid, adaptive applies breakpoints to exclude or rearrange content
// "Have you ever worked with retina graphics? If so, when and what techniques did you use?", // high res screens. use srcset
// "Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why?" // Absolute triggers reflow, translate uses a gpu layer
]

let js = [
// "Explain event delegation", // setting on parent to bubble to the child
// "Explain how `this` works in JavaScript", // references an object, used to assign properties in constructors
// "Explain how prototypal inheritance works", // all objects have _proto_, when a property is accessed & not found, js checks the parents till it gets to the top of the chain
// "What do you think of AMD vs CommonJS?", // Async module def was made for frontend and is less intuitive to use, CommonJS is simpler and sync. The newer ECMAScriptM, allows fr the best of both worlds
// "Explain why the following doesn't work as an IIFE: function foo(){ }();. What needs to be changed to properly make it an IIFE?", // Immediately invoked function expression, (function foo(){ })();
// "What's the difference between a variable that is: null, undefined or undeclared? How would you go about checking for any of these states?", // absent, declared no val, improperly declared. ===, try...catch
// "What is a closure, and how/why would you use one?", // use an outer function's scope in an inner one, all functions use a closure
// "Can you describe the main difference between a .forEach loop and a .map() loop and why you would pick one versus the other?", // For each does not return, map returns a new array
// "What's a typical use case for anonymous functions?", // Callbacks that don't need to be used eelsewhere
// "How do you organize your code? (module pattern, classical inheritance?)", // A mix of both, modules offer sepeeartion of concerns and classical inheritance is a readable format easily understood by programmers
// "What's the difference between host objects and native objects?", // Native are part of the language like String. Host are part of the runtime like window, console.
// "Difference between: function Person(){}, var person = Person(), and var person = new Person()?", // COnstructor function, incorrect syntax, new person object
// "What's the difference between .call and .apply?", // Used to invoke functions, .call takes csv, .apply takes arr
// "Explain Function.prototype.bind.", // Creates a function with this set to the value provided, Used when passing a class function as a callback, you need to bind this
// "When would you use document.write()?", // Dangerous and prone to misuse, it clears the entire document with document.open()
// "What's the difference between feature detection, feature inference, and using the UA string?", // detection is checking if the browser supports a block of code, inference also checks but uses another function, UA strings allows the browser to identify properties of the system
// "Explain Ajax in as much detail as possible.", // async js & xml Is a web dev technique for the client side to create async web apps. It decouples data exchange from presentation layer, allowing apps to be dynamic.
// "What are the advantages and disadvantages of using Ajax?", // Interactivity, reduced requests, managing state. Bookmarking, disabled js, low-end devices
// "Explain how JSONP works (and how it's not really Ajax).", // JSON padding is used to bypass cross site requests, it is usafe and you should use CORS
// "Have you ever used JavaScript templating? If so, what libraries have you used?", // JSX and EJS
// "Explain \"hoisting\".", // bubbline functions, vars & classes to the top so they can be used before they are declared.
// "Describe event bubbling.", // how events run from the event.target and bubbles up to all it's ancestors
// "What's the difference between an \"attribute\" and a \"property\"?", // Attributes are set on the HTML markup, while properties are defined on the DOM. Attr is the initial state, property is the current state
// "Why is extending built-in JavaScript objects not a good idea?", // Becase it can lead to unexpected behavior when two properties are defined with the same name. I.e replacing the Array prototype's contains method. Only extend to add features that may not exist on user's older browsers (Polyfill)
// "Difference between document load event and document DOMContentLoaded event?", // Loaded after the DOM and all dependent resources have loaded. VS loaded after the DOM has been loaded.
// "What is the difference between == and ===?", // strict comparison checks type and value, also works well with undefined and null values
// "Explain the same-origin policy with regards to JavaScript.", // refers to preventing js from making requests accross a domain, only allowing same orugin. Origin is the URI, hostname and PORT no. Prevents malicious scripts from one page from accessing data on another web page
// "Make this work: duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]", // [...nums, ...nums]
// "Why is it called a Ternary expression, what does the word \"Ternary\" indicate?", // Ternary indicates three operands, it evaluates a condition, and returns either of two values, the first if the condition is truthy, and the second if the condition is falsy
// "What is \"use strict\";? what are the advantages and disadvantages to using it?", // Enables strict mode, opting into a restricted variant of javascript that blocks some of JS features
// "Create a for loop that iterates up to 100 while outputting \"fizz\" at multiples of 3, \"buzz\" at multiples of 5 and \"fizzbuzz\" at multiples of 3 and 5", // FizzBuzz
// "Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?", // scripts can access your global scope, thic can cause conflicts, use the module patterns to place variables in a local namespace
// "Why would you use something like the load event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?", // you might want to use it for lerge non-blocking resources that don't need to be used on the page. load fires when everything is done. DOMContentLoaded after DOM.
// "Explain what a single page app is and how to make one SEO-friendly.", //  renders on the client side, without new pages trigering a refresh. Data can be updated VIA APIs like Ajax, and using JS to manipulate the DOM. USE server side rendering 
// "What is the extent of your experience with Promises and/or their polyfills?", // Used promised extendively in asynchronous JS, it is such an important part of Mordern js now. Polyfills not so much
// "What are the pros and cons of using Promises instead of callbacks?", // Organization and readability, 
// "What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?", // syntactic sugar, static types. It requires the build/compile step, less resources, behind the latest ES standards. An example is Typescript.
// "What tools and techniques do you use debugging JavaScript code?", // browser devtools, console.log and Debugger
// "What language constructions do you use for iterating over object properties and array items?", // for...in, for...of, Object.keys(),
// "Explain the difference between mutable and immutable objects.", // Object.freeze()
// "Explain the difference between synchronous and asynchronous functions.", // Sync runs line by line waiting for execution, async runs
// "What is event loop? What is the difference between call stack and task queue?", // A single threaded loop monitoring the call stack and checking if there is any work to be done
// "Explain the differences on the usage of foo between function foo() {} and var foo = function() {}", // dec, exp. hoisted, not hoisted, always has a name, can be anonymous
// "What are the differences between variables created using let, var or const?", // let and const cannot be redeclared, var is hoisted, let and var can be reassigned
// "What are the differences between ES6 class and ES5 function constructors?", // uses function, Object.call() and Object create. ES6 just uses the constructor() function
// "Can you offer a use case for the new arrow => function syntax? How does this new syntax differ from other functions?", // simplifies the syntax for creating functions. one difference is that this is lexically bound, and will be used from the scope that contains the arrow function.
// "What advantage is there for using the arrow syntax for a method in a constructor?", // This gets set when the function is created, making sure the object cannot be changed by .call() .apply() or .bind(). Helpful in react when passing props
// "What is the definition of a higher-order function?", // any function that takes one or more functions as arguments. and/or returns a fn result. Used to abstract some operation. Map
// "Can you give an example for destructuring an object or an array?", // Is a convinient way of extracting properties from objects or values from arrays into distincy variables. const { firstName, lastName } = person;
// "ES6 Template Literals offer a lot of flexibility in generating strings, can you give an example?", // they let you insert variables into a string, they can also let you carry out complete operations like using ternary operators or immediately onvoked function expressions
// "Can you give an example of a curry function and why this syntax offers an advantage?", // Curry functions transform a function with multiple arguments multiple nested functions, which might seem counterintuitive at first. Used in func progg and allows for reusable code. an example will be a func taking tax, discout, amount.
// "What are the benefits of using spread syntax and how is it different from rest syntax?", // It can be used to unpack/expand data from an array or object (iterable), the REST is used to gather or collapse arguments into an array fn manyArgs(arg1, arg2, ...otherArgs) {}
// "How can you share code between files?", // In ES6 you can use the import / export syntax or the older module.exports / require syntax. It hepls in organizing your codebases
// "Why you might want to create static class members?" // static class members are properties/methods that do not change, they are used for props that are the same through out the app/class and can be used for utility. They can also be called without any arguments.
]

let jsGeneral = [
// "Can you name two programming paradigms important for JavaScript app developers?", // OOP and func
// "What is functional programming?", // no side effects
// "What is the difference between classical inheritance and prototypal inheritance?", // class via constructors, object via factory/.create()
// "What are the pros and cons of functional programming vs object-oriented programming?", // Func is newer, reliable, no side effects, but hard to read or organize. OOP is standardized, easy to follow, separated concerns, but models can become complex.
// "What are two-way data binding and one-way data flow, and how are they different?", // UI bound to dynamic model (Angular), UI signals intent to model (React)
// "What is asynchronous programming, and why is it important in JavaScript?" // non-blocking, js is sync, env allows async
]

let node = [
// "What is Node.js? Where can you use it?", // single-threaded, cross-platform, runtime, allowing for server-side event-driven arch
// "Why use Node.js?", // SIngle threaded so less memory, wide adoption & packages through npm. good for non-intensive RTA
// "What are the features of Node.js?", // access http and fs + other APIs, browser functionalities & access to packages
// "How do you update NPM to a new version in Node.js?", // npm install -g npm@latest
// "Why is Node.js Single-threaded?", // for async, under typical web load, scalability is better than thread-based implementation
// "Explain callback in Node.js.", // A function to run after a task, allows other code to be run 
// "What is callback hell in Node.js?", // nested callbacks, pyramid scheme
// "How do you prevent/fix callback hell?", // promises, .then/.catch, shallow/modularize
// "Explain the role of REPL in Node.js.", // interactive shell, test js
// "Name the types of API functions in Node.js.", // Sync and Async
// "What are the functionalities of NPM in Node.js?", // online repository for packages, utility for managing said packages, dependencies and versions
// "What is the difference between Node.js and Ajax?", // Apples to oranges, node lets you run js outside the browser, and Ajax is a client-side framework for making async calls to the server
// "What are “streams” in Node.js? Explain the different types of streams present in Node.js.", // objects that let you read/write continuously, Readable-Writable-Duplex-Transform
// "Explain chaining in Node.js.", // promise chaining chain async tasks in a specific order, use .then()
// "What are Globals in Node.js?", // objects available in all modules, used for common tasks. Data Types, process, setTimeout
// "What is Event-driven programming?", // flow of the program is determined by events, like clicks/forms, addEvenyListener is popular on the client side
// "What is Event loop in Node.js work? And How does it work?", // Handles async callbacks, listeners are attached to events, and when the event fires the listener executes the provided callback
// "What is the purpose of module.exports in Node.js?", // Modules encapsulates related code into a single unit, which can then be imported using require.
// "What is the difference between Asynchronous and Non-blocking?", // Async programs will also run other code and deal with the response when it is rrecieved. Non-blocking usually refers to using I/O methods
// "What is Tracing in Node.js?", // Allows you collect tracing information generated by v8/Node core in a logfile --trace-events-enabled
// "How will you debug an application in Node.js?", // with debugger (like breakpoints) and console. 
// "Difference between setImmediate() vs setTimeout()?", // set immediatee runs in a cb after I/O and before execution of setInterval
// "What is process.nextTick()", // full event loop trip is a tick, p.nT() tells the engine to call the fn at the end of the current operation
// "What is package.json? What is it used for?", // Holds metadata relevant to the project. It also stores dependencies and config for tools
// "What is libuv?", // node dependency for async ops
// "What are some of the most popular modules of Node.js?", // Express, fs, http
// "What is EventEmitter in Node.js?" // A class that holds all objects that can emit events
]

let csTheory = [
// "What is recursion and give an example using javascript?", // Function calls itself with base, repetitive problem
// "What are types?", // Data types, unique set of rules. Know how to handle data - Use. Primitives Boolean, String
// "What are data structures?", // Storage for data & organiation. Arrays, LinkedList, Trees, Graphs
// "What is an algorithm? ", // steps 
// "What is scope / lexical scope in javascript? ", // Accessibility/Availability of variables based on where defined
// "What is polymorphism?", // Many forms of a common object or base, which can use the same method names
// "What is encapsulation? ", // grouping related var and func that operate on them to obj
// "What is a Linked List", // Data structure, used in the DOM, Stacks. e.g 
// "What is a Doubly Linked List", // Backward and forward traversal, used in trees
// "What is a Queue", // FIFO
// "What is a Stack", // LIFO
// "What is a Hash Table", // Map or dictionary, store key value pairs with the keys being a set
// "What is a Heap", // Min and Max heap, binary tree based
// "What is a Trie", // Tree based with associated keys, each node/leaf is a part of a key, used in autocomplete
// "What is a Tree", // nodes via branches, hierachical structure
// "What is a Binary Search Tree", // An ordered tree with nodes ordered, left is less than parent, right greater
// "What is a Disjoint Set", // DS tracking elements broken down into unique sets. Used in compilers
// "What is a Bloom Filter", // probabilistic structure to check if an element is a member of a set, can have false +ves but not -ves
// "Demonstrate Bubble Sort and explain when you might use it?", // Compares adjacent elements and swaps
// "Demonstrate Insertion Sort and explain when you might use it?", // Builds the sorted arr one item at a time
// "Demonstrate Merge Sort and explain when you might use it?", // Uses divide and conquer, splits an array into single subsets using recursion, then merge it in order of size
// "Demonstrate Quicksort and explain when you might use it?", // Recursively picks a pivot till length of 1, add smaller items to left and larger to right
// "Auto Pass"
]

let whiteboard = ["morning challenge","codewars"]

let morningChallenge = [
'Make a 10 card memory game - users must be able to select two cards and check if they are a match. If they are a match, they stay flipped. If not, they flip back over. Game is done when all cards are matched and flipped over Bonus - add shuffling of the cards (find a shuffling algorithm online) at the start of the game',
'User can enter number of dice, number of sides, and number of dice to ignore Regular dice like normal, but ignored results get pushed to an array Then loop through the array to append the ignored results to a new list',
'A local coffee house is finally starting to take off ever since they introduced cold brew made from Kopi Luwak. They can’t handle their order volume and are starting to drop orders. Create an app that enables the cashier to enter the customer\'s name and their order. Then add that order to a queue that the baristas can see and give them the ability to mark an order complete. Once marked complete, the order should move to a list of completed orders with the barista\'s name who completed the order next to it. The cashier and baristas should have completely different views. Bonus points if the app automatically says the customer\'s name out loud when an order is complete.',
'User can enter number of dice, number of sides, and number of dice to ignore Regular dice like normal, but ignored results get pushed to an array Then loop through the array to append the ignored results to a new list',
'User has ability to enter a number and when they click on a button a dice with x number of sides will roll (x being the number they entered) - update the dom with the result of the roll',
'Create a Wu-Tang Clan name generator. Present the user with 5 survey questions and based on those answers randomly generate their name. ES6+, running on a node server, and should return a first and last name',
'The sum of the squares of the first ten natural numbers is, 12 + 22 + ... + 102 = 385 The square of the sum of the first ten natural numbers is, (1 + 2 + ... + 10)2 = 552 = 3025 Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640. Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.',
'A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99. Find the largest palindrome made from the product of two 3-digit numbers.',
'If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.',
'By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13. What is the 10 001st prime number?',
'Implement an algorithm to determine if a string has all unique characters.',
'Given two strings, write a method to decide if one is a permutation of the other',
'Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the compressed string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a-z).',
'Create a function that takes in a number n. The function should then return a chess board of alternating colors that is n^2 in size',
'Create a function that takes in an array of n length. The function should always return that last item in the array',
'Create a function that sorts an array of numbers that is n length. Your function should use quick sort to sort the array of numbers.'
]

let questions = [];

questions.push(behavioral.splice(Math.floor(Math.random()*behavioral.length), 1));
questions.push(html.splice(Math.floor(Math.random()*html.length), 1));
questions.push(css.splice(Math.floor(Math.random()*css.length), 1));
questions.push(js.splice(Math.floor(Math.random()*js.length), 1));
questions.push(jsGeneral.splice(Math.floor(Math.random()*jsGeneral.length), 1));
questions.push(node.splice(Math.floor(Math.random()*node.length), 1));
questions.push(csTheory.splice(Math.floor(Math.random()*csTheory.length), 1));
questions.push(whiteboard.splice(Math.floor(Math.random()*whiteboard.length), 1));

if (questions[questions.length] === whiteboard[0]) {
  questions.push(morningChallenge.splice(Math.floor(Math.random()*morningChallenge.length), 1));
}

setTimeout(function(){
  questions.forEach(function(el){
    console.log(el)
  });
},2000)
