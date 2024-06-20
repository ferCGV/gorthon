<template>
  <div class="contenedor">
    <Navbar></Navbar>

    <div class="container">
      <div class="derecha">
        <form @submit.prevent="submitForm">
          <div id="inputs">
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" v-model="form.nombre">
            
            <label for="apellido">Apellido</label>
            <input type="text" id="apellido" v-model="form.apellido">
            
            <label for="correo">Correo</label>
            <input type="email" id="correo" v-model="form.correo">
            
            <label for="password">Contraseña</label>
            <input type="password" id="password" v-model="form.password">
            
            <button type="submit">Registrarse</button>
          </div>
          <p v-if="registrationMessage">{{ registrationMessage }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Navbar from '@/Navbar.vue';

const form = ref({
  nombre: '',
  apellido: '',
  correo: '',
  password: ''
});

const registrationMessage = ref('');

const submitForm = async () => {
  try {
    const response = await axios.post('https://cdi-web-backend.onrender.com/api/v1/user/create_user', {
      email: form.value.correo,
      username: `${form.value.nombre}_${form.value.apellido}`, // Genera un username basado en nombre y apellido, ajusta según necesites
      password: form.value.password,
      role: 1 // Ajusta el rol según lo requerido por la API
    });

    console.log('Response:', response.data);

    // Maneja la respuesta según tus necesidades
    if (response.status === 201) {
      registrationMessage.value = 'Registro exitoso';
      // Puedes redirigir a otra página o realizar alguna acción adicional aquí
    } else {
      registrationMessage.value = 'Error en el registro';
    }
  } catch (error) {
    console.error('Error durante el registro:', error);
    registrationMessage.value = 'Error en el registro';
  }
};
</script>

<style scoped>
/* Estilos según tus necesidades */
</style>
