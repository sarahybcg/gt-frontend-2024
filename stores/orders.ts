import { defineStore } from 'pinia';

interface Order {
  id: string;
  provider: string;
  requestDate: string;
  department: string;
  status: 'Pendiente' | 'Aprobado' | 'Rechazado';
  products: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
    total: number;
  }>;
  adjustments: number;
  finalAmount: number;
}

export const useOrdersStore = defineStore('orders', {
  state: () => ({
    orders: [] as Order[],
    selectedOrder: null as Order | null,
  }),
  actions: {
    async fetchOrders() {
      // Simulación de fetch desde un API
      this.orders = [
        {
          id: '001',
          provider: 'Proveedor A',
          requestDate: '01/02/2023',
          department: 'Compras',
          status: 'Pendiente',
          products: [
            { id: '1', name: 'Producto 1', quantity: 10, price: 50, total: 500 },
            { id: '2', name: 'Producto 2', quantity: 5, price: 30, total: 150 },
          ],
          adjustments: 50,
          finalAmount: 700,
        },
        {
          id: '002',
          provider: 'Proveedor B',
          requestDate: '02/02/2023',
          department: 'Ventas',
          status: 'Pendiente',
          products: [
            { id: '3', name: 'Producto 3', quantity: 20, price: 25, total: 500 },
          ],
          adjustments: 0,
          finalAmount: 500,
        },
      ];
    },
    selectOrder(orderId: string) {
      this.selectedOrder = this.orders.find((order) => order.id === orderId) || null;
    },
    approveOrder(orderId: string) {
      const order = this.orders.find((order) => order.id === orderId);
      if (order) order.status = 'Aprobado';
    },
    rejectOrder(orderId: string, reason: string) {
      const order = this.orders.find((order) => order.id === orderId);
      if (order) {
        order.status = 'Rechazado';
        order.adjustments = -order.finalAmount * 0.1; // Ejemplo de ajuste por rechazo
      }
    },
    requestModification(orderId: string) {
      const order = this.orders.find((order) => order.id === orderId);
      if (order) order.status = 'Pendiente';
    },
  },
});