const config = {
    formSelector: 'popup__form',
    inputSelector: 'popup__input',
    submitButtonSelector: 'popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_type_active',
};

const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
};

const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    if (errorElement !== /*не равно*/ null) {
        errorElement.textContent = "";
        errorElement.classList.remove(errorClass);
    };
    inputElement.classList.remove(inputErrorClass);
};

const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
    if (!inputElement.validity.valid) {
        const errorMessage = inputElement.validationMessage;
        showInputError(formElement, inputElement, errorMessage, inputErrorClass, errorClass);
    } else {
        hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const toggleButtonState = (inputList, saveButton, inactiveButtonClass) => {
    if (hasInvalidInput(inputList)) { // Если есть хотя бы один невалидный инпут
        saveButton.classList.add(inactiveButtonClass); // сделай кнопку неактивной
        saveButton.disabled = true; // saveButton.setAttribute("disabled", true);
    } else { // иначе сделай кнопку активной
        saveButton.classList.remove(inactiveButtonClass);
        saveButton.disabled = false; // saveButton.removeAttribute("disabled", true);
    }
};

const setEventListeners = (formElement, setEventListenersConfig) => {
    const { inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass } = setEventListenersConfig;
    const inputList = Array.from(formElement.querySelectorAll(`.${inputSelector}`));
    const saveButton = formElement.querySelector(`.${submitButtonSelector}`);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
            checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
            toggleButtonState(inputList, saveButton, inactiveButtonClass);
        });
    });
    toggleButtonState(inputList, saveButton, inactiveButtonClass);
};

const enableValidation = (validCofig) => {
    const { formSelector } = validCofig;
    const formList = Array.from(document.querySelectorAll(`.${formSelector}`));
    formList.forEach((formElement) => {
        setEventListeners(formElement, validCofig);
    });
};

//  очистка ошибок и установка состояния кнопки отправки формы
const cleanUpForm = (formElement, cleanUpConfig) => {
    const { inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass } = cleanUpConfig;
    const inputList = Array.from(formElement.querySelectorAll(`.${inputSelector}`));
    const saveButton = formElement.querySelector(`.${submitButtonSelector}`);
    inputList.forEach((inputElement) => {
        hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    });
    toggleButtonState(inputList, saveButton, inactiveButtonClass);
};

enableValidation(config);
