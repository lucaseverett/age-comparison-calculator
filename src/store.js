import { reactive } from "@vue/reactivity/dist/reactivity.esm-browser.js";
import { isValidBirthdate } from "./dateFns.js";

const store = reactive({
  yourBirthday: "",
  theirName: "",
  theirBirthday: "",
  step: 1,
  errorMessage: "",
});

function setStep(nextStep) {
  store.step = nextStep;
  if (nextStep === 3) {
    document.querySelector("input#their-name").focus();
  }
}

function handleYourBirthday(e) {
  store.yourBirthday = e.target.value;
  if (!isValidBirthdate(e.target.value)) {
    store.errorMessage = "Birthday must be in the past.";
  } else {
    store.errorMessage = "";
  }
}

function handleTheirName(e) {
  store.theirName = e.target.value;
}

function handleTheirBirthday(e) {
  store.theirBirthday = e.target.value;
  if (!isValidBirthdate(e.target.value, store.yourBirthday)) {
    store.errorMessage = "Their birthday must be before your birthday.";
  } else {
    store.errorMessage = "";
  }
}

function startOver() {
  store.step = 1;
  store.yourBirthday = "";
  store.theirBirthday = "";
  store.theirName = "";
  store.errorMessage = "";
}

const actions = {
  setStep,
  handleYourBirthday,
  handleTheirName,
  handleTheirBirthday,
  startOver,
};

export { store, actions };
