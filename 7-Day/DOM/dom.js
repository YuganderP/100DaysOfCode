//DOM : Document Object Model
// Making html pages dynamic via javascript
// Dom : represents the document as object and nodes 
// DOM is not part of javascript 
// Document is tree like structure 
// head
// body 
// and other Elements
// docuement.getElementById("loginIdForm").elements.length

let para =document.createElement("p")
para.innerText="I am a sample paragraph text"
document.getElementsByClassName("class name")
document.querySelector()
document.querySelectorAll('p')
document.querySelector('p.intro')
document.style.backgroundColor="Red"
document.forms("form_id")
document.head()
document.title()
document.links()
Element.setAttribute("attribute","value")
// html collection:
// collection of element 
// getElementsByClassName
// items can be accessed by their name id index number


// Nodes: html collection of nodes 
// element nodes, attribute nodes ,text noted 
// elements can be accessed by index number  

// Adding / deleting elements:

// document.createElement(element)
// document.removeChild()
// document.appendChild()
// 
// Every docuement is a document node, Every html element is an element node 
// The text inside html elements are text nodes 
// All comments are comment nodes 

//
// node.childNodes
Node.firstChild
Node.lastChild
Node.parentNode
Node.nextSibling
Node.previousSibling
// Javascript events;
{/* <h2 onCLick="this.innerHtml='Opps'">
</h2> */}
// 
// mouseoverme 
// mousedown
// 
// 
// onload vs onunload function 
// 
// EventListeners
// addEventListener("click",function)
//There are 2 ways of event propogation : event bubbling and event capturing  
//Event propogation is the way of definig the element order ehen an event occurs if you have 
// a p inside a div and user click on the p which elements event should handled first
//bubbling: innter most element event handled first
// capturing: outer most element should be handled first 
// addEventListener(event,function,useCapture)
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
