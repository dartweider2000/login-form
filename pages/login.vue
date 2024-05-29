<script setup lang="ts">
  import loginImage from "~/assets/img/login-image.svg";
  import type { ILoginRequestBody } from "~/type/UI";
  definePageMeta({
    layout: false,
  });

  const { username: usernameValue, password: passwordValue } = storeToRefs(
    useFormStore()
  );
  const { auth } = useApiStore();

  const isDisabledButton = computed(
    () => !(usernameValue.value && passwordValue.value)
  );

  const formName = ref<string>("login");
  const formError = ref<string>("");
  const isRequesting = ref<boolean>(false);

  watch([usernameValue, passwordValue], () => {
    formError.value = "";
  });

  const formSubmitHandler = async () => {
    const elements = document.forms.namedItem(formName.value)?.elements;

    // @ts-ignore
    const { username, password }: { [key: string]: HTMLInputElement } =
      elements;

    if ((username.checkValidity(), password.checkValidity())) {
      const body: ILoginRequestBody = {
        password: password.value,
        username: usernameValue.value,
      };

      try {
        isRequesting.value = true;
        await auth.login(body);
      } catch (err) {
        formError.value = "Такого пользователя нет";
      } finally {
        isRequesting.value = false;
      }
    }
  };
</script>

<template>
  <NuxtLayout name="default">
    <template #image>
      <img :src="loginImage" alt="login content image" />
    </template>
    <template #captionTitle> Connect with any device. </template>
    <template #captionDescription>
      Everything you need is an internet connection.
    </template>
    <template #form>
      <TemplateForm :name="formName" :error="formError">
        <template #header>
          <div class="form-header">
            <FormTitle class="form-header__title"
              >Login to your Account</FormTitle
            >
            <div class="form-header__separator">
              <span>with email</span>
            </div>
          </div>
        </template>
        <template #body>
          <UIUsernameInput
            v-model="usernameValue"
            :tabindex="1"
            :autofocus="true"
            :required="true"
          />
          <UIPasswordInput
            v-model="passwordValue"
            :tabindex="2"
            :required="true"
          />
        </template>
        <template #button>
          <UIActionButton
            tabindex="3"
            :disabled="isDisabledButton || isRequesting"
            @action="formSubmitHandler"
            >Log in</UIActionButton
          >
        </template>
        <template #caption>
          <TemplateFormCaption
            description="Don’t have account?"
            linkText="Create an account"
            linkUrl="/registration"
            :tabindex="4"
          />
        </template>
      </TemplateForm>
    </template>
  </NuxtLayout>
</template>

<style scoped lang="scss">
  .form-header {
    @apply grid gap-[25px];
    // .form-header__title
    &__title {
    }
    // .form-header__separator
    &__separator {
      @apply text-[--input-inner-color] text-[15px] leading-[24px] font-medium relative text-center grid  items-center px-[12px];

      grid-template: 1fr / 1fr clamp(140px, 40vw, 213px) 1fr;

      &:before,
      &:after {
        content: "";
        @apply block h-[1px] bg-[--input-inner-color];
      }
    }
  }
</style>
