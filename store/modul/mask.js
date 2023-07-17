export default {
    namespaced: true,
    //开启命名空间，之后在不同页面中引入getter、actions、mutations时，需要加上所属的模块名
    state: {//定义一个数据
        audit: false,
    },
    mutations: {//store中更改state数据状态的唯一方法（mutations必须是同步函数）
        disaf(state) {
            state.audit = true;//改变数据的方法，方法名为audit
        },
        disaf1(state) {
            state.audit = false;
        },
    },

    actions: {},//action： 包含异步操作（请求API方法）、回调函数提交mutaions更改state数据状态，使之可以异步。

 getter:{},//getter:从基本数据(state)派生的数据，相当于state的计算属性
modules: {},//module： 模块化Vuex（将store分割成不同的模块）
};