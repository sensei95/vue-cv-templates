<template>
  <section class="list time-line-list">
    <slot />
  </section>
</template>

<script setup></script>

<style lang="scss">
.time-line-list {
  @apply relative list-none  leading-none;
  &::after {
    content: "";
    @apply absolute w-0.5 left-0 top-0 bottom-0 h-full bg-slate-600 z-10;
  }
  > * {
    @apply relative list-none px-4 pb-5 bg-white;

    &::before {
      content: "";
      @apply absolute w-3 -left-[0.27rem] top-0 h-3  border-2 bg-inherit z-20 border-slate-600 rounded-full;
    }
  }
}
</style>
