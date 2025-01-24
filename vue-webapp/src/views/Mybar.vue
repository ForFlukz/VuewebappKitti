<template>
  <nav class="navbar">
    <div class="wrapper">
        <div class="logo">
            <router-link to="/">
                <img src="@/assets/logo.png" alt="Logo" />
            </router-link>
        </div>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/product">Mycard</router-link></li>
            <li><router-link to="/about">About</router-link></li>
        </ul>
    </div>
  </nav>
</template>

<script>
import logo from "@/assets/logo.png";
export default {
    name : "Mybar",
    data() {
        return {
            logo
        }
    }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  background-image: linear-gradient(to right, #00f7ff, #0400ff);
  padding: 20px 30px;  
  margin: 20px; 
  border: solid 1px #ccc;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.logo img {
  width: 80px;
  height: auto;
}

ul {
  display: flex;
  list-style: none;
}

ul li {
  margin: 0 20px;
}

nav a {
  text-decoration: none;
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #ffffff;
  position: relative;
}

nav a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 5px;
  background-image: linear-gradient(to right, #2aba2a, #12a2af);
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 25px;
  transition: 0.3s;
}

nav a:hover::after {
  width: 100%;
}

@media screen and (max-width: 768px) {
  .navbar {
    padding: 20px;
    margin: 20px;
  }

  .wrapper {
    flex-direction: column;
    align-items: center;
  }

  ul {
    flex-direction: column;
    margin-top: 10px;
  }

  ul li {
    margin: 10px 0;
  }
}
</style>
