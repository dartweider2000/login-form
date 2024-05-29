<script setup lang="ts">
  import type { IInputSetup } from "~/type/UI";

  const value = defineModel<string>();

  withDefaults(
    defineProps<{
      tabindex?: number;
      autofocus?: boolean;
    }>(),
    {
      autofocus: false,
    }
  );

  const setup = ref<IInputSetup>({
    autocomplete: "nickname",
    type: "text",
    placeholder: "Username",
    pattern: "^[\\w\\.\\-]+$",
    name: "username",
  });
</script>

<template>
  <UIBaseInput
    v-model="value"
    :setup="setup"
    :tabindex="tabindex"
    :autofocus="autofocus"
  >
    <template #prefixIcon>
      <SvgPerson />
    </template>
  </UIBaseInput>
</template>

<style scoped lang="scss"></style>
