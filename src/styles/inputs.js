import { css } from "emotion";

const inputBase = css`
  border-radius: 4px;
  padding: 10px;

  :focus {
    outline: none;
  }
`;

const input = css`
  ${inputBase}
  border: 1px solid transparent;
  background-color: #fff;

  :focus {
    box-shadow: 0 0 0 4px #63a4ff;
    border-color: #1976d2;
  }

  @media (prefers-color-scheme: light) {
    background-color: #f5f5f5;
    border-color: #e0e0e0;
    color: #000;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #484848;
    border: none;
    color: #fff;
  }
`;

const inputError = css`
  ${input}

  :focus {
    box-shadow: 0 0 0 4px #ff6659;
    border-color: #d32f2f;
  }
`;

export { input, inputError };
