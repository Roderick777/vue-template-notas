<template lang="pug">
    v-bottom-navigation(v-model="menuPie", style="padding-top: 10px;")
        v-btn(value="recent")
            span Reciente
            v-icon mdi-history
        v-btn(value="favorites")
            span Favoritos
            v-icon mdi-heart
        v-btn(value="nearby")
            span Cerca
            v-icon mdi-map-marker
</template>

<script>
    export default {
        name: 'NavegadorPie',
        props: {
            msg: String
        },
        data(){
            return {
                menuPie : true,
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
