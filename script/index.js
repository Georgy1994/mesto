const openPopup = document.querySelector('.profile__button-name'); // объявляем переменную для кнопки профиля
const closePopup = document.querySelector('.popup__close'); // объявляем переменную для крестика
const popup = document.querySelector('.popup'); // обявляем переменную для модалки 

//______________________________________________________________//
// События для вызова модалки и ее закрытия  
openPopup.addEventListener ('click', function togglePopup() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    popup.classList.toggle('popup_opened');
});

closePopup.addEventListener ('click', () => {
    popup.classList.remove /*удаляем класс*/('popup_opened'); /* При нажатии на крестик класс "active" убирается */
});

//______________________________________________________________//

let formElement = document.querySelector ('.popup__form'); // Воспользуйтесь методом querySelector()

// Находим поля формы в DOM
let nameInput = document.querySelector ('.popup__input_name'); // это поле в попапе
let jobInput = document.querySelector ('.popup__input_profession'); // это поле в попапе
let profileTitle = document.querySelector ('.profile__title'); // это поле в профиле
console.log(profileTitle);
let profileSubtitle = document.querySelector('.profile__subtitle') // это поле в профиле
console.log(profileSubtitle);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет

function togglePopup() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    popup.classList.toggle('popup_opened');
}

formElement.addEventListener('submit', togglePopup);

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

        //console.log (nameInput.value); // когда () что то делаю
        nameInput.value; //то что я ввожу в форме // получаю значения 
        jobInput.value; //то что я ввожу в форме

        profileTitle.textContent = nameInput.value; // текст в профиле = тексту которое ввели в попапе
        profileSubtitle.textContent = jobInput.value;// текст в профиле = тексту которое ввели в попапе

        popup.classList.remove /*удаляем класс*/('popup_opened'); /*закрываем попап после заполнения*/
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);


