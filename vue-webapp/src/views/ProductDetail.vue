<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;
const items = ref([]);
const product = computed(() => 
    items.value.find((item) => item.id === parseInt(id))
);

onMounted(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
            items.value = [data];
        })
        .catch((error) => {
            console.error("Error fatching products", error);
        });
});

const getImageUrl = (path) => {
    return new URL(`/${path}`, import.meta.url).href;
};
</script>

<template>
    <div v-if="product" class="container">
        <div calss="left-column">
            <img :src="product.image" :alt="product.title" />
        </div>
        <div class="right-column">
            <div class="product-description">
                <h1>{{ product.title }}</h1>
                <p>{{ product.description }}</p>
                <p class="product-price">Price: {{ product.price }}</p>
                <router-link to="/product">
                    <button class="cart-btn">Back to Products</button>
                </router-link>
            </div>
        </div>
    </div>
    <div v-else>
        <h1>product not found or loading...</h1>
        <router-link to="/products">
            <button>Go back to the product list</button>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ["coverimage", "name"],
    methods: {
        getImageUrl(path) {
            return new URL(`${path}`, import.meta.url).href;
        },
    },
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    margin: 30px auto;
    max-width: 1200px;
}

.left-column {
    flex: 1;
    padding-right: 20px;
}

.right-column {
    flex: 2;
    padding-left: 20px;
}

img {
    width: 300px;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-description {
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 28px;
    font-weight: bold;
    color: #333;
    margin-bottom: 15px;
}

.product-price {
    font-size: 22px;
    font-weight: 600;
    color: #02a810;
    margin-top: 10px;
}

p {
    font-size: 16px;
    color: #555;
    line-height: 1.5;
    margin-bottom: 20px;
}

.cart-btn {
    padding: 12px 25px;
    background-color: #1100ff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

.cart-btn:hover {
    background-color: #0c00af;
    box-shadow: 0 8px 20px rgba(132, 0, 255, 0.5);
   
}

router-link {
    text-decoration: none;
}

div[v-if] {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

div[v-else] {
    text-align: center;
    margin-top: 50px;
}

button {
    padding: 10px 20px;
    background-color: #95a5a6;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #7f8c8d;
}
</style>
