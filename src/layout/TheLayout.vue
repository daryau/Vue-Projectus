<template lang="pug">
  .cnt-main
    TheSidebar
    TheHeader
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheSidebar from '../components/TheSidebar.vue';
import TheHeader from '../components/TheHeader.vue';

@Component({
  components: {
    TheSidebar,
    TheHeader,
  },
})
export default class TheLayout extends Vue {}
</script>
<style lang="scss"></style>
