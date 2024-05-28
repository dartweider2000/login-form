<script setup lang="ts">
  import createImage from "~/assets/img/registration-image.svg";

  definePageMeta({
    layout: false,
  });
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
  </NuxtLayout>
</template>

<style scoped lang="scss">
  .image-wrapper {
    @apply absolute top-[50%] left-0 translate-y-[-40%] w-[663px] h-[522px];

    & > * {
      @apply object-cover w-full h-full;
    }
  }
</style>
