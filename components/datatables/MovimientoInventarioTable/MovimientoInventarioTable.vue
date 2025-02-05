<template src="../views/MovimientoInvetarioTable.html"></template>

<script>
import "../assets/MovimientoInvetarioTable.css";
export default {
    data() {
        return {
            searchQuery: "",
            selectedCantidad: "",
            selectedTipo: "",
            movimientos: [
                { fecha: '2024-02-01', producto: '', cantidad: '', tipo: '', responsable: '' },
                { fecha: '2024-02-05', producto: '', cantidad: '', tipo: '', responsable: '' },
                { fecha: '2024-02-10', producto: '', cantidad: '', tipo: '', responsable: '' },
                { fecha: '2024-02-15', producto: '', cantidad: '', tipo: '', responsable: '' }
            ]
        };
    },
    computed: {
        filteredMovimientos() {
            let filtered = this.movimientos.filter(movimiento =>
                movimiento.producto.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
            if (this.selectedTipo) {
                filtered = filtered.filter(m => m.tipo === this.selectedTipo);
            }
            if (this.selectedCantidad === "asc") {
                filtered.sort((a, b) => a.cantidad - b.cantidad);
            } else if (this.selectedCantidad === "desc") {
                filtered.sort((a, b) => b.cantidad - a.cantidad);
            }
            return filtered;
        }
    }
};
</script>

<style scoped src="./MovimientoInvetarioTable.css"></style>