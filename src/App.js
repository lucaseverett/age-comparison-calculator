import { html } from "lit-html";
import { css } from "emotion";
import { Step1 } from "./Step1.js";
import { Step2 } from "./Step2.js";
import { Step3 } from "./Step3.js";
import { Step4 } from "./Step4.js";

const styles = css`
  height: 100vh;
  display: grid;
  place-items: center;
  padding: 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (prefers-color-scheme: light) {
    background-color: #f5f5f5;
    color: #000;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #212121;
    color: #fff;
  }
`;

function App(store, actions) {
  const { step } = store;

  function content() {
    if (step === 1) {
      return Step1(store, actions);
    } else if (step === 2) {
      return Step2(store, actions);
    } else if (step === 3) {
      return Step3(store, actions);
    } else if (step === 4) {
      return Step4(store, actions);
    }
  }

  return html`
    <div class=${styles}>
      ${content()}
    </div>
  `;
}

export { App };
