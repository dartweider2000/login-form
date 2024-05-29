<script setup lang="ts">
  import otpImage from "~/assets/img/otp-image.svg";
  import type { ILoginRequestBody } from "~/type/UI";

  definePageMeta({
    layout: false,
  });

  const store = useFormStore();
  const { email, username, password } = storeToRefs(store);
  const { clearPasswords } = store;
  const { auth } = useApiStore();

  if (!email.value) await navigateTo("/");

  const {
    beforeInputHandler,
    keyDownHandler,
    pastHandler,
    codeLength,
    digitsList,
    checkCodeValidity,
  } = useOtp();

  const isDisabledButton = computed(
    () => !checkCodeValidity(digitsList.value.join(""))
  );
  const formName = ref<string>("otp");
  const formError = ref<string>("");
  const isRequesting = ref<boolean>(false);

  watch(
    digitsList,
    () => {
      formError.value = "";
    },
    { deep: true }
  );

  const submitHandlerButton = async () => {
    const body: ILoginRequestBody = {
      password: password.value,
      username: username.value,
    };

    try {
      isRequesting.value = true;
      await auth.login(body);
    } catch {
      formError.value = "Такого пользователя нет";
    } finally {
      isRequesting.value = false;
    }
  };

  onBeforeRouteLeave((to, form) => {
    clearPasswords();
  });
</script>

<template>
  <NuxtLayout name="default">
    <template #image>
      <img :src="otpImage" alt="create content otp" />
    </template>
    <template #captionTitle> It's just OTP verification </template>
    <template #captionDescription>
      You are one step away from recovering your password.
    </template>
    <template #form>
      <TemplateForm :name="formName" :is-wide="true" :error="formError">
        <template #header>
          <div class="form-header">
            <FormTitle class="form-header__title">Enter OTP</FormTitle>
            <p class="form-header__main-section">
              Sent OTP on
              <a href="mailto:johndoe@gmail.com" class="form-header__link">{{
                email
              }}</a>
            </p>
            <NuxtLink
              class="form-header__link form-header__change-email"
              to="/registration"
              tabindex="1"
              >Change email</NuxtLink
            >
          </div>
        </template>
        <template #body>
          <div class="opt-body">
            <UIOtpInput
              v-for="(digit, index) in digitsList"
              :key="index"
              :value="digit"
              class="opt-body__input"
              :tabindex="index + 2"
              :autofocus="!index"
              @past="(e) => pastHandler(e, index)"
              @beforeinput="(e) => beforeInputHandler(e, index)!"
              @keydown="(e) => keyDownHandler(e, index)"
            />
          </div>
        </template>
        <template #button>
          <UIActionButton
            :tabindex="codeLength + 2"
            :disabled="isDisabledButton || isRequesting"
            @action="submitHandlerButton"
            >Submit</UIActionButton
          >
        </template>
      </TemplateForm>
    </template>
  </NuxtLayout>
</template>

<style scoped lang="scss">
  .form-header {
    @apply grid gap-[5px];
    // .form-header__title
    &__title {
    }
    // .form-header__main-section
    &__main-section {
      @apply text-[20px] leading-[24px] text-[--input-inner-color];
    }
    // .form-header__link
    &__link {
      @apply text-[--call-to-action] font-bold outline-none;

      transition: var(--trans-03);

      &:focus {
        @apply text-[--purple-dark];
      }

      @media (hover: hover) {
        &:hover {
          @apply text-[--purple-dark];
        }
      }
    }

    // .form-header__change-email
    &__change-email {
      @apply font-bold text-[16px] leading-[24px] justify-self-start;

      // transition: var(--trans-03);

      // &:hover {
      //   @apply text-[--purple-dark];
      // }

      // @media (hover: hover) {
      //   &:hover {
      //     @apply text-[--purple-dark];
      //   }
      // }
    }
  }

  .opt-body {
    @apply grid gap-[20px] min-w-0 justify-center items-center;

    @media (min-width: 601px) {
      @apply grid-flow-col;
    }

    @media (max-width: 600px) {
      @apply grid-cols-[auto,auto,auto] grid-rows-[auto,auto];
    }
    // .opt-body__input
    &__input {
      @apply w-[64px] h-[64px];
    }
  }
</style>
