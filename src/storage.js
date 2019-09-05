export default {
    notas:{
        get(){
            return JSON.parse(localStorage.getItem('notas'));
        },
        set(datos){ // Datos en formato json
            localStorage.setItem('notas', JSON.stringify(datos));
        },
        delete(datos, indice){
            datos.splice(indice, 1);
            localStorage.setItem('notas', JSON.stringify(datos));
            return datos;
        }
    }
}