<template>
  <Teleport v-if="modelValue" :to="teleport">
    <div
      v-if="modelValue"
      class="modal-overlay"
      :class="mergeClasses(uiOutsideClass, outsideClass).value"
      @click.self="handleOutsideClick"
    >
      <div
        class="modal-content"
        :class="mergeClasses(uiModalClass, modalClass).value"
      >
        <slot name="close"></slot>
        <slot name="default"></slot>
      </div>
    </div>
  </Teleport>
</template>
    
<script setup lang="ts">
import { modalSlots } from "./Slots";
import { coreProps } from "./Props";
import { modalEmits } from "./Emits";
import { useMergeClasses } from "../../composables/useMergeClasses";
const mergeClasses = useMergeClasses();
import { ref } from "vue";
const props = defineProps(coreProps);
const slots = defineSlots<modalSlots>();
const emit = defineEmits(modalEmits);
const uiModalClass = ref(
  "bg-teal-900 text-white rounded-xl p-5 w-[400px] h-[200px] -translate-y-5 shadow-xl z-[1000]"
);
const uiOutsideClass = ref(
  "bg-black bg-opacity-10 fixed inset-0 backdrop-blur-sm flex items-center justify-center opacity-0 z-[9999]"
);
function handleOutsideClick() {
  if (props.closeOnOutside) {
    const modalOverlay = document.querySelector(".modal-overlay");
    if (modalOverlay) {
      modalOverlay.classList.add("fadeOut");
      setTimeout(() => {
        emit("update:modelValue", false);
      }, 500);
    }
  }
}
</script>