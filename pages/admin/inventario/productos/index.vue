 

  <template>
    <div class="w-full bg-white min-h-screen pt-20">
        <div class="w-full max-w-6xl mx-auto">
            <SubNav module-name="Productos" />
            <ProductTable />
        </div>
    </div>
</template>

<script setup> 
  import ProductTable from '@/components/datatables/ProductTable/ProductTable.vue'
</script>