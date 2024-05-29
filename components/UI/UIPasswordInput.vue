<script setup lang="ts">
  import type { IInputSetup } from "~/type/UI";

  const value = defineModel<string>();

  const props = withDefaults(
    defineProps<{
      isNewPassword?: boolean;
      tabindex?: number;
      autofocus?: boolean;
      required?: boolean;
    }>(),
    {
      isNewPassword: false,
      autofocus: false,
      required: false,
    }
  );

  const { isNewPassword } = toRefs(props);

  const setup = ref<IInputSetup>({
    autocomplete: isNewPassword.value ? "new-password" : "current-password",
    pattern: "^[\\w\\-]+$",
    type: "password",
    placeholder: isNewPassword.value ? "Confirm Password" : "Password",
    name: isNewPassword.value ? "newPassword" : "password",
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
    :required="required"
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
