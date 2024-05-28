<script setup lang="ts">
  defineProps<{
    description: string;
    linkUrl: string;
    linkText: string;
  }>();
</script>

<template>
  <div class="caption">
    <p class="caption__description">{{ description }}</p>
    <NuxtLink class="caption__link" :to="linkUrl">{{ linkText }}</NuxtLink>
  </div>
</template>

<style scoped lang="scss">
  .caption {
    @apply text-[16px] leading-[24px] flex justify-center gap-x-[5px] flex-wrap;

    // .caption__description
    &__description {
      @apply text-[-gray];
    }
    // .caption__link
    &__link {
      @apply text-[--call-to-action] font-bold;
    }
  }
</style>
