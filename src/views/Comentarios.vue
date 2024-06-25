<template>
  <div class="contenedor">
    <Navbar></Navbar>
    <div class="comentarios-section">
      <h2>¿Qué te pareció nuestra página?</h2>
      
      <form @submit.prevent="submitComment">
        <div class="form-group">
          <label for="rating">Rating</label>
          <input type="number" id="rating" v-model="newComment.rating" min="0" max="5" required>
        </div>
        
        <div class="form-group">
          <label for="comment">Comentario</label>
          <textarea id="comment" v-model="newComment.comment" required></textarea>
        </div>
        
        <button type="submit">Enviar</button>
        <p v-if="submitMessage">{{ submitMessage }}</p>
      </form>
      
      <div class="comentarios-list">
        <h3>Comentarios:</h3>
        <div v-if="comments.length === 0">
          <p>Necesitas ser administrador para ver los comentarios.</p>
        </div>
        <div v-else>
          <div v-for="comment in comments" :key="comment.id" class="comentario">
            <p><strong>{{ comment.rating }} estrellas:</strong></p>
            <p>{{ comment.comment }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import Navbar from '@/Navbar.vue';

export default {
  components: {
    Navbar
  },
  setup() {
    const comments = ref([]);
    const newComment = ref({
      rating: 0,
      comment: ''
    });
    const accessToken = ref(localStorage.getItem('accessToken') || '');
    const submitMessage = ref('');

    const fetchComments = async () => {
      try {
        const response = await axios.get('https://cdi-web-backend.onrender.com/admin/get_posts', {
          headers: {
            'Authorization': `Bearer ${accessToken.value}`,
            'Content-Type': 'application/json'
          }
        });
        comments.value = response.data;
      } catch (error) {
        console.error('Error al obtener comentarios:', error.message);
        if (error.response && error.response.status === 401) {
          console.error('No autorizado para obtener comentarios.');
        }
      }
    };

    const submitComment = async () => {
      if (newComment.value.rating && newComment.value.comment) {
        try {
          const response = await axios.post('https://cdi-web-backend.onrender.com/review/post_review', newComment.value, {
            headers: {
              'Authorization': `Bearer ${accessToken.value}`,
              'Content-Type': 'application/json'
            }
          });

          if (response.status === 200) {
            submitMessage.value = 'Comentario enviado ';
            await fetchComments();
            newComment.value.rating = 0;
            newComment.value.comment = '';
          } else {
            console.error('Error al enviar el comentario: Respuesta inesperada', response);
          }
        } catch (error) {
          if (error.response) {
            console.error('Error al enviar el comentario:', error.response);
          } else {
            console.error('Error al enviar el comentario:', error.message);
          }
        }
      }
    };

    onMounted(fetchComments);

    return {
      comments,
      newComment,
      submitComment,
      submitMessage
    };
  }
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700&display=swap');

* {
  font-family: "Bai Jamjuree", sans-serif;
  font-weight: 200;
  font-style: normal;
  margin: 0px;
  font-weight: bold;
  color: white;
}

.contenedor {
  display: flex;
  flex-direction: column;
  background-color: rgb(107, 106, 106);
  height: 100%;
}

.comentarios-section {
  height: 100vh;
  width: 80vw;
  margin: 30px 0px 0px 80px;
  background-color: transparent;
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
  background-color: transparent;
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

#header {
  background-color: rgb(0, 0, 0);
  color: white;
}

input:hover,
textarea:hover {
  transition: 1s;
  background-color: rgba(255, 255, 255, 0.298);
}
</style>
