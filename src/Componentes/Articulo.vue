<template>
<RouterLink  class="routerslinks"  :to="ruta">
    <div class="apartados">
        <div class="divcursos">
            <div :id="imagen" class="imgapartado"></div>
            <p>{{parrafo}}</p>
        </div>
    </div>
</RouterLink>
</template> 

<script setup>
import {defineProps} from 'vue'

const props = defineProps({imagen: String,parrafo:String,ruta:String})

</script>

<style scoped>

#imgprogramacion{
background-image: url(../../Fotos/cursoboton.jpg);
}

#imgjardin{
background-image: url(../../Fotos/jardinft.jpg);
}

#imgpro1{
background-image: url(../../Fotos/apartadoproximo1.jpg);
}



.apartados{
display: flex;
width: 97%;
height: 95%;
justify-content: center;
text-decoration: none;
color: black;
}

p{
text-align: center;
font-size: 12px;
margin-left: 10px;
margin-right: 10px;
}

.imgapartado{

height: 50%;
margin-bottom: 45px;

}

.divcursos{
transition: 0.8s;
display: flex;
flex-direction: column;
margin-top: 30px;
justify-self: center;
width: 60%;
height: 86%;
text-align: center;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); 
background-color: white;
}

.divcursos:hover{
width: 65%;
height: 100%;
background-color: rgb(152, 141, 141);
color: white;
}


.routerslinks:hover{
    background-color: rgb(244, 239, 239);
}


</style>