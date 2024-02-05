function alterAnimations(){
    const itemsImg = document.querySelectorAll(".item");
    const lastClass = [];
    itemsImg.forEach((e, index) => {
        lastClass[index] = e.classList.item(2)
    });
    
    const lastClassAlter = [lastClass[2],lastClass[0], lastClass[1]];
    
    itemsImg.forEach((e, index) => {
        e.classList.remove(e.classList.item(2));
        e.classList.add(lastClassAlter[index]);
        
        if(e.classList.contains('efficiencyImg') && e.classList.contains('front')){
            document.querySelector('.efficiency').style.display = 'flex'
            document.querySelector('.strategy').style.display = 'none'
            document.querySelector('.potential').style.display = 'none'
        } 
        
        if(e.classList.contains('strategyImg') && e.classList.contains('front')){
            document.querySelector('.strategy').style.display = 'flex'
            document.querySelector('.efficiency').style.display = 'none'
            document.querySelector('.potential').style.display = 'none'
        } 
        
        if(e.classList.contains('potentialImg') && e.classList.contains('front')){
            document.querySelector('.potential').style.display = 'flex'
            document.querySelector('.strategy').style.display = 'none'
            document.querySelector('.efficiency').style.display = 'none'
        }
    });
};
setInterval(alterAnimations, 2500);