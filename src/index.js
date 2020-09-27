import "./styles.css";
import { App } from "./App.js";
import { render } from "lit-html";
import { effect } from "@vue/reactivity/dist/reactivity.esm-browser.js";
import { store, actions } from "./store.js";

effect(() => render(App(store, actions), document.querySelector("#app")));
