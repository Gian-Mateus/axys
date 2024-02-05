const titles = ['.strategy', '.efficiency', '.potential'];

// Função para alternar as classes
function alternateClasses(items, classes) {
    const newClasses = [classes[1], classes[2], classes[0]];
    items.forEach((item, index) =>{
      item.classList.remove(classes[index]);
      item.classList.add(newClasses[index])
    })
    return newClasses;
}

// Função para alternar os itens do carrossel
function alternateItems(){
    const items = document.querySelectorAll(".item");
    const lastClasses = [...items].map(item => item.classList.item(1));

    items.forEach((item, index) =>{
      item.classList.remove(lastClasses[index])
      const newClass = alternateClasses(items, lastClasses)[index]
      item.classList.add(newClass);
      
      // Mostrar título correspondente à imagem com a classe "front"
      if (newClass === 'front'){
        document.querySelector(titles[index]).style.display = "flex"
      } else {
        document.querySelector(titles[index]).style.display = "none"
      }
    })
}



    // setInterval(alternateItems, 3000);
