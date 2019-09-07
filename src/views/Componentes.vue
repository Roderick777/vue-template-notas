
<template lang="pug">
    v-container(fluid)
        v-layout(wrap)
            v-flex(xs12)
                h2.font-weight-light Componentes
            v-flex(xs12)
                v-card.ma-1(color="primary")
                    v-card-title Login
                    v-card-text
                        v-flex(xs12, sm12, md6, lg6, xl6)
                            Login 
                        v-flex(xs12, sm12, md6, lg6, xl6)
                            div componente como modal
                                v-dialog(v-model="dialogLogin"
                                    scrollable  
                                    :overlay="true"
                                    max-width="500px"
                                    transition="dialog-transition")
                                    Login                                    
                                v-btn(color="success", @click="dialogLogin = !dialogLogin") Ver

</template>

<script>
  import Login from '../components/Login.vue';

  export default {
    components:{
        Login,
    },
    data(){
        return{
            dialogLogin: false
        }
    }
  }
</script>