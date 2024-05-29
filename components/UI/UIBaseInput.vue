<script setup lang="ts">
  import type { IInputSetup } from "~/type/UI";

  const value = defineModel<string>();
  const props = defineProps<{
    setup: IInputSetup;
    tabindex?: number;
    autofocus?: boolean;
  }>();
  const { setup, autofocus } = toRefs(props);

  defineSlots<{
    prefixIcon: () => any;
    postfixIcon: () => any;
  }>();

  const inputEl = ref<HTMLInputElement | null>(null);

  const isFocus = ref<boolean>(false);

  onMounted(() => {
    if (autofocus.value) {
      inputEl.value?.focus();
    }
  });
</script>

<template>
  <div
    class="input"
    :class="{ 'input_is-focus': isFocus }"
    @focusin="isFocus = true"
    @focusout="isFocus = false"
  >
    <div v-if="$slots.prefixIcon" class="input__prefix-icon">
      <slot name="prefixIcon" />
    </div>
    <input
      ref="inputEl"
      v-model="value"
      class="input__el"
      :type="setup.type || 'text'"
      :placeholder="setup.placeholder"
      :autocomplete="setup.autocomplete"
      :tabindex="tabindex"
    />
    <div v-if="$slots.postfixIcon" class="input__postfix-icon">
      <slot name="postfixIcon" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .input {
    @apply pl-[10px] pr-[20px] flex border-[1px] border-[--call-to-action-50] bg-transparent
      rounded-[10px] gap-[10px] min-w-0 outline-none items-center relative;

    &:before {
      content: "";
      @apply absolute top-0 left-0 w-full h-full bg-[--call-to-action-10] z-[0];
    }

    &_is-focus {
      @apply border-[--purple-dark];
    }

    & .input__prefix-icon,
    .input__postfix-icon {
      @apply flex-grow-0 flex-shrink-0 basis-[30px];
    }

    // .input__prefix-icon
    &__prefix-icon {
      @apply text-[0px] relative z-[1];
    }
    // .input__el
    &__el {
      @apply flex-1 basis-auto bg-transparent outline-none text-[18px] leading-[30px] text-[--input-inner-color]
       min-w-0 overflow-hidden text-ellipsis whitespace-nowrap py-[17px] relative z-[1];

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
      @apply text-[0px] relative z-[1];
    }
  }
</style>
