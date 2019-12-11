<template lang="pug">
  TheLayout
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheLayout from './layout/TheLayout.vue';

@Component({
  components: {
    TheLayout,
  },
})
export default class App extends Vue {}
</script>
