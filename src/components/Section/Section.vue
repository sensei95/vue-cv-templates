<template>
  <section class="section">
    <div class="wrapper">
      <header class="section-header">
        <h3 class="section-title">
          <slot name="section-title"></slot>
        </h3>

        <h5 class="section-subtitle">
          <slot name="section-subtitle"></slot>
        </h5>
      </header>
      <div class="section-body">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.section {
  @apply mb-5;
  &-header {
    @apply leading-none flex flex-col gap-4;
  }
  &-title {
    @apply font-bold text-2xl uppercase;
  }
  &-subtitle {
    @apply font-semibold text-lg mb-3 uppercase;
  }
}
</style>
