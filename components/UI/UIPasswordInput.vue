<script setup lang="ts">
  import type { IInputSetup } from "~/type/UI";

  const value = defineModel<string>();

  const props = withDefaults(
    defineProps<{
      isNewPassword?: boolean;
      tabindex?: number;
      autofocus?: boolean;
    }>(),
    {
      isNewPassword: false,
      autofocus: false,
    }
  );

  const { isNewPassword } = toRefs(props);

  const setup = ref<IInputSetup>({
    autocomplete: isNewPassword.value ? "new-password" : "current-password",
    pattern: /^[\w\-]+$/gi,
    type: "password",
    placeholder: isNewPassword.value ? "Confirm Password" : "Password",
  });

  const isOpenPassword = ref<boolean>(false);
  const showClosePasswordHandler = () => {
    isOpenPassword.value = !isOpenPassword.value;

    setup.value.type = isOpenPassword.value ? "text" : "password";
  };
</script>

<template>
  <UIBaseInput
    v-model="value"
    :setup="setup"
    :tabindex="tabindex"
    :autofocus="autofocus"
  >
    <template #prefixIcon>
      <SvgShield />
    </template>
    <template #postfixIcon>
      <button @click.prevent="showClosePasswordHandler">
        <SvgCloseEye v-show="isOpenPassword" />
        <SvgEye v-show="!isOpenPassword" />
      </button>
    </template>
  </UIBaseInput>
</template>

<style scoped lang="scss"></style>
