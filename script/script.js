const openPopap = document.querySelector('.profile__button-name'); // объявляем переменную для кнопки профиля
const closePopap = document.querySelector('.popap__close'); // объявляем переменную для крестика
const popap = document.querySelector('.popap'); // обявляем переменную для модалки 

//______________________________________________________________//
// События для вызова модалки и ее закрытия  
openPopap.addEventListener ('click', function(i) { /* отследили клик*/
    popap.classList.add/*присваиваем класс*/ ('active'); /* повеслил класс на форму*/
});

closePopap.addEventListener ('click', () => {
    popap.classList.remove /*удаляем класс*/('active'); /* При нажатии на крестик класс "active" убирается */
});

//______________________________________________________________//

const like = document.querySelector('.card__button-like'); // обявляем переменную для лайка

// События для поставки лайка 
like.addEventListener /*в ответ на действие*/  ('click', function(i) {
    like.classList.add/*присваиваем класс*/ ('active__like'); // при нажатии ставиться лайк (заливка)
});

//______________________________________________________________//

let formElement = document.querySelector ('.popap__form'); // Воспользуйтесь методом querySelector()

// Находим поля формы в DOM
let nameInput = document.querySelector ('.popap__input_name'); // это поле в форме
let jobInput = document.querySelector ('.popap__input_profession'); // это поле в форме
let profileTitle = document.querySelector ('.profile__title'); // это поле в профиле
let profileSubtitle = document.querySelector('.profile__subtitle') // это поле в профиле

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

        console.log (nameInput.value); // когда () что то делаю
        nameInput.value; //то что я ввожу в форме // получаю значения 
        jobInput.value; //то что я ввожу в форме

        profileTitle.textContent = nameInput.value;
        profileSubtitle.textContent  = jobInput.value;

        popap.classList.remove /*удаляем класс*/('active'); /* При нажатии на крестик класс "active" убирается */

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);