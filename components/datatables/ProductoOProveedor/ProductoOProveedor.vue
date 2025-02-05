<template src="../views/ProductoOProveedor.html"></template>


<script>
import "../assets/ProductoOProveedor.css";
export default {
    data() {
        return {
            searchQuery: "",
            selectedCategoria: "",
            productos: [
                { fecha: '2024-02-01', proveedor: '', nombre: '', categoria: '', costo: '$' },
                { fecha: '2024-02-05', proveedor: '', nombre: '', categoria: '', costo: '$' },
                { fecha: '2024-02-10', proveedor: '', nombre: '', categoria: '', costo: '$' },
                { fecha: '2024-02-15', proveedor: '', nombre: '', categoria: '', costo: '$' }
            ]
        };
    },
    computed: {
        filteredProductos() {
            let filtered = this.productos.filter(producto =>
                producto.nombre.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                producto.proveedor.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
            if (this.selectedCategoria) {
                filtered = filtered.filter(p => p.categoria === this.selectedCategoria);
            }
            return filtered;
        }
    }
};
</script>

<style scoped src="./ProductoOProveedor.css"></style>