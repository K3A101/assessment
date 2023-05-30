<template>

    <nav class="navigation-menu">
        <img class="logo" src="../assets/logo-dtt.png" alt="dtt-logo">
    <router-link to="/">Home</router-link> |
    <router-link :to="{name: 'About'}">About</router-link>
  </nav>
 
</template>

<script>
export default {

}
</script>

<style>
/* Css styling for the navigation menu */
.navigation-menu {
    display: flex;
    flex-direction: row;
    align-items: center;
   gap: 10px;
    text-align: left;
    background-color:#ffffff; 
    padding: 1.5em;
}

.navigation-menu a {
   border-radius: .5em;
    padding: 10px 20px;
    color: #4A4B4C;
}

.navigation-menu a.router-link-exact-active {
    background: #EB5440;
    color: white;
    font-weight: bold;
}
.logo {
    width: 5em;
    margin-right: 1em;
}
</style>