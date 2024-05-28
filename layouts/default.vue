<script setup lang="ts">
  defineSlots<{
    form: () => any;
    image: () => any;
    captionTitle: () => any;
    captionDescription: () => any;
  }>();
</script>

<template>
  <div class="app">
    <div class="app__left">
      <div class="app__left-content">
        <slot name="form" />
      </div>
    </div>
    <div class="app__right app-right">
      <div class="app-right__body">
        <div class="app-right__big-content">
          <div class="app-right__big-circle"></div>
          <div class="app-right__small-circle"></div>
          <div class="app-right__center-image">
            <slot name="image" />
          </div>
        </div>
        <div class="app-right__caption">
          <!-- <slot name="caption" /> -->
          <div class="app-right__caption-title">
            <slot name="captionTitle" />
          </div>
          <div class="app-right__caption-description">
            <slot name="captionDescription" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .app {
    @apply flex min-h-dvh min-w-[100dvw];

    & > * {
      @apply flex-1 basis-[50%];
    }
    // .app__left
    &__left {
      @apply bg-[--left-bg] relative;
    }
    // .app__left-content
    &__left-content {
      @apply absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%];
    }
    // .app__right
    &__right {
      @media (max-width: 1400px) {
        @apply hidden;
      }
    }
  }
  .app-right {
    @apply bg-[--purple-light] relative;
    // .app-right__body
    &__body {
      @apply absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%];
    }
    // .app-right__big-content
    &__big-content {
      @apply w-[606px] h-[606px] relative rounded-full;

      & > * {
        @apply absolute;
      }
    }
    // .app-right__big-circle
    &__big-circle {
      @apply overflow-hidden rounded-full top-0 left-0 w-full h-full;

      background: linear-gradient(
          to right bottom,
          var(--purple-dark-81),
          transparent
        ),
        radial-gradient(at center, var(--purple-dark-81), var(--purple-dark-29)),
        radial-gradient(at center, var(--purple-dark-81), var(--purple-dark-29));
      background-blend-mode: overlay;
      opacity: 0.2;

      // background: radial-gradient(at center, white, black);
    }
    // .app-right__small-circle
    &__small-circle {
      @apply top-[50%] left-[50%] w-[528px] h-[528px] rounded-full overflow-hidden translate-x-[-50%] translate-y-[-50%];

      background: linear-gradient(
          168deg,
          var(--purple-very-light),
          var(--purple-dark-81)
        ),
        radial-gradient(at center, var(--purple-dark-81), var(--purple-dark-29));
      background-blend-mode: overlay;
      opacity: 0.2;
    }
    // .app-right__center-image
    &__center-image {
      @apply top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] grid gap-[10px] w-full;
    }
    // .app-right__caption
    &__caption {
      @apply absolute left-[50%] translate-x-[-50%] text-center w-full;

      top: calc(100% + 50px);
    }
    // .app-right__caption-title
    &__caption-title {
      @apply font-bold text-[20px] leading-[24px] text-[--purple-white];
    }
    // .app-right__caption-description
    &__caption-description {
      @apply font-medium text-[16px] leading-[24px] text-[--purple-white-75];
    }
  }
</style>
