<template>
    <div class="w-full bg-white min-h-screen pt-20">
        <div class="w-full max-w-6xl mx-auto">
            <SubNav module-name="Proveedores" />
            <SuppliersTable />
        </div>
    </div>
</template>

<script setup> 
  import SuppliersTable from '../../../../components/datatables/SuppliersTable/SuppliersTable.vue';
</script>