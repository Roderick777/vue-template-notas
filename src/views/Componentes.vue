
<template lang="pug">
    v-container(fluid)
        v-layout(wrap)
            v-flex(xs12)
                h2.font-weight-light Componentes
            v-flex(xs12)
                v-card.ma-1(color="primary")
                    v-card-title Login
                    v-card-text
                        div(style="max-width: 300px;")
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