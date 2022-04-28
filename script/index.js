const openPopup = document.querySelector('.profile__button-name'); // объявляем переменную для кнопки профиля
const closePopup = document.querySelector('.popup__close'); // объявляем переменную для крестика
const popup = document.querySelector('.popup'); // обявляем переменную для модалки 

//______________________________________________________________//
// События для вызова модалки и ее закрытия  
openPopup.addEventListener ('click', function(i) { /* отследили клик*/
    popup.classList.add/*присваиваем класс*/ ('active'); /* повеслил класс на форму*/
});

closePopup.addEventListener ('click', () => {
    popup.classList.remove /*удаляем класс*/('active'); /* При нажатии на крестик класс "active" убирается */
});

//______________________________________________________________//

const like = document.querySelector('.card__button-like'); // обявляем переменную для лайка

// События для поставки лайка 
like.addEventListener /*в ответ на действие*/  ('click', function(i) {
    like.classList.add/*присваиваем класс*/ ('active__like'); // при нажатии ставиться лайк (заливка)
});

//______________________________________________________________//

let formElement = document.querySelector ('.popup__form'); // Воспользуйтесь методом querySelector()

// Находим поля формы в DOM
let nameInput = document.querySelector ('.popup__input_name'); // это поле в попапе
let jobInput = document.querySelector ('.popup__input_profession'); // это поле в попапе
let profileTitle = document.querySelector ('.profile__title'); // это поле в профиле
let profileSubtitle = document.querySelector('.profile__subtitle') // это поле в профиле

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

        //console.log (nameInput.value); // когда () что то делаю
        nameInput.value; //то что я ввожу в форме // получаю значения 
        jobInput.value; //то что я ввожу в форме

        profileTitle.textContent = nameInput.value; // текст в профиле = тексту которое ввели в попапе
        profileSubtitle.textContent = jobInput.value;// текст в профиле = тексту которое ввели в попапе

        popup.classList.remove /*удаляем класс*/('active'); /*закрываем попап после заполнения*/
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);