import { createStore } from "vuex";
import mask from "./modul/mask";//引入模块拆分化之后的一个文件夹，每一个模块都可以有自己的state,mutations,actions,modules

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        mask,
    },
});