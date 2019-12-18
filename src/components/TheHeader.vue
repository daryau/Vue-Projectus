<template lang="pug">
        .content
            span#trigger.trigger
                i
                i
                i
            header.header
                .header-logo
                    h1.header-logo__title {{titleTasks}}
                    .header__dots#id1
                        ul.header__dots_cnt
                            li.dot
                            li.dot
                            li.dot
                .header-share
                    .header-share-cnt
                        .header-share-cnt__people
                        .header-share-cnt__people
                        .header-share-cnt__people
                    .header-share-btns
                        .header-share-btns__btn.f14 Share
                        .header-share-btns__btn.chat.f14 Сhat
            TheContent
</template>

<script lang = "ts" >
import { Component, Vue } from 'vue-property-decorator';
import TheContent from './TheContent.vue';

@Component({
  components: {
    TheContent,
  },
})
export default class TheHeader extends Vue {
    titleTasks: string = 'Website Redesign';
}
</script>
