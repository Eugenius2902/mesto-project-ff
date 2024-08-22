// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector ('.places__list');

// @todo: Функция создания карточки
function createCard (name, link, deleteCard) {
    const placesItem = cardTemplate.querySelector('.places__item').cloneNode(true);
        placesItem.querySelector('.card__title').textContent = name;
        placesItem.querySelector('.card__image').src = link;
        placesList.append(placesItem);
    const deleteButton = placesItem.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteCard);
    return placesItem;
};

// @todo: Функция удаления карточки
function deleteCard (evt) {
    const eventTarget = evt.target;
    const card = eventTarget.closest('.places__item');
    card.remove();
};

// @todo: Вывести карточки на страницу
initialCards.forEach((el) => {
    placesList.append(createCard(el.name, el.link, deleteCard));
});