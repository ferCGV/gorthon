<template>

<header id="header">
    <h1 ><RouterLink  id="logo" to="/">Home</RouterLink></h1>
    <nav>
        <ul id="Lista" class="">
            <li><a href="about.html" class="active">Sobre Nosotros</a></li>
            <li><a href="https://github.com/ferCGV/gorthon">Repositorio</a></li>
            <li><RouterLink to="/login">Registrate</RouterLink></li>
        </ul>
    </nav>
</header>
        
    
</template>

<script setup>

</script>

<style scoped>
#header {
    display: flex;
    width: 100vw;
    height: 70px;
    background-color: transparent;
    justify-content: space-between;
    align-items: center;
    z-index: 0;
    margin-bottom: auto;
    transition: 1s
}

#header a {
    text-decoration: none;
    color: rgb(255, 255, 255);
}

#header ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    gap: 40px;
    margin-right: 50px;
}

#header ul li {
    position: relative;
    list-style: none;
}

#header ul li a {
    text-decoration: none;
    color: rgb(255, 255, 255);
    transition: all 0.5s ease;
}

#logo {
    letter-spacing: 3px;
    margin-left: 30px;
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    transition: all 0.3s ease;
}

#logo:hover {
    text-decoration: none;
    color: rgb(47, 45, 52);
    background-color: rgba(230, 223, 223, 0.072);
    letter-spacing: 6px;
    
}

#logo a {
    text-decoration: none;
    color: inherit;
}

#header ul li a:hover {
    text-decoration: none;
    color: rgb(47, 45, 52);
    background-color: rgba(230, 223, 223, 0.072);
    font-size: 16px;
}
</style>