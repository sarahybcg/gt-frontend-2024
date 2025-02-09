<template>
    <div>
        <ProgressBar :currentStep="step" :steps="[1, 2, 3]" />
        <component :is="currentComponent" />
        <SuccessModal v-if="success" @close="closeModal" />
    </div>
    </template>
    
    <script setup>
  
    
  import {ProgressBar} from '../@/components/ProgressBar.vue';
  import StepOne from '../@/components/ProgressBar/StepOne.vue';
  import StepTwo from '../@/components/StepTwo.vue';
  import StepThree from '../@/components/StepThree.vue';
  import SuccessModal from '../@/components/SuccessModal.vue';
  
  const store = useEmployeeStore();
  const step = computed(() => store.step);
  const success = computed(() => store.success);
  
  const currentComponent = computed(() => {
    if (step.value === 1) return StepOne;
    if (step.value === 2) return StepTwo;
    if (step.value === 3) return StepThree;
  });
  
  function closeModal() {
    store.setSuccess(false);
  }
  </script>
  