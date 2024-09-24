

const title = document.getElementById('title');

title.textContent = 'New Movie Franchise' ;
const mov = document.querySelectorAll('li');

mov.forEach(element => {
    let originalText = element.textContent;
    element.addEventListener('click',()=>{
        
        if(element.textContent === originalText){
            element.textContent = 'clicked';
        }else{
            element.textContent = originalText;
        } 
    })
});

const fav = document.getElementById('favorite_movies');
const old = document.getElementById('old_movie');

console.log('fav',fav)
console.log('old',old)
const changeBtn = document.querySelector('.change_btn');
const card = document.querySelector('.card');

console.log('card',card)

changeBtn.addEventListener('click',()=>{
    if(card.textContent === fav.textContent){
    let newer = fav.innerHTML;
    let older = old.innerHTML;
    fav.innerHTML = older;
    old.innerHTML = newer;
    }
})
