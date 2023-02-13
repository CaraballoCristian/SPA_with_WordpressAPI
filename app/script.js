import {App} from "./App.js"
import api from "./helpers/wp_api.js"

document.addEventListener("DOMContentLoaded", App)
window.addEventListener("hashchange", e => {
    location.search = ""
    window.scroll({top:0})
    api.page = 1;
    App();
});
