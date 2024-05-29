<script setup lang="ts">
  import type { IInputSetup } from "~/type/UI";

  const value = defineModel<string>();

  withDefaults(
    defineProps<{
      tabindex?: number;
      autofocus?: boolean;
      required?: boolean;
    }>(),
    {
      autofocus: false,
      required: false,
    }
  );

  const setup = ref<IInputSetup>({
    autocomplete: "email",
    type: "email",
    placeholder: "Email",
    pattern: "^[\\w\\.]+@[\\w\\.]+\\.[\\w\\.]+$",
    name: "email",
  });
</script>

<template>
  <UIBaseInput
    v-model="value"
    :setup="setup"
    :tabindex="tabindex"
    :autofocus="autofocus"
    :required="required"
  >
    <template #prefixIcon>
      <SvgEmail />
    </template>
  </UIBaseInput>
</template>

<style scoped lang="scss"></style>
