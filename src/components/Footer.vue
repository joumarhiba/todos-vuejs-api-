<template>
    <footer>
        <p>&copy; Copyright  2022</p>
        <router-link to="/about">About us</router-link>
        <!-- <router-link to= href="http://localhost:8080/#/about">About</router-link> -->
    </footer>
</template>

<script>

export default {
    name:'Footer'
}
</script>


<style scoped>
a {
    color:#333;
}
footer{
    margin-top: 30px;
    text-align: center;
}
</style>