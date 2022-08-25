<template>
  <main class="main">
    <nav class="navigation">
      <ul class="navigation-menu">
        <li class="navigation-item">
          <router-link to="/"> Home </router-link>
        </li>
        <li>
          <router-link to="/templates/1"> Template 1 </router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </main>
</template>
<script setup></script>
<style lang="scss">
nav {
  ul {
    @apply flex items-center gap-4 mb-6;
    li {
      @apply bg-slate-200 px-3 py-1.5 rounded-md;
    }
  }
}
</style>
