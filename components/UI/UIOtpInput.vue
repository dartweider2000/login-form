<script setup lang="ts">
  import type { Digit, IInputSetup } from "~/type/UI";

  withDefaults(
    defineProps<{
      value: Digit;
      tabindex?: number;
      autofocus?: boolean;
    }>(),
    {
      autofocus: false,
    }
  );

  const setup = ref<IInputSetup>({
    autocomplete: "one-time-code",
    type: "text",
    placeholder: "-",
    pattern: /^\d$/gi,
    inputmode: "numeric",
  });
</script>

<template>
  <UIBaseInput
    class="otp-input"
    :model-value="value"
    :setup="setup"
    :tabindex="tabindex"
    :autofocus="autofocus"
  />
</template>

<style scoped lang="scss">
  :deep(.input) {
    @apply p-0;
  }
  .otp-input {
    @apply p-0;

    &:deep(.input__el) {
      @apply py-[10px] px-[10px] p-0 text-[30px] leading-[24px] text-center;
    }
  }
</style>
