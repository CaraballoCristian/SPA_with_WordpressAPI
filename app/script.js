import {App} from "./App.js"
import api from "./helpers/wp_api.js"

document.addEventListener("DOMContentLoaded", App)
window.addEventListener("hashchange", e => {
    api.page = 1;
    App();
})