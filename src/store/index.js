import { createStore } from "vuex";
import usersPlugin from "./plugins/usersPlugin";


export default createStore({
    plugins: [usersPlugin],
});