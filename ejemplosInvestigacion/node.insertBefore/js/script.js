//
//Node.insertBefore()
//

const myList = document.getElementById('myList');
const redPepper = document.getElementById('red-pepper');

const itemList = document.createElement('li');
itemList.textContent = 'Carrot'

console.log(myList.insertBefore(itemList, redPepper));

