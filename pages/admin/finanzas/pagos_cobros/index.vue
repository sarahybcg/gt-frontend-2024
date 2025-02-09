<template>
    <div class="flex">
        <div class="">
        
        <SubNav module-name="Pagos y Cobros"/>
    </div>
        <Container class=" w-full" button-title="Pago">
            
                <datatables-PaymentTable></datatables-PaymentTable>
                <datatables-SupplierTable></datatables-SupplierTable>
                <datatables-ProgressBar></datatables-ProgressBar>
            
        </Container>
    </div>
</template>
<script setup>
</script>