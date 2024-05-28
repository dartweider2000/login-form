<script setup lang="ts">
  import type { IInputSetup } from "~/type/UI";

  const value = defineModel<string>();

  const setup = ref<IInputSetup>({
    autocomplete: "email",
    type: "email",
    placeholder: "Email",
    pattern: /^[\w\.]@[\w\.]\.[\w\.]+$/gi,
  });
</script>

<template>
  <UIBaseInput v-model="value" :setup="setup">
    <template #prefixIcon>
      <SvgEmail />
    </template>
  </UIBaseInput>
</template>

<style scoped lang="scss"></style>
