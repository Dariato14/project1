'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
});
// переменная, которая хранит текущий индекс первой карточки, отображаемой в слайдере. Изначально она равна 0, что означает, что первая карточка будет видна.
let currentIndex = 0; //индекс карточек
//объявляем переменную slider и сохраняем в нее все элементы на странице с классом treners__item

    const slider = document.querySelectorAll(".popular__cats__item");
// объявляем переменную prevButton и сохраняем в нее кнопку для перехода к предыдущей группе карточек
    const prevButton = document.querySelector(".popular__cats__left");
// объявляем переменную nextButton и сохраняем в нее кнопку для перехода к следующей группе карточек
    const nextButton = document.querySelector(".popular__cats__right");
//объявлем переменную для хранения количества отображаемых карточек
    const visibleCards = 3;
// функцию updateSlider() для первоначальной настройки отображения карточек. 
    updateSlider();

//функция когда нажата кнопка предыдущая (левая)
    prevButton.addEventListener("click", () => {
//условие если индекс у карточки(currentIndex) больше 0, то уменьшаем его на 1, чтобы показать предыдущую карточку.
        if (currentIndex > 0) {
            currentIndex--;
        } 
//условие переход к последним карточкам, если он уже находится на первой 
else {
            currentIndex = slider.length - visibleCards; 
        }
//после изменения индекса у карточки, вызываем функцию, чтобы обновить отображение карточек на экране.
        updateSlider();
    });

//функция когда нажата кнопка следующая (правая)
    nextButton.addEventListener("click", () => {
//условие если индекс у карточки(currentIndex) меньше,чем индекс первой карточки в последней группе, то мы можем увеличить currentIndex на 1 и перейти к следующей
        if (currentIndex < slider.length - visibleCards) {
            currentIndex++;
        } 
//условие если индекс у карточки(currentIndex) больше 0, то уменьшаем его на 1, чтобы показать предыдущую карточку.
else {
            currentIndex = 0; // Переход к началу карточек
        }
//после изменения индекса у карточки, вызываем функцию, чтобы обновить отображение карточек на экране.
        updateSlider();
    });

// создаем функцию, которая отвечает за обновление отображения карточек в слайдере
    function updateSlider() {
// проходим по каждому элементу массива slider, с помощью цикла forEach.  Внутри функции 2 переменные  item – текущая карточка, а index — его индекс в массиве.
        slider.forEach((item, index) => {
            // Проверяем, нужно ли показывать карточку (находится ли индекс карточки в пределах видимых карточек)
            if (index >= currentIndex && index < currentIndex + visibleCards) {
               // Показываем карточку, если условие выполняется 
item.style.display = "block"; 
            } 
// если условие не выполняется, скрываем карточку 
else {
                item.style.display = "none"; 
            }
        });
    }

    // ЗАДАНИЕ 3.4
    
 const cardsContainer = document.querySelector(".popular__cats");
     if (cardsContainer) {
        const dataTitleCards = [
            "Персидская",
            "Мейн-кун",
            "Рэгдолл",
            "Сиамская",
            "Абиссинская",
            "Британская короткошерстная",
            "Шотландская вислоухая",
            "Сфинкс",
            "Ориентальная",
        ];
const titleCards =
cardsContainer.querySelectorAll(".popular__cats__suptitle");
titleCards.forEach((item, index) => {
item.textContent = dataTitleCards[index];
});
}

//Объявляем переменную welcоmeButtonModal и сохраняем в нее кнопку c классом welcome__button
const welcоmeButtonModal = document.querySelector(".volonter__button");
//объявляем переменную modalApplication и сохраняем в нее модальное окно, которое хотим увидеть
const modalApplication = document.querySelector(".applications");

//Если есть такая кнопка и модальное окно
if (welcоmeButtonModal && modalApplication) {
//Для кнопки «Записаться на курс» добавляем обработчик события клика по этой кнопке:
    welcоmeButtonModal.addEventListener("click", () => {
// удаляем атрибут hidden у модального окна modalApplication и модальное окно становится видимым
      modalApplication.removeAttribute("hidden");
    });
}

// добавляем обработчик события при клике вне области формы. Тогда каждый раз, когда пользователь кликает где-либо на фоне вокруг появившейся формы, будет вызываться функция,
window.addEventListener("click", (event) => {
// проверяем, был ли клик на фоне модального окна
    if (event.target === modalApplication) {
//если условие выполняется, добавляем атрибут hidden у модального окна modalApplication и модальное окно становится невидимым
        modalApplication.setAttribute("hidden", true);
    }
});

 