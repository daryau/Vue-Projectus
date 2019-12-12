<template lang="pug">
  .wrapper-post
    span.wrapper-post__day.block.f14.uppercase {{activityDate}}
    .wrapper-post__item
      .wrapper-post__item_icon
      span.wrapper-post__item__text.f16.block {{activityItem.description}}
      span.wrapper-post__item__time.f14  {{activityItem.time}}PM
    .wrapper-post__item
      .wrapper-post__item_icon
      span.wrapper-post__item__text.f16.block {{activityItemTwo.description}}
      span.wrapper-post__item__time.f14 {{activityItemTwo.time}} PM
    .wrapper-post__item
      span.wrapper-post__item__text.f15.block {{activityItemTwo.comment}}
    .wrapper-post__item
      .wrapper-post__item_icon
      span.wrapper-post__item__text.f16.block
        | {{activityItemThird.description}}
      span.wrapper-post__item__time.f14 {{activityItemThird.time}} PM
    .wrapper-post__item
      .wrapper-post__item__photos
        img.wrapper-post__item__photos_img(v-on:click='clickPhoto(index)' alt='Photo'
        v-for='(photo, index) in activityItemThird.images'
        :key='index'
        :src='photo.image')
</template>


<script lang = "ts">
import { Component, Vue } from 'vue-property-decorator';

interface ActivityInterface {
  description: string;
  time: string;
  comment?: string;
  images?: any[],
}

@Component
export default class Activity extends Vue {
  // initial data
  activityDate: string = 'Today';

  activityItem: ActivityInterface = {
    description: 'Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users',
    time: '8:40',
  }

  activityItemTwo: ActivityInterface = {
    description: 'Emilee Simchenko commented on Account for teams and personal in bottom style',
    time: '7:32',
    comment: 'During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes',
  }

  activityItemThird: ActivityInterface = {
    description: 'Darika Samak uploaded 4 files on An option to search in current projects or in all projects',
    time: '6:02',
    images: [
      './images/post-bg.jpg',
      './assets/images/post-bg-2.jpg',
      './assets/images/post-bg-3.jpg',
      './assets/images/post-bg-4.jpeg',
    ],
  }

  // methods
  clickPhoto(index: number) {
    this.$root.$emit('notifications', index);
  }
}
</script>
