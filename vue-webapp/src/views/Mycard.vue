<template lang="">
    <div class="card">
        <img :src="image" :alt="title" style="width:100% " />
        <div className="container">
            <h1>{{ title }}</h1>
            <p class="price">{{price}}</p>
            <router-link :to="`/product/${id}`">
                <button>View detail</button>
            </router-link>
            
        </div>
    </div>
</template>
<script>
export default {
    name: "Mycard",
    props: {
        id: {
            type: [String, Number],
            required: true,
        },
        title: {
            type: [String, Number],
            required: true,
        },
        description: {
            type: [String, Number],
            default: true,
        },
        image: {
            type: [String, Number],
            required: true,
        },
        price: {
            type: [String, Number],
            required: true,
        },
    },
};
</script>
<style scoped>
.card {
    box-shadow: 0 14px 18px rgba(0, 89, 255, 0.3);
    max-width: 350px;
    margin: auto;
    text-align: center;
    font-family: 'Arial', sans-serif;
    border-radius: 20px;
    background-color: #f4f4f9;
    padding: 20px;
    margin-top: 50px;
    transition: box-shadow 0.3s ease-in-out;
    
}

.card:hover {
    box-shadow: 0 8px 20px rgba(132, 0, 255, 0.5);
    transform: translateY(-5px);
}

img {
    border: 5px solid #00e1ff;
    border-radius: 15px;
    padding: 10px;
    margin-top: 20px;
    max-width: 100%;
    height: auto;
}

.container {
    padding: 10px 20px;
}

.price {
    color: #333;
    font-size: 24px;
    font-weight: bold;
    margin-top: 10px;
}

.card button {
    border: none;
    outline: 0;
    padding: 15px;
    color: white;
    background-color: #0004ff;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
    border-radius: 25px;
    transition: background-color 0.3s, transform 0.2s;
}

.card button:hover {
    background-color: #2c00a5;
    color: #ffffff;
    transform: scale(1.05);
}

.card button:active {
    transform: scale(0.98);
}

</style>