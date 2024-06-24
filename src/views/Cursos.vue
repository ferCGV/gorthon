<template>
  <div class="contenedor">
    <div class="Encabezado">
      <Navbar></Navbar>
      <div class="contenido">
        <h1>Nuestro canal</h1>
        <p>Creamos un canal de youtube para aprender python desde cero</p>
        <button  @click="flashMenu">menu</button>
      </div>
    </div>
    <div :class="['menu', { flash: isFlashing }]">
      <ul class="main-menu" @click="toggleAllMenus">
        <li><div id="logomenu">&#9776</div></li>
      </ul>
      <transition name="fade">
        <ul v-show="isMainMenuVisible" class="submenu-container">
          <li>
            <ul class="sub-menu" @click="toggleSubMenu('menu1')">
              <li>Introduccion</li>
            </ul>
            <transition name="fade">
              <ul v-show="isSubMenuVisible.menu1">
                <li><a target="_blank" href="https://youtu.be/TQ0FnvV3P14?si=aUBolOYpV947mgQ-">Variables</a></li>
                <li><a target="_blank" href="https://youtu.be/vPQZPbiYKL8?si=O9YhJhTkLyHOBldL">Operadores</a></li>
              </ul>
            </transition>
          </li>
          <li>
            <ul class="sub-menu" @click="toggleSubMenu('menu2')">
              <li>Lo basico</li>
            </ul>
            <transition name="fade">
              <ul v-show="isSubMenuVisible.menu2">
                <li><a target="_blank" href="https://youtu.be/_TyUwFT1VBs?si=u4XqoS8c_vsvPRsM">Condicionales</a></li>
                <li><a target="_blank" href="https://youtu.be/T4GAmAhFw_w?si=X9z57Y2sAu1ox4uz">Bucles</a></li>
              </ul>
            </transition>
          </li>
          <li>
            <ul class="sub-menu" @click="toggleSubMenu('menu3')">
              <li>Avanzado</li>
            </ul>
            <transition name="fade">
              <ul v-show="isSubMenuVisible.menu3">
                <li><a target="_blank" href="https://youtu.be/etYmikjXRvA?si=mRG6RSrypv7yiNuW">Listas y diccionarios</a></li>
                <li><a target="_blank" href="https://youtu.be/ivQuSD9pxpM?si=EJHieQ4YcZRMoMwZ">Clases y funciones</a></li>
              </ul>
            </transition>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import Navbar from '@/Navbar.vue';

const isMainMenuVisible = ref(false);
const isSubMenuVisible = ref({
  menu1: false,
  menu2: false,
  menu3: false
});
const isFlashing = ref(false);

const toggleSubMenu = (menu) => {
  isSubMenuVisible.value[menu] = !isSubMenuVisible.value[menu];
};

const toggleAllMenus = () => {
  isMainMenuVisible.value = !isMainMenuVisible.value;
};

const flashMenu = () => {
  isFlashing.value = true;
  setTimeout(() => {
    isFlashing.value = false;
  }, 1000); 
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@200;300;400;500;600;700&display=swap');

* {
  font-family: "Bai Jamjuree", sans-serif;
  font-weight: bold;
  margin: 0;
  padding: 0;
  color: white;
}

.contenido {
  
  margin-left: 250px;
  text-align: center;
}

.Encabezado {
  margin-bottom: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.menu {
  transition: 1s;
  display: inline-block;
  margin-top: 18px;
  margin-right: 15px;
  font-size: 16px;
  justify-self: flex-end;
}

#logomenu:hover {
  transition: 1s;
  background-color: rgba(255, 255, 255, 0.165);
}

.menu ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.menu li {
  cursor: pointer;
  padding: 5px;
}

li:hover {
  transition: 1s;
  background-color: rgb(197, 193, 193);
}

.main-menu {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.submenu-container {
  padding: 0;
  margin: 0;
}

.sub-menu {
  padding-left: 20px;
}

.sub-menu li {
  padding: 5px;
}


.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-leave-from,
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

@media screen and (max-width: 600px) {
  .menu ul.main-menu {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .menu ul.main-menu li {
    width: 100%;
    text-align: left;
  }

  .submenu-container {
    width: 100%;
  }

  .sub-menu {
    padding-left: 10px;
  }
}

#header {
  width: 85vw;
}

.contenedor {
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.9)
    ),
    url(../Fotos/fondopaginascursos.jpg);
  display: flex;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  align-content: center;
}

#menuicono {
  background-color: #dfdfdf31;
  color: rgb(0, 0, 0);
  width: 25px;
  height: 20px;
}

h2 {
  margin-left: 400px;
}


.menu.flash {
  animation: flash-bg 0.2s 5; 
}

@keyframes flash-bg {
  0%, 100% { background-color: transparent; }
  50% { background-color: rgba(255, 255, 255, 0.5); }
}

button{
  background-color: rgba(102, 102, 102, 0.687);
      color: white;
      border: none;
      padding: 8px 16px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 14px;
      cursor: pointer;
      border-radius: 3px;
      transition: background-color 0.3s ease;
    }

    button:hover{
      background-color: #dedede;
      color: rgb(52, 52, 52);
      transition: 1s;
    }


</style>
