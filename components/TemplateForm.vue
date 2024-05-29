<script setup lang="ts">
  withDefaults(
    defineProps<{
      isWide?: boolean;
    }>(),
    {
      isWide: false,
    }
  );

  defineSlots<{
    header: () => any;
    body: () => any;
    button: () => any;
    caption?: () => any;
  }>();
</script>

<template>
  <form
    action=""
    class="form"
    :class="{ 'form_is-wide': isWide }"
    @submit.prevent
  >
    <div class="form__header">
      <slot name="header" />
    </div>
    <div class="form__wrapper">
      <div class="form__body">
        <slot name="body" />
      </div>
      <div class="form__actions">
        <div class="form__button">
          <slot name="button" />
        </div>
        <div v-if="$slots.caption" class="form__caption">
          <slot name="caption" />
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped lang="scss">
  .form {
    @apply max-w-[477px] w-full m-auto grid gap-[25px] min-w-0;

    &_is-wide {
      @apply max-w-none w-auto m-0;
    }
    // .form__header
    &__header {
    }
    // .form__wrapper
    &__wrapper {
      @apply px-[12px] grid gap-[25px];
    }
    // .form__body
    &__body {
      @apply grid gap-[10px];
    }
    // .form__actions
    &__actions {
      @apply grid gap-[20px];
    }
    // .form__button
    &__button {
      @apply flex justify-center items-center;
    }
    // .form__caption
    &__caption {
      text-align: center;
    }
  }
</style>
