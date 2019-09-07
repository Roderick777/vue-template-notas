<template lang="pug">
    v-card
        v-card-title Iniciar Sesión
        v-card-text 
            v-text-field(label="Usuario", v-model="usuario")
            v-text-field(label="Password", type="password", v-model="password")
            v-btn.btn_login(color="primary", rounded) Ingresar
            v-btn.btn_login(text, rounded) Olvidaste tu contraseña 
            v-btn.btn_login(rounded) Crear cuenta 
</template>

<script>
export default {
    data(){
        return {
            usuario: '',
            password: '',
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