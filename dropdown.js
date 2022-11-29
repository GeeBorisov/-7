var accItem = document.getElementsByClassName('accordion__item');
var accHD = document.getElementsByClassName('accordion__title');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordion__item close';
    }
    if (itemClass == 'accordion__item close') {
        this.parentNode.className = 'accordion__item open';
    }
}