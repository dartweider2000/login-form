<script setup lang="ts">
  import otpImage from "~/assets/img/otp-image.svg";

  definePageMeta({
    layout: false,
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
      <TemplateForm :is-wide="true">
        <template #header>
          <div class="form-header">
            <FormTitle class="form-header__title">Enter OTP</FormTitle>
            <p class="form-header__main-section">
              Sent OTP on
              <a href="mailto:johndoe@gmail.com" class="form-header__link"
                >johndoe@gmail.com</a
              >
            </p>
            <NuxtLink class="form-header__link" to="/registration"
              >Change email</NuxtLink
            >
          </div>
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
    }
    // .form-header__link
    &__link {
    }
  }
</style>
