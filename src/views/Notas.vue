<template lang="pug">
    v-container(fluid, style="padding: 5px;")
        v-layout(wrap)
            v-flex(xs12, sm12, md6, lg4, xl3, v-for="(not, i) in notas" :key="`nota_${i}`")
                v-card.ma-1
                    v-card-text {{ not.titulo }}
                    v-card-actions
                        v-btn(icon, color="primary", @click="editar(not, i)")
                            v-icon mdi-pencil
                        v-btn(icon, color="primary", @click="eliminar(not, i)")
                            v-icon mdi-delete-outline
        v-dialog(v-model="dialogCrear", scrollable, max-width="500px", transition="dialog-transition")
            v-card
                v-card-title
                    span(v-if="accion == 'crear'") Crear Nota
                    span(v-if="accion == 'editar'") Editar Nota
                v-card-text(v-if="nota")
                    v-text-field(name="titulo", label="Título", v-model="nota.titulo")
                    v-textarea(name="descripcion", label="Descripción", rows="7", row-height="20"
                        ,hint="Ingresa aquí el contenido de la nota" 
                        ,v-model="nota.descripcion"
                        ,style="resize: none; margin-bottom: 10px;")
                    v-btn(color="primary", v-if="accion == 'crear'", @click="guardarNota()") Guardar
                    v-btn(color="primary", v-if="accion == 'editar'", @click="guardarNota()") Guardar Cambios
        v-btn(@click="crearNota()", absolute, dark, fab, bottom, right
            ,color="pink" 
            ,style="position: fixed; bottom: 20px;")
            v-icon mdi-plus
</template>

<script>
    import Storage from '../storage';

    export default {
        props: {
            source: String,
        },
        data: () => ({
            accion : 'crear', // valores : crear, editar, este valor cambiara de acuerdo a la acción, si s e esta creando una nota el valor será crear, si se esta editando, el valor sera editar
            drawer : null,
            notas : null,
            nota : null,
            dialogCrear : false,
        }),
        created(){
            this.notas = (Storage.notas.get() == null)? null : Storage.notas.get();
        },
        methods: {
            crearNota(){
                this.dialogCrear = true;
                this.accion = 'crear';
                this.nota = {
                    titulo : '',
                    descripcion: ''
                }
            },

            guardarNota(){
                this.notas = (this.notas == null)? this.notas = [] : this.notas;
                if (this.nota.indice != undefined){ // Si estamos editando
                    this.notas[this.nota.indice] = this.nota;
                } else { // Si estamos creando
                    this.notas.push(this.nota);
                }
                Storage.notas.set(this.notas)
                this.dialogCrear = false;
                this.nota = null;
            },

            eliminar(nota, i){
                this.notas = Storage.notas.delete(this.notas, i);
            },

            editar(nota, i){
                debugger;
                nota.indice = i
                this.nota = nota;
                this.dialogCrear = true;
                this.accion = 'editar';
            }
        }
    }
</script>