<template>
  <div class="cnt-main">
    <TheSidebar></TheSidebar>
    <TheHeader></TheHeader>
  </div>
</template>

<script>
import TheSidebar from './components/TheSidebar.vue';
import TheHeader from './components/TheHeader.vue';

export default {
  name: 'theLayout',
  components: {
    TheSidebar,
    TheHeader,
  },
};
</script>

<style lang="scss"></style>
