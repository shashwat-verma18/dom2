var items = document.getElementsByClassName('list-group-item');
items[2].style.background = 'green';

for(let item of items){
    item.style.fontWeight = 'bold';
    item.style.color = 'orange';
}