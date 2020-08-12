//
//Los elementos hijos de miElemento:
//

const parentList = document.getElementById('myList');
const listChildren = parentList.children;

for (let index = 0; index < listChildren.length; index++) {
  console.log(listChildren[index]);
}