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




//Переменные для формы профиля
const popupOpenProfile = document.querySelector('.profile__button-name'); // объявляем переменную для кнопки открытия профиля
const popupProfile = document.querySelector('.popup_change-profile'); // обявляем переменную для названия попапа профиля
const popupProfileForm = document.querySelector('.popup__form'); // переменная обертки попапа
const popupProfileNameInput = popupProfileForm.querySelector('.popup__input_name'); //переменная поля имени
const popupProfileAboutTextInput = popupProfileForm.querySelector('.popup__input_profession');// переменная род занятия 
const popupCloseForm = document.querySelector('.popup__close'); // объявляем переменную для крестика (закрытия формы)
const profileName = document.querySelector('.profile__title'); //переменная для имени профиля
const profileAboutText = document.querySelector('.profile__subtitle');//пременная для текста профиля 
//______________________________________________________________//

//переменная для общей функции (используй для закрытия и открытия)
const popupAnyArray = Array.from(document.querySelectorAll('.popup'));

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

//функция закрытия нажатием ESC
function handleEscClose(event) {
    if (event.key === 'Escape') {
        closePopup(popupAnyArray.find(function (popup) {
            return popup.classList.contains('popup_opened');
        }));
    }
}

//закрытие при клике на оверлей
function handleOverlayClose(event) {
    if (event.target === event.currentTarget) {
        closePopup(event.target);
    }
}

// функции для открытия и закрытия всех попапов
function openPopup(popupAny) {
    document.addEventListener('keydown', handleEscClose);
    popupAny.addEventListener('click', handleOverlayClose);
    popupAny.classList.add('popup_opened');
}
function closePopup(popupAny) {
    popupAny.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscClose);
    popupAny.removeEventListener('click', handleOverlayClose);
}

//______________________________________________________________//
//открытие попапа с фото
function handleImageClick({ name, link }) {
    popupFullPhotoItem.src = link;
    popupFullPhotoItem.alt = name;
    popupFullPhotoSubtitle.textContent = name;
    openPopup(popupFullPhoto);
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
    elementPhoto.addEventListener('click', () => handleImageClick({ name, link }));
    return element;
}
//______________________________________________________________//

//размещение фото в контейнер для карточек
function renderElement(elementItem) {
    elementsContainer.prepend(createElement(elementItem));
}

//создать карточку из массива данных (по шаблону)
initialCards.reverse().forEach(function (item) {
    renderElement(item);
});
//______________________________________________________________//

//отправка формы добавления карточки пользователя
function handleNewItemSubmit(evt) {
    evt.preventDefault();
    renderElement({ name: popupNewItemTitleInput.value, link: popupNewItemSrcInput.value });
    closePopup(popupNewItem);
}

//отправка формы редактирования профиля
function handleProfileSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = popupProfileNameInput.value;
    profileAboutText.textContent = popupProfileAboutTextInput.value;
    closePopup(popupProfile);
}
//______________________________________________________________//
//______________________________________________________________//
//______________________________________________________________//
//______________________________________________________________//



// 1 слушатель вызова функции открытия попапа добавления ФОТО пользователя
popupNewItemBtn.addEventListener('click', function () {
    popupNewItemForm.reset();
    cleanUpForm(popupNewItemForm, config);
    openPopup(popupNewItem);
});
//2 слушатель вызова функции закрытия попапа добавления ФОТО пользователя
popupNewItemCloseBtn.addEventListener('click', function () {
    closePopup(popupNewItem);
});
// 3 слушатель вызова функции добавления карточки пользователя
popupNewItemForm.addEventListener('submit', handleNewItemSubmit);
//______________________________________________________________//


// 4 слушатель вызова функции ЗАКРЫТИЯ попапа ПОЛНОГО ОТКРЫТИЯ фото
popupFullPhotoCloseBtn.addEventListener('click', function () {
    closePopup(popupFullPhoto);
});
//______________________________________________________________//


//слушатель вызова функции открытия попапа редактирования профиля
popupOpenProfile.addEventListener('click', function () {
    popupProfileNameInput.value = profileName.textContent;
    popupProfileAboutTextInput.value = profileAboutText.textContent;
    cleanUpForm(popupProfileForm, config);
    openPopup(popupProfile);
});

console.log(popupOpenProfile)
// слушатель вызова функции закрытия попапа редактирования профиля
popupCloseForm.addEventListener('click', function () {
    closePopup(popupProfile);
});
//слушатель вызова функции редактирования профиля
popupProfileForm.addEventListener('submit', handleProfileSubmit);
/**/