<template src="../views/ProyeccionConsumoTable.html"></template>

<script>
import "../assets/ProyeccionConsumoTable.css";
export default {
    data() {
        return {
            searchQuery: "",
            selectedPrioridad: "",
            proyecciones: [
                { fecha: '2024-02-01', producto: '', proyeccionAnterior: '', realConsumida: '', desviacion: '' },
                { fecha: '2024-02-05', producto: '', proyeccionAnterior: '', realConsumida: '', desviacion: '' },
                { fecha: '2024-02-10', producto: '', proyeccionAnterior: '', realConsumida: '', desviacion: '' },
                { fecha: '2024-02-15', producto: '', proyeccionAnterior: '', realConsumida: '', desviacion: '' }
            ]
        };
    },
    computed: {
        filteredProyecciones() {
            let filtered = this.proyecciones.filter(proyeccion =>
                proyeccion.producto.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
            return filtered;
        }
    }
};
</script>

<style scoped src="./ProyeccionConsumoTable.css"></style>