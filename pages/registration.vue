<script setup lang="ts">
  import createImage from "~/assets/img/registration-image.svg";

  definePageMeta({
    layout: false,
  });

  const { username, email, password, newPassword } = storeToRefs(
    useFormStore()
  );
</script>

<template>
  <NuxtLayout name="default">
    <template #image>
      <div class="image-wrapper">
        <img :src="createImage" alt="create content image" />
      </div>
    </template>
    <template #captionTitle> Join us! </template>
    <template #captionDescription>
      Just go through the boring process of creating an account.
    </template>
    <template #form>
      <TemplateForm>
        <template #header>
          <div class="form-header">
            <FormTitle class="form-header__title"
              >Create your account</FormTitle
            >
            <div class="form-header__sub-title">Unlock all Features!</div>
          </div>
        </template>
        <template #body>
          <UIUsernameInput v-model="username" :autofocus="true" :tabindex="1" />
          <UIEmailInput v-model="email" :tabindex="2" />
          <UIPasswordInput v-model="password" :tabindex="3" />
          <UIPasswordInput
            v-model="newPassword"
            :is-new-password="true"
            :tabindex="4"
          />
        </template>
        <template #button>
          <UIActionButton tabindex="5">Sign In</UIActionButton>
        </template>
        <template #caption>
          <TemplateFormCaption
            description="You have account?"
            linkText="Login now"
            linkUrl="/login"
            :tabindex="6"
          />
        </template>
      </TemplateForm>
    </template>
  </NuxtLayout>
</template>

<style scoped lang="scss">
  .image-wrapper {
    @apply absolute top-[50%] left-0 translate-y-[-40%] w-[663px] h-[522px];

    & > * {
      @apply object-cover w-full h-full;
    }
  }

  .form-header {
    @apply grid gap-[5px];
    // .form-header__title
    &__title {
    }
    // .form-header__sub-title
    &__sub-title {
      @apply text-[20px] leading-[24px] text-[--input-inner-color];
    }
  }
</style>
