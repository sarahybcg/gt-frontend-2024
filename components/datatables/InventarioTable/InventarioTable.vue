<template src="../views/InventarioTavble.html"></template>


<script>
import "../assets/InventarioTable.css";
export default {
    data() {
        return {
            searchQuery: "",
            selectedPrioridad: "",
            productos: [
                { nombre: '', stock: "", necesaria: "", consumo: '', fechaRecomendada: '2024-03-01', prioridad: '' },
                { nombre: '', stock: "", necesaria: "", consumo: '', fechaRecomendada: '2024-03-10', prioridad: '' },
                { nombre: '', stock: "", necesaria: "", consumo: '', fechaRecomendada: '2024-03-05', prioridad: '' },
                { nombre: '', stock: "", necesaria: "", consumo: '', fechaRecomendada: '2024-02-28', prioridad: '' }
            ]
        };
    },
    computed: {
        filteredProductos() {
            let filtered = this.productos.filter(producto =>
                producto.nombre.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
            if (this.selectedPrioridad) {
                filtered = filtered.filter(p => p.prioridad === this.selectedPrioridad);
            }
            return filtered;
        }
    },
    methods: {
        editarProducto(index) {
            alert(`Editar producto: ${this.productos[index].nombre}`);
        },
        eliminarProducto(index) {
            if (confirm(`¿Seguro que quieres eliminar ${this.productos[index].nombre}?`)) {
                this.productos.splice(index, 1);
            }
        },
        verProducto(index) {
            alert(`Ver detalles de: ${this.productos[index].nombre}`);
        }
    }
};
</script>

<style scoped src="./InventarioTable.css"></style>