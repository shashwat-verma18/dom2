// var item2 = document.querySelector('.list-group-item:nth-child(2)');
// item2.style.background = 'green';

// var item3 = document.querySelector('.list-group-item:nth-child(3)');
// item3.style.visibility = 'hidden';


var items = document.querySelectorAll('li');
items[1].style.color = 'green';

var items = document.querySelectorAll('li:nth-child(odd)');

for(item of items)
    item.style.background = 'green';