<script setup lang="ts">
  const value = defineModel<boolean>();

  defineProps<{
    tabindex?: number;
  }>();

  const isFocus = ref<boolean>(false);
</script>

<template>
  <button
    class="checkbox"
    :class="{ 'checkbox_is-focus': isFocus, 'checkbox_is-checked': value }"
    @focusin="isFocus = true"
    @focusout="isFocus = false"
  >
    <input
      v-model="value"
      class="checkbox__el"
      type="checkbox"
      :tabindex="tabindex"
      @keydown.enter.stop.prevent="value = !value"
    />
  </button>
</template>

<style scoped lang="scss">
  .checkbox {
    @apply w-[20px] h-[20px] rounded-[4px] border-[2px] border-solid border-[--call-to-action] relative;

    &:before {
      content: "";
      @apply absolute top-[50%] left-[50%] w-0 h-0 translate-x-[-50%] translate-y-[-50%] bg-[--call-to-action] rounded-[2px];

      transition: var(--trans-03);
    }

    &_is-focus {
      @apply border-solid border-[--purple-dark];
    }

    &_is-checked {
      &:before {
        @apply w-[12px] h-[12px];
      }
    }

    // .checkbox__el
    &__el {
      @apply absolute top-0 left-0 w-full h-full opacity-0 z-10 cursor-pointer;
    }
  }
</style>
