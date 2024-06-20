<template>
    <div class="contenedor">
      <Navbar></Navbar>

      <div class="container">
        <div id="izquierda">
          <h1>Únete</h1>
          <h2>Cursos</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fuga soluta asperiores, quos earum quisquam accusamus porro eligendi dignissimos dicta! Voluptas, sint? Unde, vero nisi.</p>
          <h2>Comentarios</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis exercitationem officia sequi perspiciatis, dolores earum ut nemo fuga et, eveniet quidem culpa amet odio vel! Consequatur, voluptate voluptas!</p>
        </div>
        

        <div>

        </div class="derecha">
        <form @submit.prevent="submitForm">
          <div id="nombreape">
            <label for="nombre">Nombre</label>
            <label for="apellido">Apellido</label>
          </div>        
          
          <div id="inputs">
            <input type="text" id="nombre" v-model="form.nombre">
            <input type="text" id="apellido" v-model="form.apellido">
          </div>
  
          <label for="correo">Correo</label>
          <input type="email" id="correo" v-model="form.correo">
        
          <label for="asunto">Contraseña</label>
          <input type="text" id="asunto" v-model="form.asunto">
        
         
  
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Navbar from '@/Navbar.vue';
  
  const form = ref({
    nombre: '',
    apellido: '',
    correo: '',
    asunto: '',
    mensaje: ''
  });
  
  const submitForm = () => {
    console.log(form.value);
    // Aquí puedes añadir la lógica para enviar el formulario, por ejemplo, usando axios
  };
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: normal;
    color: white
  }
  

  
  a:visited {
    color: #000; /* Cambiar a tu color deseado */
  }
  
  form {
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 80px 80px 0px 80px;
    background-repeat: no-repeat;
    gap: 20px;
  }
  
  body {
    padding-top: 0.1px;
  }
  
  body>div {
    display: flex;
    margin-top: 90px;
  }
  
  #izquierda {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 60px 30px 0px 30px;
    text-align: justify;
    width: 50vw;
  }
  
  h1 {
    font-size: 40px;
  }
  
  p {
    padding-right: 160px;
  }
  
  #inputs {
    display: flex;
    gap: 20px;
    width: 100%;
    
  }
  
  #nombreape>label:last-child {
    margin-left: 250px;
  }
  
  input, textarea {
    background-color: transparent;
    height: 45px;
    width: 100%;
  }
  
  button {
    width: 30%;
    height: 50px;
    background-color: rgba(85, 83, 99, 0.661);
    border: 0;
    border-radius: 5px;
  }
  
  #header {
    background-color: rgb(133, 133, 129);
    margin-bottom: 53px;
  }

  .container{
  display: flex
  }

  .contenedor{
    background-image:linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url(/Fotos/fondologin.jpg);
  }
  </style>
  