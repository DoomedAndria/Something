import { createStore } from "vuex";
import usersPlugin from "./plugins/usersPlugin";
import categoriesPlugin from "./plugins/categoriesPlugin.js";


export default createStore({
    plugins: [usersPlugin,categoriesPlugin],
});