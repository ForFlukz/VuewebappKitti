<script setup>
import Mycard from '../views/Mycard.vue';
</script>

<template>
    <main>
      <div class="tx">
        <h1>Products</h1>
      </div> 
      <div className="grid-container">
        <Mycard 
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :description="item.description"
        :image="item.image"
        :price="item.price"
        />
      </div>
    </main>
</template>

<script scope>
export default {
    name : "Products",
    component: {
      Mycard,
    },
    data() {
      return {
        items : [],
      };
    },
    created() {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then(json => {
          this.items = json;
        })
        .catch(error => {
          console.error('Error fetching products', error);
        });
    }
};
</script>


<style scoped>
.tx {
  position: static;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  margin-top: 2px;
  display: flex;
  align-items: center;
  padding: 0 90px;
  font-size: 20px;
  font-weight: 600;
}

main {
  margin-top: 50px;
  padding: 1rem;
}

.grid-container {
  display: grid;
  padding-top: 50%;
  margin-top: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

@media (min-width: 400px) {
  .grid-container {
    grid-template-columns: repeat(1, 1fr);
  }

  .tx {
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    margin-top: 2px;
    display: flex;
    align-items: center;
    padding: 0 90px;
    font-size: 16px;
    font-weight: 600;
  }

  main {
    margin-top: 50px;
  }
}

@media (min-width: 576px) {
  .grid-container {
    grid-template-columns: repeat(1, 1fr);
  }

  .tx {
    position: static;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    margin-top: 2px;
    display: flex;
    align-items: center;
    padding: 0 90px;
    font-size: 18px;
    font-weight: 600;
  }

  main {
    margin-top: 40spx;
  }
}

@media (min-width: 992px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }

  .tx {
    position: static;
    top: 0;
    left: 0;
    width: 100%;
    height: 120px;
    margin-top: 2px;
    display: flex;
    align-items: center;
    padding: 0 90px;
    font-size: 20px;
    font-weight: 600;
  }

  main {
    margin-top: 40px;
  }
}
</style>