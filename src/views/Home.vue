<template>
<div class="body">

<div id="encabezado">
  <Navbar></Navbar>
  <h1 id="Titulo">Gorthon</h1>
  <h4>Hecho con Vuejs y FastApi </h4>
</div>



<h2>Nuestros articulos </h2>


  <Articulo v-for="Contenido in ContenidoArticulos" :key="Contenido.imagen" :imagen="Contenido.imagen" :parrafo="Contenido.parrafo" :ruta="Contenido.ruta" ></Articulo>
  


</div>



</template>

<script setup>
import Navbar from '../Navbar.vue'
import Articulo from '../Componentes/Articulo.vue'


const ContenidoArticulos = [
{ruta:"/cursos",
imagen:"imgprogramacion",
parrafo :"Nuestro recorrido por la programacion. Desde diagramas de flujo hasta base de datos"},

{ruta:"/comentarios",
imagen : "imgjardin",
parrafo : "Te invitamos a dejar  un comentario sobre nuestra primera pagina"},

]

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

*{
    font-family: "Bai Jamjuree", sans-serif;
    font-weight: 200;
    font-style: normal;
    margin: 0px;
    font-weight: bold;
  }
  
/* Editando el encabezado*/



#encabezado{
background-image:linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(/Fotos/fondo.jpg);
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 40px;

}

#header{
margin-bottom: 50px !important;

}

h2{
justify-self: center;
color: black
}

.body{
color: rgb(255, 250, 250);
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 350px 1fr 8fr ;
background-color: rgb(244, 239, 239);
height: 100vh;
width: 100vw;
}

#encabezado,h2{
grid-column: 1/-1;
}

#Titulo{
font-size: 90px;
}

h4{
font-size: 25px;
}

.divcursos{
transition: 0.8s;
display: flex;
flex-direction: column;
margin-top: 60px;
justify-self: center;
width: 10%;
height: 110%;
text-align: center;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); 
background-color: white;
}

.divcursos:hover{
width: 65%;
height: 120%;
background-color: rgb(152, 141, 141);
color: white;
}

.imgapartado{

height: 50%;
margin-bottom: 45px;

}

#imgprogramacion{
background-image: url(../../Fotos/cursoboton.jpg);
}

#imgjardin{
background-image: url(../../Fotos/jardinft.jpg);
}

#imgpro1{
background-image: url(../../Fotos/apartadoproximo1.jpg);
}

#imgpro2{
background-image: url(../../Fotos/apartadoproximo2.jpg);
}

p{
text-align: center;
font-size: 12px;
margin-left: 10px;
margin-right: 10px;
}

.apartados{
display: flex;
justify-content: center;
text-decoration: none;
color: black;
}

a:hover{
    color: rgb(244, 239, 239);
}



</style>