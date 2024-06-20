<template>
  <div>
    <form @submit.prevent="submitForm">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="formData.email" required>

      <label for="username">Username:</label>
      <input type="text" id="username" v-model="formData.username" required>

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="formData.password" required>

      <label for="role">Role:</label>
      <input type="number" id="role" v-model="formData.role" required>

      <button type="submit">Registrarse</button>
    </form>
    <p v-if="registrationMessage">{{ registrationMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        email: 'user@example.com',
        username: 'example_user',
        password: 'password123',
        role: 1
      },
      registrationMessage: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('https://cdi-web-backend.onrender.com/api/v1/user/create_user', this.formData);
        console.log('Response:', response.data);

        if (response.status === 201) {
          this.registrationMessage = 'Registro exitoso';
          
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
