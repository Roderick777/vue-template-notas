<template>
    <v-dialog v-model="dialogCrear" scrollable  
        max-width="500px" transition="dialog-transition">
        <v-card>
            <v-card-title >
                Crear Nota
            </v-card-title>
            <v-card-text v-if="nota">
                <v-text-field name="titulo" label="Título" v-model="nota.titulo"></v-text-field>
                <v-textarea name="descripcion" label="Descripción" rows="7" row-height="20" 
                    hint="Ingresa aquí el contenido de la nota" 
                    v-model="nota.descripcion"
                    style="resize: none; margin-bottom: 10px;" 
                ></v-textarea>
                <v-btn color="primary" @click="guardarNota()">Guardar</v-btn>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    titulo: String,
    msg: String
  }
}
</script>

<style scoped>
</style>
