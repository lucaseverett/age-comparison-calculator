import { html } from "lit-html";
import { css } from "emotion";
import { defaultBtn, submitBtn } from "./styles/buttons.js";
import { age, formatDate } from "./dateFns.js";

const styles = css`
  display: grid;
  place-items: center;

  p {
    padding: 0;
    margin: 0 0 20px;
    font-size: 20px;
  }

  button {
    width: 100px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }

  button#continue {
    ${submitBtn}
    margin-right: 10px;
  }

  button#start-over {
    ${defaultBtn}
  }
`;

export function Step2({ yourBirthday }, { setStep, startOver }) {
  return html`
    <div class=${styles}>
      <p>You were born on ${formatDate(yourBirthday)}</p>
      <p>Today is ${formatDate(Date.now())}.</p>
      <p>You are ${age(yourBirthday)} old.</p>
      <p>Would you like to learn when another person was your age?</p>
      <div>
        <button @click=${() => setStep(3)} id="continue">Continue</button
        ><button @click=${() => startOver()} id="start-over">Start Over</button>
      </div>
    </div>
  `;
}
