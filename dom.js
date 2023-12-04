var itemList = document.querySelector('#items');

// parentElement 
itemList.parentElement.style.backgroundColor = '#f4f4f4';

// lastElementChild
itemList.lastElementChild.textContent = 'Hello 4';

// lastChild
console.log(itemList.lastChild);

// createChild

//firstElementChild
itemList.firstElementChild.textContent = 'Hello 1';

// firstChild 
console.log(itemList.firstChild);

// nextSibling
console.log(itemList.nextSibling);

// nextElementSibling
console.log(itemList.nextElementSibling);  //null

// prviousSibling
console.log(itemList.previousSibling);

// previousElementSibling
itemList.previousElementSibling.style.fontWeight = 'bold';

// createElement
var newDiv = document.createElement('div');
newDiv.className= 'hello';
newDiv.id = 'hellol';

// setAttribute
newDiv.setAttribute('title', 'Hello Div');

// createsNode
var newDivText = document.createTextNode ( 'Hello World');

//appendChild
newDiv.appendChild(newDivText);

newDiv.style.fontSize = '30px';

var container = document.querySelector('header .container');
var h1 = document.querySelector ('header h1');
container.insertBefore(newDiv, h1);

var newDiv2 = document.createElement('div2');
newDiv2.className= 'list-group-item';
newDiv2.id = 'hello2';

var newDivText2 = document.createTextNode ( 'Hello World');

newDiv2.appendChild(newDivText2);

var container2 = document.getElementById('items');
var item1 = document.querySelector('.list-group-item:first-child');
container2.insertBefore(newDiv2, item1);


