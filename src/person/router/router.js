import { createRouter, createWebHistory } from "vue-router";
// 路由规则
const routes = [
    {
        path: "/",
        name: "主页",
        meta: ["istabbar"],
        component: () => import("/src/App"),
    },
];
//根据路由规则创建路由
const router = createRouter({
    history: createWebHistory(""),
    routes,
});
export default router;
