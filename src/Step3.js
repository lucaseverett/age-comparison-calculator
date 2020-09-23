import { html } from "lit-html";
import { css } from "emotion";
import { submitBtn } from "./styles/buttons.js";
import { input, inputError } from "./styles/inputs.js";

const styles = css`
  display: grid;
  place-items: center;

  form {
    display: grid;
    place-items: center;
  }

  .label {
    font-size: 20px;
  }

  .label.birthday {
    margin-top: 10px;
  }

  input {
    ${input}
    width: 100%;
    margin: 10px;

    &.error {
      ${inputError}
    }
  }

  button {
    ${submitBtn}
    width: 100%;
    margin-top: 10px;
  }

  .error-message {
    color: #d32f2f;
    margin-bottom: 10px;
    max-width: 200px;
  }
`;

export function Step3(
  { theirName, theirBirthday, errorMessage },
  { setStep, handleTheirName, handleTheirBirthday }
) {
  return html`
    <div class=${styles}>
      <form
        @submit=${(e) => {
          e.preventDefault();
          setStep(4);
        }}
      >
        <div class="label name">What is their name?</div>
        <input
          type="text"
          id="their-name"
          .value=${theirName}
          @input=${handleTheirName}
        />
        <div class="label birthday">When is their birthday?</div>
        <input
          type="date"
          .value=${theirBirthday}
          @input=${handleTheirBirthday}
          id="their-birthday"
          class=${errorMessage && "error"}
          placeholder="yyyy-mm-dd"
        />
        ${errorMessage &&
        html`<div class="error-message">${errorMessage}</div>`}
        <button ?disabled=${!theirName || !theirBirthday || errorMessage}>
          Continue
        </button>
      </form>
    </div>
  `;
}
