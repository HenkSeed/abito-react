// Кнопка поиска
const btnSearch = document.querySelector(".search-btn");

// Поле ввода (input)
const searchInput = document.querySelector(".search-box input");

// Обёртка группы карточек
const cardWrapper = document.querySelector(".content-main__list");

// Массив информации по карточкам
const cardArray = [
  {
    id: 0,
    title: "Товар первый",
    price: "170 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    imgSrc: "./image/card_img.png",
    imgAlt: "Card Image",
  },
  {
    id: 1,
    title: "Товар второй",
    price: "171 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    imgSrc: "./image/card_img.png",
    imgAlt: "Card Image",
  },
  {
    id: 2,
    title: "Товар третий",
    price: "172 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    imgSrc: "./image/card_img.png",
    imgAlt: "Card Image",
  },
  {
    id: 3,
    title: "Товар четвёртый",
    price: "173 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    imgSrc: "./image/card_img.png",
    imgAlt: "Card Image",
  },
  {
    id: 4,
    title: "Товар пятый",
    price: "174 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    imgSrc: "./image/card_img.png",
    imgAlt: "Card Image",
  },
  {
    id: 5,
    title: "Товар шестой",
    price: "175 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    imgSrc: "./image/card_img.png",
    imgAlt: "Card Image",
  },
];

// Функция вывода карточек на страницу
const render = (array) => {
  cardWrapper.innerHTML = "";

  array.forEach((card, index) => {
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `
      <a href="./product.html" class="content-main__list-item">
         <div class="content-main__list-item--img">
            <img src="${card.imgSrc}" alt="${card.imgAlt}">
         </div>

         <h5 class="content-main__list-item--title">
            ${card.title}
         </h5>

         <strong class="content-main__list-item--price">${card.price}</strong>

         <div class="content-main__list-item--desc-block">
            <span class="content-main__list-item--desc">${card.address}</span>
            <span class="content-main__list-item--desc">${card.date}</span>
         </div>
      </a>
         `
    );
  });
};

// Функция, выводящая отфильтрованный массив
const filteredArray = (array, value) => {
  console.log("array: ", array);
  console.log("value: ", value);

  return array.filter((item) => {
    return item.title.includes(value) || item.price.includes(value);
  });
};

// Изменяем группировку карточек, прижимая их влево
cardWrapper.style.justifyContent = "flex-start";
// Задаём отступ между карточками
cardWrapper.style.gap = "30px";

// Выводим карточки на страницу, вызывая соответствующую функцию
render(cardArray);

// Отслеживаем нажатие на кнопку поиска
btnSearch.addEventListener("click", () => {
  render(filteredArray(cardArray, searchInput.value));
});
