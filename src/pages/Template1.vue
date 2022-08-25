<template>
  <div class="py-10 bg-white resume">
    <section
      class="relative bg-inherit py-6 flex flex-col items-center justify-center gap-10 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:border after:border-slate-800 after:h-full after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:w-40 after:z-10"
    >
      <div class="relative z-20 flex items-end gap-12 bg-inherit header">
        <h2 class="text-5xl font-medium tracking-tighter text-slate-900">
          SMITH <br />
          RICHARDSON
        </h2>
        <span class="text-xl tracking-tighter">UX DESIGNER</span>
      </div>
      <div class="relative z-20 bg-inherit">
        <div class="grid grid-cols-2 contact">
          <div class="flex items-center px-3 bg-yellow-300">
            <span class="flex-1 text-center"> CONTACT </span>
            <div class="">
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                  /></svg
              ></span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  />
                  <path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div class="px-4">
            <p><strong>PHONE:</strong> <span>+79637270720</span></p>
            <p>
              <strong>EMAIL:</strong> <span>elk.dev.official@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </section>
    <main>
      <div class="grid grid-cols-5 gap-6 p-8 wrapper">
        <div class="col-span-2">
          <Section>
            <template #section-title> PROFILE </template>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            expedita, molestiae molestias in possimus ut illum consectetur
            voluptas sed adipisci ad necessitatibus sequi rem eum! Eum porro
            nesciunt ipsam officiis.
          </Section>
          <Section>
            <template #section-title> edication </template>
            <TimeLineList>
              <EductionCard />
              <EductionCard />
              <EductionCard />
            </TimeLineList>
          </Section>
          <Section>
            <template #section-title> skills </template>
            <template #section-subtitle> professional </template>
            <div class="px-4">
              <div class="list-item">Web Design</div>
              <div class="list-item">Web Design</div>
              <div class="list-item">Web Design</div>
              <div class="list-item">Web Design</div>
            </div>
          </Section>
          <Section>
            <template #section-title> awards </template>
            <EductionCard />
            <EductionCard />
            <EductionCard />
          </Section>
        </div>
        <div class="col-span-3">
          <Section>
            <template #section-title> experiences </template>
            <TimeLineList>
              <ExperienceCard
                v-for="experience in experiences"
                :key="experience.jobTitle"
                :experience="experience"
              />
            </TimeLineList>
          </Section>
          <Section>
            <template #section-title> references </template>
            <div class="grid grid-cols-2 border-l-2 border-slate-300">
              <div class="px-4 mb-4">
                <header class="mb-2">
                  <h4 class="text-[14px] font-semibold">JESSICA SMITH</h4>
                  <h5 class="text-[12px]">CEO | COMPANY</h5>
                </header>
                <ul class="text-xs">
                  <li><strong>P:</strong><span>+79637270720</span></li>
                  <li>
                    <strong>E:</strong><span>elk.dev.official@gmail.com</span>
                  </li>
                </ul>
              </div>
              <div class="px-4 mb-4">
                <header class="mb-2">
                  <h4 class="text-[14px] font-semibold">JESSICA SMITH</h4>
                  <h5 class="text-[12px]">CEO | COMPANY</h5>
                </header>
                <ul class="text-xs">
                  <li><strong>P:</strong><span>+79637270720</span></li>
                  <li>
                    <strong>E:</strong><span>elk.dev.official@gmail.com</span>
                  </li>
                </ul>
              </div>
              <div class="px-4 mb-4">
                <header class="mb-2">
                  <h4 class="text-[14px] font-semibold">JESSICA SMITH</h4>
                  <h5 class="text-[12px]">CEO | COMPANY</h5>
                </header>
                <ul class="text-xs">
                  <li><strong>P:</strong><span>+79637270720</span></li>
                  <li>
                    <strong>E:</strong><span>elk.dev.official@gmail.com</span>
                  </li>
                </ul>
              </div>
              <div class="px-4 mb-4">
                <header class="mb-2">
                  <h4 class="text-[14px] font-semibold">JESSICA SMITH</h4>
                  <h5 class="text-[12px]">CEO | COMPANY</h5>
                </header>
                <ul class="text-xs">
                  <li><strong>P:</strong><span>+79637270720</span></li>
                  <li>
                    <strong>E:</strong><span>elk.dev.official@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import Section from "../components/Section/Section.vue";
import { experiences } from "../util/index";
import TimeLineList from "../components/TimeLineList.vue";
import ExperienceCard from "../components/Experience/ExperienceCard.vue";
import EductionCard from "../components/Education/EductionCard.vue";
</script>

<style lang="scss" scoped></style>
