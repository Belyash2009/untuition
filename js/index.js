let template = `<div class="box ">5</div>`;
let cards = document.querySelector(`.cards`);
let numbers = [];
let header=document.querySelector(`.header`);
for (let i = -4; i <= 4; i++) {
    numbers.push(i);

}
numbers.sort(() => Math.random() - 0.5);

for (let i = 0; i <numbers.length; i++){
    cards.innerHTML += `<div class="box box-closed">${numbers[i]}</div>`
}
let boxes =document.querySelectorAll(`.box`)
for (let i = 0; i < boxes.length; i++){
    let box=boxes[i];
    box.addEventListener(`click`, function(){
        box.classList.remove(`box-closed`);
        if(numbers[i]>= 0){
            header.innerHTML =`you win!`
        }else{
            header.innerHTML = `you lose!`
        }
        

    })
}