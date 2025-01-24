import { createWebHashHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue"
import Product from "@/views/Product.vue";
import About from "@/views/About.vue";
import NotFound from "@/views/NotFound.vue";
import ProductDetail from "@/views/ProductDetail.vue";


const routes = [
    { path : '/', component: Home },
    { path : '/about', component: About},
    { path : '/product', component: Product},
    { path : '/productdetail', component: ProductDetail},
    {
        path : '/productdetails/:productId,',
        name : "ProductDetail",
        component : ProductDetail,
        props: true
    },
    {
        path : '/:catchAll(.*)',
        name : 'Notfound',
        component : NotFound,
    },
    {
        path: "/product/:id",
        name: "ProDuctDetail",
        component: ProductDetail,
        props: true
    },
];

const router = createRouter ({
    history : createWebHashHistory(),
    routes,
});

export default router;

