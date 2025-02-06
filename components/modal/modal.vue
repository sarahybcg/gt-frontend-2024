<template>
  <div
    :class="`${hidden} duration-300 overflow-y-auto overflow-x-hidden fixed ${positions[position]} w-full inset-1 h-full max-h-full`"
  >
    <div
      :class="`relative w-full mx-5 md:mx-10 max-h-full ${sizes[size]} overflow-hidden ${!flat ? 'rounded-lg' : ''} z-50 ${opacity} transform transition-all`"
    >
      <div :class="`relative bg-white shadow rounded-t-xl`">
        <!-- Modal header -->
        <div class="flex bg-slate-800 items-center justify-between p-4 md:p-5">
          <div class="px-4 sm:px-0">
            <h3 class="text-base font-semibold leading-7 text-white">
              {{ title }}
            </h3>
            <p
              v-if="subtitle"
              class="mt-1 max-w-2xl text-sm leading-6 text-gray-100"
            >
              {{ subtitle }}
            </p>
          </div>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            @click="$emit('update:modelValue', false)"
          >
            <svg-close class="w-8" />
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-6 text-black max-h-[70vh] overflow-y-auto">
          <slot />
        </div>
        <!-- Modal footer -->
        <slot v-if="!!$slots.footer" name="footer" />
        <div
          v-else
          :class="`flex items-center justify-end p-4 md:p-5 border-t border-gray-200 dark:border-gray-600`"
        >
          <km-btn
            type="button"
            rounded="full"
            @click="$emit('update:modelValue', false)"
          >
            Cerrar
          </km-btn>
        </div>
      </div>
    </div>

    <div
      :class="`bg-red-500 ${opacity} transition-opacity backdrop-blur-sm bg-slate-800/50 absolute z-40 w-full h-full`"
      @click="$emit('update:modelValue', false)"
    ></div>
  </div>
</template>

<script lang="ts">
type sizeType = "x-small" | "small" | "large" | "x-large";
type positionModal =
  | "top-left"
  | "top-right"
  | "top-center"
  | "center-left"
  | "center-center"
  | "center-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";
export default {
  data() {
    return {
      sizes: {
        "x-small": "max-w-[250px]",
        small: "max-w-md",
        large: "max-w-4xl",
        "x-large": "max-w-7xl",
      },
      positions: {
        "top-left": "justify-start items-start",
        "top-right": "justify-end items-start",
        "top-center": "justify-center items-start",
        "bottom-left": "justify-start items-end",
        "bottom-right": "justify-end items-end",
        "bottom-center": "justify-center items-end",
        "center-left": "justify-start items-center",
        "center-right": "justify-end items-center",
        "center-center": "justify-center items-center",
      },
      hidden: "hidden",
      opacity: "opacity-0",
    };
  },
  watch: {
    modelValue(newVal) {
      if (newVal) {
        this.hidden = "flex";
        setTimeout(() => {
          this.opacity = "";
          this.scale = "";
        }, 100);
      } else {
        setTimeout(() => {
          this.hidden = "hidden";
          this.opacity = "opacity-0";
        }, 100);
      }
    },
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    flat: {
      type: Boolean,
      default: false,
    },
    subtitle: {
      type: String,
    },
    size: {
      type: String as PropType<sizeType>,
      default: "small",
    },
    position: {
      type: String as PropType<positionModal>,
      default: "center-center",
    },
  },
};
</script>