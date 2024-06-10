function handleSecondButton() {
  const buttonTwo = document.querySelector(".js-button-sec");
  buttonTwo.addEventListener("click", () => {
    const input = document.querySelector(".sec-input");
    const errorTextTwo = input.parentElement.querySelector(".error-msg-two");

    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (input.value.trim().length < 1 || !emailRegex.test(input.value)) {
      errorTextTwo.classList.add("active");
      console.log("test");
    } else {
      errorTextTwo.classList.remove("active");
    }
  });
}
function handleFirstButton() {
  const button = document.querySelector(".js-button");
  button.addEventListener("click", () => {
    const input = document.querySelector(".email-input");
    const errorText = input.parentElement.querySelector(".error-msg");

    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (input.value.trim().length < 1 || !emailRegex.test(input.value)) {
      input.classList.add("active");
      errorText.classList.add("active");
    } else {
      input.classList.remove("active");
      errorText.classList.remove("active");
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  handleFirstButton();
  handleSecondButton();
});
