import { App } from "./App.js";
import { render } from "lit-html";
import { observable, observe } from "@nx-js/observer-util";
import { isValidBirthdate } from "./dateFns.js";

const store = observable({
  yourBirthday: "",
  theirName: "",
  theirBirthday: "",
  step: "",
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

observe(() => render(App(store, actions), document.querySelector("#app")));

export { actions };
