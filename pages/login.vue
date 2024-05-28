<script setup lang="ts">
  import loginImage from "~/assets/img/login-image.svg";
  definePageMeta({
    layout: false,
  });
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
      <form action="" class="login-form">
        <FormTitle>Login to your Account</FormTitle>
        <div class="login-form__separator">with email</div>
        <div class="login-form__body">
          <UIActionButton>Log in</UIActionButton>
        </div>
      </form>
    </template>
  </NuxtLayout>
</template>

<style scoped lang="scss"></style>
