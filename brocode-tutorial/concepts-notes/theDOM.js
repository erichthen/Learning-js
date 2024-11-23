

// the DOM : Document Object Model

//  It is an Object {} that represents the page you see in the web browser
//  and provides you with an API to interact with it. 
//  The web browser constructs the DOM when it loads an HTML document, 
//  and structures all of the elements in a tree-like representation. 

//  Javascript can access the DOM to dynamically change the content, structure, and style
//  of a web page. 

//  The HTML element is the root element, and contains the head and body elements


// Document Object Model (DOM)
// └── document
//     └── Root element: <html>
//         ├── Element: <head>
//         │   └── Element: <title>
//         │       └── Text: "My title"
//         └── Element: <body>
//             ├── Element: <h1>
//             │   └── Text: "A heading"
//             └── Element: <a>
//                 ├── Attribute: href
//                 └── Text: "Link text"


//to select an element by ID, we have been using document.getElementById("id-of-element")
//document is an object. We can change elements dynamically, like so:

document.title = "A new name for website";

//dynamically change the background color:
document.body.style.backgroundColor = "rgb(0,0,0)";

console.log(document) // -> displays html document

console.dir(document) // -> display properties of document



