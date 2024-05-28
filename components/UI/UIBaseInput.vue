<script setup lang="ts">
  const value = defineModel<string>();

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
    <input v-model="value" class="input__el" />
    <div v-if="$slots.postfixIcon" class="input__postfix-icon">
      <slot name="postfixIcon" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
