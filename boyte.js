//Dropdown click
const  navbarMoreDropdown = document.querySelector('.js__navbar__more__btn')
// Dong Mo BuyTicketModal
const buyBtns = document.querySelectorAll('.js__buy__ticket');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.js__modal__close');

function showModal(){
    modal.classList.add('open');
}

function closeModal(){
    modal.classList.remove('open');
}

for(const buyBtn of buyBtns){
    buyBtn.addEventListener('dblclick',showModal)
}

modalCloseBtn.addEventListener('click',closeModal);