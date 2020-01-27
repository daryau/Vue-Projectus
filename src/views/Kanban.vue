<template lang="pug">
  .kanban
    h1.kanban-title.f25.fw700 Kanban
    span.kanban-text.block.f18.fw700 Your board
    TaskDetailsModal(
        v-if='isDetailTask'
        @close='isDetailTask = false'
        :tasksEdit="tasksEdit")
    .kanban-list
      .list(v-for='status in statusTask')
        .list-header
          h2.f16.fw600 {{ status }}
          ul.details
            li.one-dot
            li.one-dot
            li.one-dot
          span
        .list-cards
          span.list-card(
          v-for='taskItem in taskItems'
          v-if='taskItem.status === status'
          @click='taskEdit(taskItem.id)') {{ taskItem.title }}
           span.list-deadline {{ taskItem.deadline }}
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import { TaskInterface, StatusTask } from '@/types/TaskInterface';
import TaskDetailsModal from '@/modals/TaskDetailsModal.vue';

@Component({
  components: { TaskDetailsModal },
})
export default class Kanban extends Vue {
    statusTask = StatusTask;

    taskItems = this.$store.getters.getTaskItems;

    isDetailTask:boolean = false;

    taskEdit(id: number) {
      this.isDetailTask = true;
      this.tasksEdit = this.$store.getters.getTaskById(id);
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Satisfy&display=swap');
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
$white: #ffffff;
$white-light: #fbfbfb;
$gray: #ebecf0;
$light-gray: #dedede;
$dark-blue: #172b4d;
$dots: #D8D8D8;

    .kanban {
        width: 730px;
        margin: auto;
        background: url('../assets/images/bg-kanban.jpg') no-repeat;
        background-size: cover;
        border-radius: 10px;
        height: 100vh;
        &-title {
            font-family: 'Satisfy', cursive;
            color: $white-light;
            border-radius: 10px 10px 0 0;
            background: rgba(0,0,0,.32);
            padding: 10px 4px 10px 8px;
            transition: padding .1s ease-in;
            text-align: center;
            text-shadow: 5px 5px 3px $dark-blue;
        }
        &-text {
            font-family: 'Muli', sans-serif;
            background: linear-gradient(180deg,hsla(0,0%,100%,.24) 0,
            hsla(0,0%,100%,.24) 48px,
            hsla(0,0%,100%,0) 80px,hsla(0,0%,100%,0));
            color: $dark-blue;
            padding: 12px;
            opacity: 0.9;
        }
        &-list {
            background: linear-gradient(180deg,hsla(0,0%,100%,.24) 0,
            hsla(0,0%,100%,.24) 48px,
            hsla(0,0%,100%,0) 80px,hsla(0,0%,100%,0));
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            margin: 0 5px;
            box-sizing: border-box;
            padding-bottom: 50px;
            .list {
                -webkit-box-shadow: 2px -1px 17px 0px rgba(122,122,122,0.37);
                -moz-box-shadow: 2px -1px 17px 0px rgba(122,122,122,0.37);
                box-shadow: 2px -1px 17px 0px rgba(122,122,122,0.37);
                width: 30%;
                background: #9b9b9b;
                box-shadow: 0 0 10px 5px $gray;
                border-radius: 5px;
                box-sizing: border-box;
                max-height: 100%;
                white-space: normal;
                margin: 5px 10px;
                &-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    color: $white;
                    text-shadow: 1px 1px 2px $dark-blue;
                    opacity: 0.9;
                    padding: 10px 8px;
                    min-height: 20px;
                    .details {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        width: 16px;
                        height: 16px;
                        cursor: pointer;
                        transition: all .2s linear;
                        padding: 5px;
                        border-radius: 3px;
                        .one-dot {
                            display: block;
                            width: 4px;
                            height: 4px;
                            background: $dots;
                            border-radius: 50%;
                        }
                    }
                    .details:hover {
                        background: rgba(9,30,66,.08);
                        .one-dot {
                            background: $white;
                        }
                    }
                }
                &-cards {
                    padding: 6px 8px 20px ;
                    .list-card {
                        display: flex;
                        justify-content: space-between;
                        padding: 15px 10px;
                        background-color: $white;
                        box-shadow: 0 1px 0 rgba(9,30,66,.25);
                        color: $dark-blue;
                        word-wrap: break-word;
                        border-radius: 3px;
                        margin-bottom: 5px;
                        font-size: 12px;
                        cursor: pointer;
                        transition: all .2s ease-in-out;
                        .list-deadline {
                            display: inline-block;
                            white-space: nowrap;
                            color: #131313;
                            opacity: 0.7;
                            font-size: 10px;
                        }
                        &:hover {
                            box-shadow: 0 0 10px 5px #d8d8d8;
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 1060px) {
        .kanban {
            width: 100%;
        }
    }

    @media screen and (max-width: 992px) {
        .kanban {
            height: 100%;
        }
    }
    @media screen and (max-width: 669px) {
        .kanban{
            &-list {
                .list {
                    width: 70%;
                }
            }
        }
    }
    @media screen and (max-width: 420px) {
        .kanban{
            &-list {
                .list {
                    width: 90%;
                }
            }
        }
    }
</style>
