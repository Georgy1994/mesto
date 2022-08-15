const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

//контейнер для карточек и шаблон
const elementsContainer = document.querySelector('.cards');/*переменная для секции с карточками (шаблон)*/
const templateContent = document.querySelector('.template-item').content;/*переменная для шаблона*/
//______________________________________________________________//


//попап создания карточки и ее открытия
const popupNewItemBtn = document.querySelector('.profile__button-new-card');/*переменная для кнопки открытия попапа для добавления карточки*/
const popupNewItem = document.querySelector('.popup_add-item');/*кнопка открытия попапа для добавления фото*/
const popupNewItemCloseBtn = popupNewItem.querySelector('.popup__close');/*переменная для закрытия формы (для крестика)*/
const popupNewItemForm = popupNewItem.querySelector('.popup__form');/*переменная для формы*/
const popupNewItemTitleInput = popupNewItemForm.querySelector('.popup__input_name');/*переменная для поля имени*/
const popupNewItemSrcInput = popupNewItemForm.querySelector('.popup__input_profession');/*переменная для текста*/
//______________________________________________________________//


//попап полного открытия фото и кнопка его закрытия
const popupFullPhoto = document.querySelector('.popup_type_photo');/*переменная для попапа с фото*/
const popupFullPhotoCloseBtn = popupFullPhoto.querySelector('.popup__close');/*закрытие*/
const popupFullPhotoItem = popupFullPhoto.querySelector('.popup__image');/*картинка*/
const popupFullPhotoSubtitle = popupFullPhoto.querySelector('.popup__subtitle');/*подпись*/
//______________________________________________________________//


//Общая переменная для ВСЕХ попапов
/*const popupAny = document.querySelector('.popup');*/

//Переменные для формы профиля
const popupOpenProfile = document.querySelector('.profile__button-name'); // объявляем переменную для кнопки открытия профиля
const popupProfile = document.querySelector('.popup_change-profile'); // обявляем переменную для названия попапа профиля
const popupProfileForm = document.querySelector('.popup__wraper'); // переменная обертки попапа
const popupProfileNameInput = popupProfileForm.querySelector('.popup__input_name'); //переменная поля имени
const popupProfileAboutTextInput = popupProfileForm.querySelector('.popup__input_profession');// переменная род занятия 
const popupCloseForm = document.querySelector('.popup__close'); // объявляем переменную для крестика (закрытия формы)
const profileName = document.querySelector('.profile__title'); //переменная для имени профиля
const profileAboutText = document.querySelector('.profile__subtitle');//пременная для текста профиля 
//______________________________________________________________//


//функция лайка
function handleElementLikeBtn(evt) {
    evt.target.classList.toggle('element__like_active');
}
//______________________________________________________________//


//функция удаления карточки
function handleElementDeleteBtn(evt) {
    evt.target.closest('.element').remove();
}
//______________________________________________________________//


//Создать карточку из шаблона
function createElement({ name, link }) {
    const element = templateContent.querySelector('.element').cloneNode(true);
    const elementPhoto = element.querySelector('.element__image');
    const elementTitle = element.querySelector('.element__title');
    const elementDeleteBtn = element.querySelector('.element__delete');
    const elementLikeBtn = element.querySelector('.element__like');
    elementTitle.textContent = name;
    elementPhoto.src = link;
    elementPhoto.alt = name;
    elementDeleteBtn.addEventListener('click', handleElementDeleteBtn);
    elementLikeBtn.addEventListener('click', handleElementLikeBtn);
    elementPhoto.addEventListener('click', () => expandPhotoHandler({ name, link }));
    return element;
}
//______________________________________________________________//

//создать карточку из массива данных (по шаблону)
initialCards.forEach(function (item) {
    const elementItem = createElement(item);
    renderElement(elementItem);
});
//______________________________________________________________//

//функция размецения карточки в начало
function addUserElement(newUserElement) {
    elementsContainer.prepend(newUserElement);
}
//______________________________________________________________//

//функция размещения карточки из массива данных в секцию для карточек
function renderElement(arrayElement) {
    elementsContainer.append(arrayElement);
}
//______________________________________________________________//


//отправка формы добавления карточки пользователя
function submitPopupNewItemFormHandler(evt) {
    evt.preventDefault();
    const newElementItem = createElement({ name: popupNewItemTitleInput.value, link: popupNewItemSrcInput.value });
    addUserElement(newElementItem);
    closePopup(popupNewItem);
    popupNewItemForm.reset();
}
//______________________________________________________________//

//открытие попапа фото и внесения данных
function expandPhotoHandler({ name, link }) {
    openPopup(popupFullPhoto);
    popupFullPhotoItem.src = link;
    popupFullPhotoItem.alt = name;
    popupFullPhotoSubtitle.textContent = name;
}
//______________________________________________________________//

//отправка формы редактирования профиля
function submitPopupProfileFormHandler(evt) {
    evt.preventDefault();
    profileName.textContent = popupProfileNameInput.value;
    profileAboutText.textContent = popupProfileAboutTextInput.value;
    closePopup(popupProfile);
}
//______________________________________________________________//


// функции для открытия и закрытия всех попапов
function openPopup (popupAny) {
    popupAny.classList.add('popup_opened');
}
function /*popupClose*/ closePopup(popupAny) {
    popupAny.classList.remove('popup_opened');
}

//______________________________________________________________//
//слушатель вызова функции открытия попапа добавления ФОТО пользователя
popupNewItemBtn.addEventListener('click', function () {
    openPopup(popupNewItem);
});
//слушатель вызова функции закрытия попапа добавления ФОТО пользователя
popupNewItemCloseBtn.addEventListener('click', function () {
    closePopup(popupNewItem);
});
//слушатель вызова функции добавления карточки пользователя
popupNewItemForm.addEventListener('submit', submitPopupNewItemFormHandler);
//______________________________________________________________//


//слушатель вызова функции ЗАКРЫТИЯ попапа ПОЛНОГО ОТКРЫТИЯ фото
popupFullPhotoCloseBtn.addEventListener('click', function () {
    closePopup(popupFullPhoto);
});
//______________________________________________________________//



//слушатель вызова функции открытия попапа редактирования профиля
popupOpenProfile.addEventListener('click', function () {
    openPopup(popupProfile);
    popupProfileNameInput.value = profileName.textContent;
    popupProfileAboutTextInput.value = profileAboutText.textContent;
});
// слушатель вызова функции закрытия попапа редактирования профиля
popupCloseForm.addEventListener('click', function () {
    closePopup(popupProfile);
});
//слушатель вызова функции редактирования профиля
popupProfileForm.addEventListener('submit', submitPopupProfileFormHandler);
/**/