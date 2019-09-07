<template lang="pug">
    v-card
        v-card-title Iniciar Sesión
        v-card-text 
            v-text-field(label="Usuario", v-model="usuario")
            v-text-field(label="Password", type="password", v-model="password")
            v-btn(color="success") Ingresar
            v-btn(color="success") Olvidaste tu contraseña 
            v-btn(color="success") Crear cuenta 
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

<style>

</style>