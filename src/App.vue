<template lang="pug">
    v-app#keep
        v-app-bar(app, clipped-left)
            v-app-bar-nav-icon(@click="drawer = !drawer")
            span.title.ml-3.mr-5 Note 
                span.font-weight-light Roo
            v-text-field(solo-inverted, flat, hide-details, label="Buscar", prepend-inner-icon="mdi-magnify")
            div.flex-grow-1

        v-navigation-drawer(v-model="drawer", app, clipped)
            v-list(dense)
                v-btn(rounded, color="pink", style="width: calc(100% - 10px); margin: 5px;",  @click="modoTema()") Cambiar Tema
                template(v-for="(item, i) in items")
                    v-row(v-if="item.heading", :key="i" align="center")
                        v-col(cols="6")
                            v-subheader(v-if="item.heading") {{ item.heading }}
                        v-col.text-right(cols="6")
                            v-btn(small, text) edit
                    v-divider(v-else-if="item.divider", :key="i", dark, class="my-4")
                    v-list-item(v-else, :key="i")
                        v-list-item-action
                            v-icon(color="blue") {{ item.icon }}
                        v-list-item-content
                            v-list-item-title
                                router-link(:to="item.enlace", style="text-decoration: none;") {{ item.text }}
        v-content
            router-view
        NavegadorPie
</template>

<script>
import NavegadorPie from '../src/components/NavegadorPie'
export default {
    created(){
        this.$vuetify.theme.dark = true  
    },
    components:{
        NavegadorPie
    },
    data: () => ({
      drawer: null,
      items: [
        { icon: 'mdi-apps', enlace: '/componentes', text: 'Componentes' },
        { icon: 'mdi-lightbulb-outline', enlace: '/', text: 'Notas' },
        { icon: 'mdi-gesture-tap', enlace: '/calendario', text: 'Recordatorios' },
        { divider: true },
        { heading: 'Etiquetas' },
        { icon: 'mdi-add', enlace: '/', text: 'Crer nueva etiqueta' },
        { divider: true },
        { icon: 'mdi-package-down', enlace: '/', text: 'Archivo' },
        { icon: 'mdi-delete-outline', enlace: '/', text: 'Papelera' },
        { divider: true },
        { icon: 'mdi-settings', enlace: '/', text: 'Ajustes' },
        { icon: 'mdi-help', enlace: '/', text: 'Ayuda' },
        { icon: 'mdi-cellphone-link', enlace: '/', text: 'Descargas' },
      ],
    }),
    methods: {
        modoTema(){
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

::-webkit-scrollbar {
    width: 7px;
    background-color:  rgba(0, 0, 0, .5);
} 

::-webkit-scrollbar-thumb {
    background-color: rgba(92, 168, 255, 0.9)/*#1976D2 #000000*/;
    border-radius: 3px; 
    width: 6px;
    
}

</style>
