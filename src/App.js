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

  const content = {
    1: Step1,
    2: Step2,
    3: Step3,
    4: Step4,
  };

  return html` <div class=${styles}>${content[step](store, actions)}</div> `;
}

export { App };
