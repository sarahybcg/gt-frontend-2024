<template>
  <div class="progress-bar">
    <div
      v-for="step in steps"
      :key="step"
      :class="['circle', { active: currentStep >= step }]"
    >
      <span>{{ step }}</span>
    </div>
    <div class="line"></div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue';

export default {
  name: 'ProgressBar',
  props: {
    currentStep: {
      type: Number,
      required: true,
    },
    steps: {
      type: Array as PropType<number[]>, // Definido correctamente como un array de números
      required: true,
    },
  },
};
</script>

<style scoped>
.progress-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
}
.circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ddd;
  color: white;
  font-weight: bold;
  transition: background 0.3s;
}
.circle.active {
  background: #1abc9c;
}
.line {
  flex-grow: 1;
  height: 4px;
  background: #ddd;
  position: absolute;
  top: 50%;
  z-index: -1;
}
</style>
