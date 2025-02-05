<template src="../views/ProveedorTable"></template>

<script>
import "../assets/ProveedorTable.css";


export default {
    data() {
        return {
            searchQuery: "",
            selectedPuntualidad: "",
            selectedCalidad: "",
            proveedores: [
                { nombre: 'Proveedor A', volumenCompras: 500, puntualidad: 98, costoPromedio: '$1000', calidad: 4.8 },
                { nombre: 'Proveedor B', volumenCompras: 300, puntualidad: 95, costoPromedio: '$1200', calidad: 4.5 },
                { nombre: 'Proveedor C', volumenCompras: 700, puntualidad: 99, costoPromedio: '$900', calidad: 4.9 },
                { nombre: 'Proveedor D', volumenCompras: 400, puntualidad: 96, costoPromedio: '$1100', calidad: 4.7 }
            ]
        };
    },
    computed: {
        filteredProveedores() {
            let filtered = this.proveedores.filter(proveedor =>
                proveedor.nombre.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
            if (this.selectedPuntualidad === "asc") {
                filtered.sort((a, b) => a.puntualidad - b.puntualidad);
            } else if (this.selectedPuntualidad === "desc") {
                filtered.sort((a, b) => b.puntualidad - a.puntualidad);
            }
            if (this.selectedCalidad === "asc") {
                filtered.sort((a, b) => a.calidad - b.calidad);
            } else if (this.selectedCalidad === "desc") {
                filtered.sort((a, b) => b.calidad - a.calidad);
            }
            return filtered;
        }
    },
    methods: {
        editarProveedor(index) {
            alert(`Editar proveedor: ${this.proveedores[index].nombre}`);
        },
        eliminarProveedor(index) {
            if (confirm(`¿Seguro que quieres eliminar ${this.proveedores[index].nombre}?`)) {
                this.proveedores.splice(index, 1);
            }
        },
        verProveedor(index) {
            alert(`Ver detalles de: ${this.proveedores[index].nombre}`);
        }
    }
};
</script>
<style scoped src="./ProveedorTable.css"></style>