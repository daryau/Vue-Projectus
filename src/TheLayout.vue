<template lang="pug">
  .cnt-main
    TheSidebar
    TheHeader
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
