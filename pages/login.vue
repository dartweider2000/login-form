<script setup lang="ts">
  import loginImage from "~/assets/img/login-image.svg";
  definePageMeta({
    layout: false,
  });

  const { email, password } = storeToRefs(useFormStore());
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
      <TemplateForm>
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
          <UIEmailInput v-model="email" :tabindex="1" :autofocus="true" />
          <UIPasswordInput v-model="password" :tabindex="2" />
        </template>
        <template #button>
          <UIActionButton tabindex="3">Log in</UIActionButton>
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
