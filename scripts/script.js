
//ЗАДАНИЕ 3.1
'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
});
let currentIndex = 0; 
    const slider = document.querySelectorAll(".popular__cats__item");
    const prevButton = document.querySelector(".popular__cats__left");
    const nextButton = document.querySelector(".popular__cats__right");
    const visibleCards = 3;
    updateSlider();
    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
        } 
else {
            currentIndex = slider.length - visibleCards; 
        }
        updateSlider();
    });
    nextButton.addEventListener("click", () => {
        if (currentIndex < slider.length - visibleCards) {
            currentIndex++;
        } 
else {
            currentIndex = 0; 
        }
        updateSlider();
    });
    function updateSlider() {
        slider.forEach((item, index) => {
            if (index >= currentIndex && index < currentIndex + visibleCards) { 
item.style.display = "block"; 
            } 
else {
                item.style.display = "none"; 
            }
        });
    }
//ЗАДАНИЕ 3.2 и 3.3.1

//* 1. Начало.
//* 2. Получаем все элементы изображений с описанием.
//* 3. Для каждого изображения (проверяем, есть ли такие изображения)
 //*      3.1. Добавляем обработчик наведения курсора на изображение:
 //*          3.1.1. Да:
//*                3.1.1.1. показываем текст при наведении.
//*                3.1.2. нет: продолжаем.
//*        3.2. Добавляем обработчик курсор уходит с изображения:
//*            3.3.1. Да:
//*                3.3.1.1. Скрываем элемент с описанием.
//*            3.3.2. Нет: продолжаем.
//* 4. Конец


const intensiveImg = document.querySelectorAll('.cat-card');
intensiveImg.forEach((item, index) => {
    const intensiveText = document.querySelectorAll('.cat__description');
    item.addEventListener('mouseenter', () => {
        item.style.opacity = 0.5;
        intensiveText[index].removeAttribute('hidden');
    });
    item.addEventListener('mouseleave', () => {
        item.style.opacity = 1;
        intensiveText[index].setAttribute('hidden', true);
    });
});


//ЗАДАНИЕ 3.3 слайдер















    // ЗАДАНИЕ 3.4 ч1
    
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
            "Канадский сфинкс",
            "Ориентальная",
        ];
const titleCards =
cardsContainer.querySelectorAll(".popular__cats__suptitle");
titleCards.forEach((item, index) => {
item.textContent = dataTitleCards[index];
});
}

//ЗАДАНИЕ 3.4 ч2


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

 //ЗАДАНИЕ 3.5 ч1

 // Объявляем переменную cardsBreeds и сохраняем в нее элемент с классом breeds
const cardsBreeds = document.querySelector('.breeds');

// Если такой элемент существует
if (cardsBreeds) {
    // Объявляем переменную breedsList и сохраняем в нее элемент с классом breeds__list, чтобы мы могли добавить новые элементы
    const breedsList = cardsBreeds.querySelector('.breeds__list');

    // Создаем объект cardsBreedsData, который содержит данные для трех карточек.
    const cardsBreedsData = {
        breed1: {
            image: 'images/savanna.jpg',
            name: 'Саванна',
            price: '1 300 000 руб',
            description: 'Саванна – близкий родственник африканского сервала. Это не только одна из самых дорогих кошек, но и одна из самых больших.',
           
        },
        breed2: {
            image: 'images/karaket.jpg',
            name: 'Каракет',
            price: '900 000 руб',
            description: 'Каракет – самая крупная домашняя кошка, полученная в результате скрещивания домашней кошки со степной рысью.',
            
        },
        breed3: {
            image: 'images/chauzy.jpg',
            name: 'Чаузи',
            price: '1 000 000 руб',
            description: 'Чаузи, обладая внешностью маленькой версии дикой пумы, имеет дружелюбный характер.',
           
        }
    };

    // Создаем функцию createCard, которая будет добавлять карточку. Внутри функции 4 переменные: image, name, price, description
    const createCard = (image, name, price, description) => {
        // Создаем переменную card, которая будет содержать HTML-код карточки и вставляем туда 4 переменные
        const card = `
            <div class="breeds__card">
                <img class="breeds__image" src="${image}" alt="${name}" width="200">
                <h3 class="breeds__name">${name}</h3>
                <p class="breeds__price">${price}</p>
                <p class="breeds__description">${description}</p>
            </div>
        `;
        // Возвращаем значение переменной card
        return card;
    };

    // Создаем цикл for и проходим по всем элементам объекта cardsBreedsData.
    for (const cardKey in cardsBreedsData) {
        // Получаем данные одной карточки из объекта cardsBreedsData 
        const card = cardsBreedsData[cardKey];
        // создаем переменную cardElement и вызываем функцию createCard, куда передаем изображение, название, цену, описание и кнопку
        const cardElement = createCard(card.image, card.name, card.price, card.description, card.button);
        // с помощью метода insertAdjacentHTML добавляем созданный HTML-код в конец списка breedsList.
        breedsList.insertAdjacentHTML('beforeend', cardElement);
    }
}


//ЗАДАНИЕ 3.5 ч2

const headerMenu = document.querySelector('.header__menu');
if (headerMenu){
        const headerList = headerMenu.querySelector('.header__list');
        const menuData = {
            link1: {
                link: '#',
                title: 'Главная',
            },
            link2: {
                link: '#',
                title: 'О нас',
            },
            link3: {
                link: '#',
                title: 'Контакты',
            }
        }
        const createLink = (UrlLink, title) =>{
            const link = `
            <li class="menu__item"><a href="${UrlLink}" class="menu__link">${title}</a></li>
            `;
            return link;
        }
        for (const linkItem in menuData) {
            const link = menuData[linkItem];
            const linkIndex = createLink(link.UrlLink, link.title);
            headerList.insertAdjacentHTML('beforeend', linkIndex);

        }
}

//ЗАДАНИЕ 3.6

const cardsImages = document.querySelector(".images");
if (cardsImages) {
    const cardListImages = cardsImages.querySelector(".images__list");
    const apiUrl = "images.json";
    const createCard = (imageUrl, imageAlt, imageWidth) => {
        const image = `
        <li class="images__item">
            <img class="images__picture" src="${imageUrl[0]}" alt="${imageAlt}" width="${imageWidth}">
            <img class="images__picture" src="${imageUrl[1]}" alt="${imageAlt}" width="${imageWidth}" style="display: none;">
        </li>
    `;

        return image;
    };
    fetch(apiUrl)
    .then((response) => response.json())
    .then((images) => {
        console.log(images); 
        console.log(typeof images); 
        images.forEach((item) => {
            const cardElement = createCard(
                item.imageUrl,
                item.imageAlt,
                item.imageWidth
            );
            cardListImages.insertAdjacentHTML("beforeend", cardElement);
        });
        const pictures = document.querySelectorAll(".images__picture");
if (pictures) {
    pictures.forEach((picture) => {
        picture.addEventListener("click", () => {
            const parentItem = picture.parentElement;
            const parentPictures =
                parentItem.querySelectorAll(".images__picture");
            parentPictures.forEach((siblingPicture) => {
                if (siblingPicture !== picture) {
                    siblingPicture.style.display = "block"; 
                } else {
                    siblingPicture.style.display = "none"; 
                }
            });
        });
    });
}
     });

}
           
