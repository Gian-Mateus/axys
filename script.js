// Efeito de transição do carrosel
// function getLastClass(array){
//     return array[array.length - 1]
// }
// function alternate(array){
//     const classAll = [array[0], array[1], array[2]];
//     for(i = 0; i < 3; i++){
//         classAll[(i + 1) % 3] = array[i];
//     };
//     return classAll;
// }

// function alternateItems(){
//     // aqui tenho que pegar o items[posição] para pegar a div e remover a última classe
//     // depois adicionar a classe modificada, tudo usando a mesma sequência de posições do array
//     const items = document.querySelectorAll(".item");
//     let lastClassItems = [getLastClass(items[0].classList), getLastClass(items[1].classList), getLastClass(items[2].classList)];
//     for(i = 0; i < 3; i++){
//         items[i].classList.remove(lastClassItems[i])
//     }
//     let newClasses = alternate(lastClassItems);
//     for(i = 0; i < 3; i++){
//         items[i].classList.add(newClasses[i])
//     }
//     lastClassItems = newClasses
// }
// setInterval(alternateItems, 2000);

