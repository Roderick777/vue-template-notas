<template lang="pug">
    v-card
        v-card-title Iniciar Sesión
        v-card-text 
            v-text-field(label="Usuario", v-model="usuario")
            v-text-field(label="Password", type="password", v-model="password")
            v-btn.btn_login(color="primary", rounded, @click="iniciarSesion()") Ingresar
            v-btn.btn_login(text, rounded) Olvidaste tu contraseña 
            v-btn.btn_login(rounded) Crear cuenta 
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            usuario: '',
            password: '',
            rutaLogin: 'https://redcollege.net/api/getCursosIon?escuela_id=17&curso=4&id_ensenanza=2&cursos=2019'
        }
    }, 

    methods: {
        async iniciarSesion(){
            try {
                let respuesta =  await axios.get(this.rutaLogin);
                console.log('respuesta', respuesta);
            } catch(e){
                console.log(e)
            }
           
        }
    }
}
</script>

<style scoped>
    .btn_login{
        width: 100% !important; 
        padding:5px !important;
        margin-bottom: 5px !important;

    }
</style>