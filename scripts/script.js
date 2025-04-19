
//ЗАДАНИЕ 3.1
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

        // Пример URL для получения данных с сервера
        const apiUrl = "images.json";

        // Функция для создания карточки
        const createCard = (imageUrl, imageAlt, imageWidth) => {
            // Шаблонные строки и подстановки
            const image = `
            <li class="images__item">
                <img class="images__picture" src="${imageUrl[0]}" alt="${imageAlt}" width="${imageWidth}">
                <img class="images__picture" src="${imageUrl[1]}" alt="${imageAlt}" width="${imageWidth}" style="display: none;">
            </li>
        `;

            return image;
        };
        // Загрузка данных с сервера
        fetch(apiUrl)
            .then((response) => response.json())
            .then((images) => {
                console.log(images); // Данные
                console.log(typeof images); // Тип полученных данных

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
    // Перебираем каждое изображение
    pictures.forEach((picture) => {
        picture.addEventListener("click", () => {
            // Получаем родительский элемент (li)
            const parentItem = picture.parentElement;

            // Получаем все изображения в родительском элементе
            const parentPictures =
                parentItem.querySelectorAll(".images__picture");

            // Переключаем видимость изображений
            parentPictures.forEach((siblingPicture) => {
                if (parentPictures !== picture) {
                    parentPictures.style.display = "block"; // Показываем другое изображение
                } else {
                    parentPictures.style.display = "none"; // Скрываем текущее изображение
                }
            });
        });
    });
}

             });

    }
