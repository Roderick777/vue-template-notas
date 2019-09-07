
<template lang="pug">
    v-container(fluid)
        v-layout(wrap)
            h2.font-weight-light Componentes
            div
            v-flex
                v-card.ma-1
                    v-card-title Login
                    v-card-text
                        Login 
</template>

<script>
  import Login from '../components/Login.vue';

  export default {
    components:{
        Login,
    },
  }
</script>