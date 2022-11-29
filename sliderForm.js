/* Устанавливаем стартовый индекс слайда по умолчанию: */
let formIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showForms(formIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextForm() {
    showForms(formIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousForm() {
    showForms(formIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentForm(n) {
    showForms(formIndex = n);
}

/* Функция перелистывания: */
function showForms(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let forms = document.getElementsByClassName("account__wrapper");

    /* Проверяем количество слайдов: */
    if (n > forms.length) {
        formIndex = 1
    }
    if (n < 1) {
        formIndex = forms.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let form of forms) {
        form.style.display = "none";
    }
    /* Делаем элемент блочным: */
    forms[formIndex - 1].style.display = "block"; 
}


/* photo */
$(document).ready(function() {
    $('input[type="file"]').change(function(e) {
        var nameFile = e.target.files[0].name;
        $(".name-file").text(nameFile);

    });

     $('body').on('click','#delete',function() { 
        alert('Вы действительно хотите удалить файл?');
        $("#nameFile")[0].value = "";
    });

});