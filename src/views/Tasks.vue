<template lang="pug">
    .wrapper-post
        span.wrapper-post__day.block.f14.uppercase {{taskDate}}
        .wrapper-post__item
            .wrapper-post__item_icon
            span.wrapper-post__item__text.f16.block {{taskItem.description}}
            span.wrapper-post__item__time.f14 {{taskItem.time}} AM
        .wrapper-post__item
            .wrapper-post__item_icon
            span.wrapper-post__item__text.f16.block {{taskItemTwo.description}}
            span.wrapper-post__item__time.f14 {{taskItemTwo.time}}PM
        .wrapper-post__item
            span.wrapper-post__item__text.f15.block {{taskItemTwo.comment}}
        .wrapper-post__item
            .wrapper-post__item_icon
            span.wrapper-post__item__text.f16.block {{taskItemThird.description}}
            span.wrapper-post__item__time.f14 {{taskItemThird.time}} PM
        .wrapper-post__item
            .wrapper-post__item__photos
              img.wrapper-post__item__photos_img(src='../assets/images/post-bg.jpg' alt='Image')
              img.wrapper-post__item__photos_img(src='../assets/images/post-bg-2.jpg' alt='Image')
              img.wrapper-post__item__photos_img(src='../assets/images/post-bg-3.jpg' alt='Image')
              img.wrapper-post__item__photos_img(src='../assets/images/post-bg-4.jpeg' alt='Image')
</template>


<script>
export default {
  name: 'Tasks',
  data() {
    return {
      taskDate: 'Tomorrow',
      taskItem:
            {
              icon: 'wrapper-post__item_icon',
              description: 'Samanta Kwin write and publish an article about our team',
              time: '5:40',
            },

      taskItemTwo: {
        description: 'Minika Roil commented on Account for teams and personal in bottom style',
        time: '9:32',
        comment: 'Redesign our website, evaluate and say the timeline',
      },
      taskItemThird: {
        description: 'Samanta Kwin uploaded 4 files on An option to search in current projects or in all projects',
        time: '2:22',
      },
    };
  },
};
</script>
