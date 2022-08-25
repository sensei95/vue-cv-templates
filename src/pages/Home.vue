<template>
  <div>
    <Section>
      <template #section-title> SKILLS </template>
      <template #section-subtitle> PROFESSIONAL </template>
      <TimeLineList>
        <ExperienceCard
          v-for="experience in experiences"
          :key="experience.jobTitle"
          :experience="experience"
        />
      </TimeLineList>
    </Section>
  </div>
</template>

<script setup>
import TimeLineList from "../components/TimeLineList.vue";
import ExperienceCard from "../components/Experience/ExperienceCard.vue";
import Section from "../components/Section/Section.vue";

const description = `I am the Doctor, and you are the Daleks! I hate yogurt. It's just stuff with bits in. They're not aliens, they're Earth…liens! I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself.

No, I'll fix it. I'm good at fixing rot. Call me the Rotmeister. No, I'm the Doctor. Don't call me the Rotmeister.
No, I'll fix it. I'm good at fixing rot. Call me the Rotmeister. No, I'm the Doctor. Don't call me the Rotmeister.
I am the last of my species, and I know how that weighs on the heart so don't lie to me!`;

const experiences = [
  {
    jobTitle: "Frontend web developer",
    companyName: "facebook",
    started_at: "12/2022",
    finished_at: "05/2024",
    is_current: false,
    description: description,
  },
  {
    jobTitle: "Fullstack web developer",
    companyName: "google",
    started_at: "12/2024",
    finished_at: "",
    is_current: true,
    description: description,
  },
];
</script>

<style lang="scss" scoped></style>
