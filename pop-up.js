/* POPUP */
const openPopUp = document.getElementById('open-submit');
const closePopUp = document.getElementById('submit-close');
const popUp = document.getElementById('submit__pop-up');
const calculate = document.getElementById('btn--submit');


openPopUp.addEventListener('click', function(e) {
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})

calculate.addEventListener('click', () => {
    popUp.classList.remove('active');
})


/* NUMBER */

/* Ввод только чисел */
document.getElementById('number').onkeydown = function (e) {
    return !(/^[А-Яа-яA-Za-z ]$/.test(e.key));
}
/* Ограничить кол-во символов */
document.getElementById('number').oninput = function () {
    if (this.value.length > 7) this.value = this.value.substr(0, 12);}


    /* POPUP  2*/
const openPop = document.getElementById('calculate-open');
const closePop = document.getElementById('calculate-close');
const pop = document.getElementById('calculate__pop-up');
const btn = document.getElementById('btn--calculate');

openPop.addEventListener('click', function(e) {
    e.preventDefault();
    pop.classList.add('active');
})

closePop.addEventListener('click', () => {
    pop.classList.remove('active');
})

btn.addEventListener('click', () => {
    pop.classList.remove('active');
})