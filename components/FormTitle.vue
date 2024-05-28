<script setup lang="ts"></script>

<template>
  <h1 class="form-title">
    <slot />
  </h1>
</template>

<style scoped lang="scss">
  .form-title {
    @apply font-bold text-[40px] leading-[100%] text-[--black];
  }
</style>
