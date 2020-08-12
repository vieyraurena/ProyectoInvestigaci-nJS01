//
//El elemento padre de miElemento:
//

let son = document.getElementById('son');
let result = document.getElementById('result')
let father = son.parentNode;
//con el nodeName obtenemos el nombre del elemento padre, en este caso es DIV y utilizo innerText para que salga reflejado en lapag principal.
result.innerText = father.nodeName;
console.log(father);
