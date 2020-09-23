import "./styles.css";
import { actions } from "./store.js";

document.onload = actions.setStep(1);
