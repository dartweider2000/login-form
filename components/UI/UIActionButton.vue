<script setup lang="ts">
  defineEmits<{
    action: [];
  }>();
</script>

<template>
  <button class="button" @click="$emit('action')">
    <slot />
  </button>
</template>

<style scoped lang="scss">
  .button {
    @apply font-bold text-[20px] leading-[24px] text-white py-[20px] max-w-[453px] w-full flex justify-center items-center rounded-[10px] uppercase bg-[--call-to-action];
    transition: var(--trans-03);

    &:disabled {
      @apply bg-[--input-inner-color];
    }

    &:not(:disabled) {
      &:focus {
        @apply bg-[--purple-dark];
      }

      @media (hover: hover) {
        &:hover {
          @apply bg-[--purple-dark];
        }
      }
    }
  }
</style>
