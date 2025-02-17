<template>
    <div class="w-full bg-white min-h-screen pt-20">
        <div class="w-full max-w-6xl mx-auto">
            <SubNav module-name="Proveedores" />
            <SuppliersTable />
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import SuppliersTable from "@/components/datatables/SuppliersTable/SuppliersTable.vue"; 

export default defineComponent({
    name: "Proveedores",
    components: { SuppliersTable },
});
</script>