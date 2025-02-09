import { defineStore } from 'pinia';

// Definir los tipos para el estado
interface Employee {
  name: string;
  lastName: string;
  id: string;
  birthDate: string;
  email: string;
  city: string;
  phone: string;
  description: string;
}

interface EmployeeStoreState {
  step: number;
  success: boolean;
  employee: Employee;
}

export const useEmployeeStore = defineStore('employee', {
  state: (): EmployeeStoreState => ({
    step: 1,
    success: false,
    employee: {
      name: '',
      lastName: '',
      id: '',
      birthDate: '',
      email: '',
      city: '',
      phone: '',
      description: '',
    },
  }),
  actions: {
    // Acción para cambiar el paso
    setStep(newStep: number) {
      this.step = newStep;
    },
    // Acción para actualizar el estado de éxito
    setSuccess(status: boolean) {
      this.success = status;
    },
  },
});
