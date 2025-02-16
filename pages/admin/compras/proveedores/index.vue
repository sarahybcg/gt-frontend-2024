<template>
    <div class="w-full bg-white min-h-screen pt-20">
        <div class="w-full max-w-6xl mx-auto">
            <SubNav module-name="Proveedores" />
            <ProveedorForm />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProveedorForm from "@/components/forms/ProveedorForm/ProveedorForm.vue";

export default defineComponent({
    name: "Proveedores",
    components: { ProveedorForm },
});
</script>