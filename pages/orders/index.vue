<template>
    <div class="p-4">
      <h1 class="text-2xl font-bold mb-4">Órdenes Pendientes de Aprobación</h1>
      <OrderTable :orders="orders" @view-detail="openDetailModal" />
      <OrderDetailModal
        v-if="selectedOrder"
        :order="selectedOrder"
        @close="closeDetailModal"
        @approve="approveOrder"
        @reject="rejectOrder"
        @request-modification="requestModification"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { useOrdersStore } from '~/stores/orders';
  import OrderTable from '~/components/orders/OrderTable.vue';
  import OrderDetailModal from '~/components/orders/OrderDetailModal.vue';
  
  const ordersStore = useOrdersStore();
  const orders = await ordersStore.fetchOrders();
  
  const selectedOrder = ref<Order | null>(null);
  
  const openDetailModal = (orderId: string) => {
    ordersStore.selectOrder(orderId);
    selectedOrder.value = ordersStore.selectedOrder;
  };
  
  const closeDetailModal = () => {
    selectedOrder.value = null;
  };
  
  const approveOrder = (orderId: string) => {
    ordersStore.approveOrder(orderId);
    closeDetailModal();
  };
  
  const rejectOrder = (orderId: string, reason: string) => {
    ordersStore.rejectOrder(orderId, reason);
    closeDetailModal();
  };
  
  const requestModification = (orderId: string) => {
    ordersStore.requestModification(orderId);
    closeDetailModal();
  };
  </script>