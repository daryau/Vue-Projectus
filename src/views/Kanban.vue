<template lang="pug">
  .kanban
    h1.kanban-title.f25.fw700 Kanban
    TaskDetailsModal(
        v-if='isDetailTask'
        @close='isDetailTask = false'
        :tasksEdit="tasksEdit")
    .kanban-list
      .list
        .list-header
          h2.f16.fw600 {{ statusTask.todo }}
        draggable.list-cards(
            ghost-class='ghost-card'
            :animation='200'
            group='task'
            :list='todoList'
        )
          span.list-card.todo(
          v-for='taskItem in todoList'
          @click='taskEdit(taskItem.id)') {{ taskItem.title }}
           span.list-deadline {{ taskItem.deadline }}

      .list
        .list-header
          h2.f16.fw600 {{ statusTask.inprogess }}
        draggable.list-cards(
            ghost-class='ghost-card'
            :animation='200'
            group='task'
            :list='inProgressList'
        )
          span.list-card.inProgess(
          v-for='taskItem in inProgressList'
          @click='taskEdit(taskItem.id)') {{ taskItem.title }}
           span.list-deadline {{ taskItem.deadline }}

      .list
        .list-header
          h2.f16.fw600 {{ statusTask.done }}
        draggable.list-cards(
            ghost-class='ghost-card'
            :animation='200'
            group='task'
            :list='doneList'
        )
          span.list-card.done(
          v-for='taskItem in doneList'
          @click='taskEdit(taskItem.id)') {{ taskItem.title }}
           span.list-deadline {{ taskItem.deadline }}
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import draggable from 'vuedraggable';
import { TaskInterface, StatusTask } from '@/types/TaskInterface';
import TaskDetailsModal from '@/modals/TaskDetailsModal.vue';

@Component({
  components: { TaskDetailsModal, draggable },
})
export default class Kanban extends Vue {
  statusTask = StatusTask;

  taskItems = this.$store.getters.getTaskItems;

  isDetailTask: boolean = false;

  tasksEdit: TaskInterface = {} as TaskInterface;

  taskEdit(id: number) {
    this.isDetailTask = true;
    this.tasksEdit = this.$store.getters.getTaskById(id);
  }

  todoList = this.$store.getters.getTaskItems.filter((obj:TaskInterface) => obj.status
    === StatusTask.todo);

  inProgressList = this.$store.getters.getTaskItems.filter((obj:TaskInterface) => obj.status
    === StatusTask.inprogess);

  doneList = this.$store.getters.getTaskItems.filter((obj:TaskInterface) => obj.status
    === StatusTask.done);
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
$yellow: #ffdd40;
$green: #00B961;
$orange: #FB7D44;
    .ghost-card {
        opacity: 0.5;
        background: #F7FAFC;
    }
    .kanban {
        width: 730px;
        margin: auto;
        background: url('../assets/images/bg-kanban.jpg') no-repeat;
        background-size: cover;
        border-radius: 10px;
        height: 100vh;
        &-title {
            margin-bottom: 50px;
            font-family: 'Satisfy', cursive;
            color: $white-light;
            border-radius: 10px 10px 0 0;
            background: rgba(0,0,0,.32);
            padding: 10px 4px 10px 8px;
            transition: padding .1s ease-in;
            text-align: center;
            text-shadow: 5px 5px 3px $dark-blue;
            background:  rgb(158, 167, 252);
            background: linear-gradient(to top, rgba(255,0,0,0) 6%, rgb(158, 167, 252) 100%);
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
                box-sizing: border-box;
                max-height: 100%;
                white-space: normal;
                margin: 5px 10px;
                box-shadow: 2px 2px 15px -8px rgba(0, 0, 0, 0.8);
                border-radius: 25px 5px;
                min-height: 200px;

                &:nth-child(1){
                background-image: linear-gradient(#f6f8fc, #f6f8fc),
                radial-gradient(circle at top left, #ff9985, #ffb74e);
                border-top: double 4px transparent;
                background-clip: content-box, border-box;
                }
                &:nth-child(2) {
                background-image: linear-gradient(#f6f8fc, #f6f8fc),
                radial-gradient(circle at top left, #c781ff, #e57373);
                border-top: double 4px transparent;
                background-clip: content-box, border-box
                }
                &:nth-child(3) {
                 background-image: linear-gradient(#f6f8fc, #f6f8fc),
                    radial-gradient(circle at top left, #81d5ee, #7ed492);
                border-top: double 4px transparent;
                background-clip: content-box, border-box
                }
                &-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    color: $dark-blue;
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
                        .one-dot { background: $white; }
                    }
                }
                &-cards {
                    padding: 6px 8px 6px ;
                    .list-card {
                        border-radius: 25px 5px;
                        display: flex;
                        justify-content: space-between;
                        padding: 15px 10px;
                        background-color: $white;
                        box-shadow: 0 1px 0 rgba(9,30,66,.25);
                        color: $white;
                        word-wrap: break-word;
                        margin-bottom: 5px;
                        font-size: 12px;
                        cursor: pointer;
                        transition: all .2s ease-in-out;
                        .list-deadline {
                            display: inline-block;
                            white-space: nowrap;
                            color: #131313;
                            opacity: 0.7;
                            font-size: 8px;
                        }
                        &:hover { box-shadow: 0 0 10px 5px #d8d8d8; }
                        &.todo {  background: linear-gradient(90deg, #9ea7fc 17%, #6eb4f7 83%);
                        }
                        &.inProgess { border-radius: 5px 25px;
                            background:  linear-gradient(
                            138.6789deg, #81d5ee 17%, #7ed492 83%);
                        }
                        &.done { background: linear-gradient(
                            138.6789deg, #c781ff 17%, #e57373 83%);}
                             &:nth-child(even) {
                                margin-left: 15px;
                            }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 1060px) {
        .kanban { width: 100%; }
    }
    @media screen and (max-width: 992px) {
        .kanban { height: 100%; }
    }
    @media screen and (max-width: 669px) {
        .kanban{
            &-list {
                .list {
                    width: 70%;
                    margin-bottom: 15px;
                }
            }
        }
    }
    @media screen and (max-width: 420px) {
        .kanban{
            &-list {
                .list { width: 90%; }
            }
        }
    }
</style>
