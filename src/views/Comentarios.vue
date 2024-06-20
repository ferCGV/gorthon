<template>
    <div class="contenedor">
        <Navbar></Navbar>
        <div class="comentarios-section">
            <h2>Que te parecio nuestra pagina?</h2>
            
            <form @submit.prevent="submitComment">
                <div class="form-group">
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" v-model="newComment.nombre" required>
                </div>
                
                <div class="form-group">
                    <label for="comentario">Comentario</label>
                    <textarea id="comentario" v-model="newComment.comentario" required></textarea>
                </div>
                
                <button type="submit">Enviar</button>
            </form>
            
            <div class="comentarios-list">
                <h3>Comentarios:</h3>
                <div v-for="comment in comments" :key="comment.id" class="comentario">
                    <p><strong>{{ comment.nombre }}:</strong></p>
                    <p>{{ comment.comentario }}</p>
                </div>
            </div>
        </div>
    </div>
    </template>
  
  <script setup>
  import { ref } from 'vue';
  import Navbar from '@/Navbar.vue';
  // Lista de comentarios (puede ser reemplazada con datos de una API)
  const comments = ref([]);
  
  // Nuevo comentario a añadir
  const newComment = ref({
    nombre: '',
    comentario: ''
  });
  
  // Función para enviar el comentario
  const submitComment = () => {
    if (newComment.value.nombre && newComment.value.comentario) {
      comments.value.push({ 
        id: Date.now(), 
        ...newComment.value 
      });
      newComment.value.nombre = '';
      newComment.value.comentario = '';
    }
  };
  </script>
  
  <style scoped>

@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

*{
    font-family: "Bai Jamjuree", sans-serif;
    font-weight: 200;
    font-style: normal;
    margin: 0px;
    font-weight: bold;
    color: white
  }

  .contenedor{
    display: flex;
    flex-direction: column;
    background-color: rgb(107, 106, 106);
    height: 100vh

  }

  .comentarios-section {
    height: 80vh;
    width: 80vw;
    margin: 30px 0px 0px 80px;
  
    background-color: transparent
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: transparent
  }
  
  button {
    transition: .5s;
    padding: 10px 20px;
    background-color: #beccdb77;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .comentarios-list {
    margin-top: 40px;
  }
  
  .comentario {
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  
  .comentario p {
    margin: 5px 0;
  }

  #header{
    background-color: rgb(0, 0, 0);
    color: white;
  }

  input:hover,textarea:hover{
    transition: 1s;
    background-color: rgba(255, 255, 255, 0.298)
  }
  </style>
  