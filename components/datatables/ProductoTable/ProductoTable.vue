<template src="../views/ProductoTable.html"></template>

<script>
import "../assets/ProductoTable.css";

export default {
    data() {
        return {
            searchQuery: "",
            selectedQuantity: "",
            selectedStatus: "",
            productos: [
                { nombre: 'Laptop ASUS', cantidad: 10, costo: '$800', proveedor: 'ASUS Corp.', fecha: '2024-02-01', estado: 'Disponible' },
                { nombre: 'Monitor LG', cantidad: 5, costo: '$300', proveedor: 'LG Electronics', fecha: '2024-01-15', estado: 'Agotado' },
                { nombre: 'Teclado Mecánico', cantidad: 15, costo: '$120', proveedor: 'HyperX', fecha: '2024-03-10', estado: 'Disponible' },
                { nombre: 'Mouse Logitech', cantidad: 20, costo: '$50', proveedor: 'Logitech', fecha: '2024-01-20', estado: 'Disponible' }
            ]
        };
    },
    computed: {
        filteredProductos() {
            let filtered = this.productos.filter(producto =>
                producto.nombre.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
            if (this.selectedStatus) {
                filtered = filtered.filter(p => p.estado === this.selectedStatus);
            }
            if (this.selectedQuantity === "asc") {
                filtered.sort((a, b) => a.cantidad - b.cantidad);
            } else if (this.selectedQuantity === "desc") {
                filtered.sort((a, b) => b.cantidad - a.cantidad);
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
<style scoped src="./ProductoTable.css"></style>