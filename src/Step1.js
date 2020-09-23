import { html } from "lit-html";
import { css } from "emotion";
import { submitBtn } from "./styles/buttons.js";
import { input, inputError } from "./styles/inputs.js";

const styles = css`
  display: grid;
  place-items: center;

  .label {
    font-size: 20px;
    margin-bottom: 10px;
  }

  form {
    display: grid;
    place-items: center;
  }

  input {
    margin-bottom: 10px;
    ${input}
    &.error {
      ${inputError}
    }
  }

  button {
    margin-top: 10px;
    width: 100%;
    ${submitBtn}
  }

  .error-message {
    color: #d32f2f;
    margin-bottom: 10px;
    max-width: 220px;
  }
`;

export function Step1(
  { yourBirthday, errorMessage },
  { setStep, handleYourBirthday }
) {
  return html`
    <div class=${styles}>
      <div class="label">When is your birthday?</div>
      <form
        @submit=${(e) => {
          e.preventDefault();
          setStep(2);
        }}
      >
        <input
          type="date"
          .value=${yourBirthday}
          @input=${handleYourBirthday}
          id="your-birthday"
          class=${errorMessage && "error"}
          placeholder="yyyy-mm-dd"
        />
        ${errorMessage &&
        html`<div class="error-message">${errorMessage}</div>`}
        <button ?disabled=${!yourBirthday || errorMessage}>Continue</button>
      </form>
    </div>
  `;
}
