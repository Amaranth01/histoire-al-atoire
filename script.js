let array1 = [' et Erwin', ' et Anya', ' et Jenifael', ' et Ellana', ' et l\'Impératrice'];
let array2 = ['avec leur Epée', 'avec leur Lame empoisonnée', 'avec leur passe-partout', 'avec leurs Griffes', 'avec leur cristal'];
let array3 = ['dans la neige', 'avec 15 degrés', 'sous le soleil', 'par -20 degrés', "alors qu'il fait froid"];
let array4 = ['au Royaume d\'Emeraude', 'à la Cité Altheraan', 'à la Cité celeste', 'le Temple des Marchombres', 'au Château'];
let array5 = ["glandent", 'se baignent', 'son allongés', 'grimpe', 'chantent'];

let history = document.getElementById('history');
let button = document.getElementById('button');
let input = document.getElementById('input');

button.addEventListener("click", function (){
    let aleatory = Math.round(Math.random()*4);
    history.innerHTML += input.value + array1[aleatory]+ ' ' + array5[aleatory] + ' ' + array2[aleatory] + ' ' + array3 [aleatory] + ' ' + array4[aleatory] + "<br>";
});

