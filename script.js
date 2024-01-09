// Efeito de transição do carrosel
function getLastClass(array){
    return array[array.length - 1]
}
function alternate(array){
    const classAll = [array[0], array[1], array[2]];
    for(i = 0; i < 3; i++){
        classAll[(i + 2) % 3] = array[i];
    };
    return classAll;
}

function alternateItems(){
    // aqui tenho que pegar o items[posição] para pegar a div e remover a última classe
    // depois adicionar a classe modificada, tudo usando a mesma sequência de posições do array
    const items = document.querySelectorAll(".item");
    let lastClassItems = [getLastClass(items[0].classList), getLastClass(items[1].classList), getLastClass(items[2].classList)];
    
    for(i = 0; i < 3; i++){
        items[i].classList.remove(lastClassItems[i])
    }
    
    let newClasses = alternate(lastClassItems);
    
    for(i = 0; i < 3; i++){
        items[i].classList.add(newClasses[i])
    }

    let titles = ['.strategy', '.efficiency', '.potential']

    let newItems = []
    for(i = 0; i < 3; i++){
        newItems[i] = items[i].classList;
    }

        if(newItems[0][2] == 'front'){
            document.querySelector(titles[1]).style.display = "flex"
            document.querySelector(titles[0]).style.display = "none"
            document.querySelector(titles[2]).style.display = "none"
            
        } else if(newItems[1][2] == 'front'){
            document.querySelector(titles[0]).style.display = "flex"
            document.querySelector(titles[1]).style.display = "none"
            document.querySelector(titles[2]).style.display = "none"
        } else if(newItems[2][2] == 'front'){
            document.querySelector(titles[2]).style.display = "flex"
            document.querySelector(titles[1]).style.display = "none"
            document.querySelector(titles[0]).style.display = "none"
        }

    lastClassItems = newClasses
}

setInterval(alternateItems, 3500);

// Efeeito do Scroll
// document.querySelector("header a").addEventListener("click", function(event) {
//     event.preventDefault();

//     var target = event.target;
//     var targetId = target.getAttribute("href");

//     document.querySelector(targetId).scrollIntoView({
//         behavior: "smooth",
//     });
// });

/* Animação NavBar */

const btnNav = document.querySelector("#btn-nav");
const navBar = document.querySelector("#container-header");

btnNav.addEventListener('click', () =>{
    if (navBar.classList.contains("onAnimate")){
        navBar.classList.remove("onAnimate")
        navBar.classList.add("offAnimate");
        setInterval(() =>{
            navBar.style.display = "none"
        }, 1000)
    } else{
        navBar.style.display = "block";
        navBar.classList.remove("offAnimate")
        navBar.classList.add("onAnimate");
    }
})


function alterClasses(){

        if(navBar.classList.contains("onAnimate")){
            navBar.classList.remove("onAnimate")
            navBar.classList.add("offAnimate");
        }

}