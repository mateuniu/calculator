function showModal(e) {
  const currentInput = e.currentTarget;
  const currentInputValue = e.currentTarget.value; 

  if (!currentInputValue) {
    notificationBack.classList.add("notification--visible");
    notificationFrontTitle.classList.add('blinkTitle');
    currentInput.classList.add("form__section__input--unfilled");
  }
  else {
    currentInput.classList.remove("form__section__input--unfilled");
  }
}

function hideModal() {
  notificationBack.classList.remove("notification--visible");
  notificationFrontTitle.classList.remove('blinkTitle');
}

allInputs.forEach(input => input.addEventListener("blur", showModal));
notificationBack.addEventListener("click", hideModal);

