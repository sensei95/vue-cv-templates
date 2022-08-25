<template>
  <article class="education-card card">
    <header class="card-header">
      <h4 class="education-degree">DEGREE</h4>
      <h4 class="eduction-etablishment">UNIVERSITY NAME</h4>
      <h4 class="education-speciality">UX DESIGN/WEB DESIGN</h4>
    </header>
    <span class="education-time">2005 - 2008</span>
  </article>
</template>

<script setup></script>

<style lang="scss" scoped>
.card {
  &-header {
    @apply flex flex-col gap-0.5 mb-2 text-sm font-medium text-slate-600;
  }

  .education-degree {
    @apply font-bold text-base text-slate-800;
  }
  .education-time {
    @apply text-[13px] font-medium text-slate-900;
  }
}
</style>
