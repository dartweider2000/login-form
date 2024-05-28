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
  </NuxtLayout>
</template>

<style scoped lang="scss"></style>
