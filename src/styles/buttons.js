import { css } from "emotion";

const button = css`
  padding: 10px 10px 8px;
  border-radius: 4px;
  border: 1px solid transparent;
  cursor: pointer;

  :active,
  :hover {
    outline: none;
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  :focus {
    outline: none;
  }
`;

const submitBtn = css`
  ${button}
  background-color: #1976d2;
  border-color: #1976d2;
  color: #fff;

  :active,
  :hover {
    background-color: #004ba0;
    border-color: #003c8f;
    color: #fff;
  }

  :focus {
    box-shadow: 0 0 0 4px #63a4ff;
  }
`;

const defaultBtn = css`
  ${button}
  background-color: #757575;
  border-color: #757575;
  color: #fff;

  :active,
  :hover {
    background-color: #494949;
    border-color: #373737;
    color: #fff;
  }

  :focus {
    box-shadow: 0 0 0 4px #a4a4a4;
  }
`;

export { defaultBtn, submitBtn };
