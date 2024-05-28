<script setup lang="ts">
  import type { IInputSetup } from "~/type/UI";

  const value = defineModel<string>();
  const props = defineProps<{ setup: IInputSetup }>();
  const { setup } = toRefs(props);

  defineSlots<{
    prefixIcon: () => any;
    postfixIcon: () => any;
  }>();
</script>

<template>
  <div class="input">
    <div v-if="$slots.prefixIcon" class="input__prefix-icon">
      <slot name="prefixIcon" />
    </div>
    <input
      v-model="value"
      class="input__el"
      :type="setup.type || 'text'"
      :placeholder="setup.placeholder"
      :autocomplete="setup.autocomplete"
    />
    <div v-if="$slots.postfixIcon" class="input__postfix-icon">
      <slot name="postfixIcon" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .input {
    @apply pl-[10px] pr-[20px] py-[17px] flex border-[1px] border-[--call-to-action-50] bg-[--call-to-action-10] rounded-[10px] gap-[10px] min-w-0;

    & .input__prefix-icon,
    .input__postfix-icon {
      @apply flex-grow-0 flex-shrink-0 basis-[30px];
    }

    // .input__prefix-icon
    &__prefix-icon {
      @apply text-[0px];
    }
    // .input__el
    &__el {
      @apply flex-1 basis-auto bg-inherit outline-none text-[18px] leading-[30px] text-[--input-inner-color] min-w-0;

      &::placeholder {
        @apply text-[--input-inner-color];
      }

      &:focus {
        &::placeholder {
          @apply text-transparent;
        }
      }
    }
    // .input__postfix-icon
    &__postfix-icon {
      @apply text-[0px];
    }
  }
</style>
