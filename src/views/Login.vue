<template>
  <div class="contenedor">
    <Navbar></Navbar>
    <div class="login-container">
      <form @submit.prevent="submitForm" class="login-form">
        <h2>Iniciar Sesión</h2>
        <label for="username">Username</label>
        <input type="text" id="username" v-model="formData.username" required />

        <label for="password">Password</label>
        <input type="password" id="password" v-model="formData.password" required />

        <button type="submit">Iniciar Sesión</button>
        <p v-if="loginMessage">{{ loginMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from '../Navbar.vue';

export default {
  components: {
    Navbar
  },
  data() {
    return {
      formData: {
        username: '',
        password: ''
      },
      loginMessage: '',
      accessToken: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        const params = new URLSearchParams();
        params.append('grant_type', 'password');
        params.append('username', this.formData.username);
        params.append('password', this.formData.password);
        params.append('scope', 'your_scope_here'); 
        params.append('client_id', 'your_client_id_here'); 
        params.append('client_secret', 'your_client_secret_here'); 

        const config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        };

        const response = await axios.post('https://cdi-web-backend.onrender.com/api/v1/user/login', params, config);
        console.log('Response:', response.data);

        if (response.status === 200) {
          this.loginMessage = 'Se inició sesión';
          this.accessToken = response.data.access_token;
          localStorage.setItem('accessToken', this.accessToken);
          
          
          setTimeout(() => {
            this.$router.push('/');
          }, 1500); 
        } else {
          this.loginMessage = 'Error en el inicio de sesión';
        }
      } catch (error) {
        console.error('Error durante el inicio de sesión:', error);
        this.loginMessage = 'Error en el inicio de sesión';
      }
    }
  }
};
</script>

<style scoped>
.contenedor {
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)), url(/Fotos/copia.jpg);
}

body {
  background-color: #4f4f4f;
  font-family: 'Poppins', sans-serif;
  margin: 0;
}

.login-container {
  background-color: transparent;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
  margin: 100px auto;
}

.login-form h2 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #ffffff;
}

.login-form label {
  display: block;
  text-align: left;
  margin: 10px 0 5px;
  color: #ffffff;
}

.login-form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #2d2d2d2a;
  border-radius: 5px;
  font-size: 16px;
  background-color: transparent;
}

.login-form button {
  width: 100%;
  padding: 10px;
  background-color: #6b6377;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-form button:hover {
  background-color: #dedede;
  color: rgb(52, 52, 52);
  transition: 1s;
}

.login-form p {
  margin-top: 10px;
  color: #d9534f;
}

#header {
  background-color: transparent;
}

input:hover {
  transition: .8s;
  background-color: rgb(136, 136, 136);
}

input:focus-visible {
  border: transparent;
}

input {
  color: white;
}
</style>
