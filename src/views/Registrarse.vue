<template>
  <div>
    <Navbar></Navbar>
    <div v-if="!isRegistered" class="Contenedor">
      <div id="izquierda">
        <h1>Únete</h1>
        <h2>Cursos</h2>
        <p>En nuestra página, ofrecemos un curso breve de Python con 7 videos. Diseñado para principiantes, el curso cubre los fundamentos esenciales de Python, desde la instalación hasta la escritura de programas básicos. Perfecto para quienes desean iniciarse en la programación con ejemplos claros y explicaciones concisas.</p>
        <h2>Comentarios</h2>
        <p>Nos apoyarías dejando un comentario sobre nuestra primera página. Te invitamos a compartir tus opiniones y sugerencias en nuestra sección de comentarios. Tu opinion es muy valiosa para nosotros</p>
      </div>

      <form @submit.prevent="submitForm">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required>

        <label for="username">Username:</label>
        <input type="text" id="username" v-model="formData.username" required>

        <label for="password">Password:</label>
        <input type="password" id="password" v-model="formData.password" required>

        <button type="submit">Registrarse</button>
      </form>
    </div>
    <div v-else class="divregistroext">
      Te has registrado correctamente
    </div>
  </div>
</template>

<script>
import Navbar from '../Navbar.vue';
import axios from 'axios';

export default {
  components: {
    Navbar
  },
  data() {
    return {
      formData: {
        email: 'usuario@ejemplo.com',
        username: 'ejemplo_usuario',
        password: 'contraseñad123',
        role: 1 
      },
      registrationMessage: '',
      isRegistered: false
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('https://cdi-web-backend.onrender.com/api/v1/user/create_user', this.formData);
        console.log('Response:', response.data);

        if (response.status === 201) {
          this.registrationMessage = 'Registro exitoso';
          this.isRegistered = true;
        } else {
          this.registrationMessage = 'Error en el registro';
        }
      } catch (error) {
        console.error('Error durante el registro:', error);
        this.registrationMessage = 'Error en el registro';
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

* {
  font-family: "Bai Jamjuree", sans-serif;
  font-weight: 600;
  font-style: normal;
  margin: 0;
  padding: 0;
  color: white;
}

a:visited {
  color: #000;
}

form {
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 80px 80px 0 80px;
  background-repeat: no-repeat;
  gap: 20px;
}

body {
  padding-top: 0.1px;
}

body > div {
  display: flex;
  margin-top: 90px;
}

#izquierda {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 60px 30px 0 30px;
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

#nombreape > label:last-child {
  margin-left: 250px;
}

input {
  height: 45px;
  width: 100%;
  background-color: transparent;
}

button {
  width: 30%;
  height: 50px;
  background-color: rgba(77, 72, 74, 0.747);
  border: 0;
  border-radius: 5px;
}

.Contenedor {
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9)), url(/Fotos/fondologin.jpg);
  width: 100vw;
  display: flex;
  height: 100vh;
}

#header {
  background-color: black;
  width: 100vw;
  height: 70px;
}

.divregistroext {
  transition: 1s;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9)), url(/Fotos/fondologin2.jpg);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}

button:hover {
  transition: 1s;
  background-color: rgb(183, 183, 183);
  color: rgb(82, 82, 82);
}
</style>