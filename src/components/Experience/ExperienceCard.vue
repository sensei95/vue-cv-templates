<template>
  <article class="experience-card card">
    <header class="card-header">
      <h4 class="experience-job-title card-title">
        {{ experience.jobTitle }}
      </h4>
      <h5 class="experience-meta card-meta">
        <span class="experience-company">{{ experience.companyName }}</span>
        |
        <span class="experience-time"
          >FROM {{ experience.started_at }} TO
          {{
            experience.finished_at ? experience.finished_at : "PRESENT"
          }}</span
        >
      </h5>
    </header>
    <div class="card-body">
      <p>{{ experience.description }}</p>
    </div>
  </article>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";

const props = defineProps({
  experience: Object,
});

let experience = ref({});

onMounted(() => {
  experience.value = props.experience;
  console.log(experience.value.jobTitle);
});
</script>

<style lang="scss" scoped>
.card {
  @apply flex flex-col gap-3;
  &-header {
    @apply uppercase leading-6;
  }
  &-title {
    @apply font-bold text-base;
  }
  &-meta {
    @apply font-normal text-sm;
  }
  &-body {
    @apply text-[13px] leading-5 font-normal tracking-tighter;
  }
}
</style>
