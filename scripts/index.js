// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector ('.places__list');

// @todo: Функция создания карточки
function createCard (name, link, deleteCard) {
    const placesItem = cardTemplate.querySelector('.places__item').cloneNode(true);
    const itemImage = placesItem.querySelector('.card__image');
        placesItem.querySelector('.card__title').textContent = name;
        itemImage.src = link;
        itemImage.alt = ('на фото ' + name);
    const deleteButton = placesItem.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', () => deleteCard(placesItem));
    return placesItem;
};

// @todo: Функция удаления карточки
function deleteCard (card) {
    card.remove();
};

// @todo: Вывести карточки на страницу
initialCards.forEach((el) => {
    placesList.append(createCard(el.name, el.link, deleteCard));
});