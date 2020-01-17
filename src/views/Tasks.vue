<template lang="pug">
.task
  .titleTask
  .task-add
    h3.task-title.fw600.f20.mt-3 {{titleTask}}
    form.task-form(v-on:submit.prevent='')
      .form-group
        input.form-input(type='text' placeholder='Add task' v-model='newTask' required)
        textarea.form-input(rows='3' placeholder='Add description'
        v-model='newDescription' required)
        input.form-input(type='date' v-model='deadline' required)
        .input-group-append
          button.btn-submit.fw400(type='submit' v-on:click='addTask') Add
  transition-group(name='blink')
    .task-list(
        v-for='(taskItem, index) in taskItems' :key='index' ref='todo-list')
        .task-item
            .task-header
                span.task-status.block.fw700 {{taskItem.status}}
                span.task-time.block.fw700 {{taskItem.deadline}}
            span.task-title.block.fw600 {{taskItem.title}}
            p.task-text {{taskItem.description}}
        .remove-task(
            v-on:click='removeTask(index)') &times;
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import { TaskInterface, StatusTask } from '@/types/TaskInterface';
import TheSidebar from '@/components/TheSidebar.vue';

@Component
export default class Tasks extends Vue {
  titleTask: string = 'New task';

  deadline: string = '';

  newTask: string = '';

  newDescription: string = '';

  taskItems = this.$store.getters.getTaskItems;

  addTask(): void {
    // eslint-disable-next-line max-len
    if ((this.newTask.length > 0) && (this.newDescription.length > 0) && (this.deadline.length > 0)) {
      const taskItem: TaskInterface = {
        status: StatusTask.todo,
        deadline: this.deadline,
        title: this.newTask,
        description: this.newDescription,
      };
      this.newTask = '';
      this.newDescription = '';
      this.$store.dispatch('addTask', taskItem);
    }
  }

  removeTask(index: number): void {
    this.$store.dispatch('removeTask', index);
  }

  // eslint-disable-next-line class-methods-use-this
  mounted() {
    const blinkedTask = this.$refs['todo-list'] as Array<any>;
    for (let i = 0; i < blinkedTask.length; i += 1) {
      setTimeout(() => {
        blinkedTask[i].classList.add('scale-text-list');
      }, 500 * i);
    }
  }

  beforeUpdate() {
    const blinkedTask = this.$refs['todo-list'] as Array<any>;
    for (let j = 0; j <= blinkedTask.length; j += 1) {
      blinkedTask[j].classList.remove('scale-text-row');
    }
  }
}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Sulphur+Point:400,500,600,700&display=swap');
    $gray: #5b5a5a;
    $gray-light: #909090;
    $pink: #f3c5cf;
    $pink-light: #f6c3be;
    $purple: #f088a0;
    $white: #ffffff;
    $dark-gray: #212529;
    $lg-gray: #6c757d;
    $br-lg-gray: #6c757d;
    $purple-dark: #bd11dd;
    .fw700 {font-weight: 700;}

    // animation
    .scale-text-list {animation: scale-text-list-animation 1s;}
    .blink-enter-active {
        animation: blinking-animation .3s ease-out;
        animation-iteration-count: 2;
    }

    @keyframes blinking-animation {
        50% {
            opacity: 0;
            background-color: rgba(255, 255, 255, 0.2);
        }
        100% {background-color: rgba(209, 184, 184, 0.2);}
    }
    @keyframes scale-text-list-animation {50% {font-size: 16px;}}
    h3 {
        font-family: 'Sulphur Point', sans-serif;
        color: $gray;
        margin-left: 15px;
        position: relative;
        margin: 15px;

        &::before {
            content: '';
            position: absolute;
            background-color: $pink-light;
            width: 15px;
            height: 15px;
            border-radius: 50px;
            left: -25px;
            top: 3px;
        }

        &::after {
            content: '';
            position: absolute;
            background-color: $white;
            width: 5px;
            height: 5px;
            border-radius: 50px;
            top: 8px;
            left: -20px;
        }
    }
    hr { margin-bottom: 25px; }

    .task {
        width: 730px;
        margin: auto;
        padding: 25px;
        background: url('../assets/images/bg-task.jpg') no-repeat;
        background-size: cover;
        border-radius: 10px;
        &-add {
            &-title{
                line-height: 16px;
                color: $gray;
            }
            .task-form {
                border-bottom: 1px solid #eaeaea;
                .form-group {
                    width: 195px !important;
                    .form-input {
                        font-family: 'Open Sans', Helvetica, sans-serif;
                        border: none;
                        border-bottom: 1px solid $pink;
                        background: transparent;
                        border-radius: 0;
                        margin: 5px 0;
                        padding: 5px;
                        height: 25px;
                    }
                    .input-group-append {
                        .btn-submit {
                            display: inline-block;
                            color: $dark-gray;
                            text-align: center;
                            vertical-align: middle;
                            cursor: pointer;
                            background-color: transparent;
                            border: 1px solid transparent;
                            padding: .375rem .75rem;
                            line-height: 1.5;
                            border-radius: .25rem;
                            color: $lg-gray;
                            border-color: $lg-gray;
                            border-top-left-radius: 0;
                            border-bottom-left-radius: 0;
                            transition: all .5s ease-in-out;
                            margin: 15px 0;
                                &:hover {
                                    color: $white;
                                    background-color: $br-lg-gray;
                                    border-color: $br-lg-gray;
                                }
                        }
                    }
                }
            }
        }
        .task-list {
            width: 50%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            margin: 20px auto;
            background-color: $white;
            padding: 25px;
            border-radius: 25px 5px 25px;
            -webkit-box-shadow: 2px 2px 15px -8px rgba(0,0,0,0.8);
            -moz-box-shadow: 2px 2px 15px -8px rgba(0,0,0,0.8);
            box-shadow: 2px 2px 15px -8px rgba(0,0,0,0.8);
            transition: all 0.5s ease-in-out;
            .task-item {
                width: 80%;
                .task-header {
                    font-family: 'Sulphur Point', sans-serif;
                    color: $purple;
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 5px;
                    .task-status {
                        position: relative;
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        padding-left: 6px;
                        &::before {
                            content: '';
                            position: absolute;
                            display: block;
                            background-color: $purple;
                            width: 3px;
                            height: 3px;
                            border-radius: 50px;
                            left: 0;
                        }
                    }
                }
                .task-title {
                    margin-bottom: 15px;
                }
                .task-text {
                    color: $gray-light;
                    line-height: 20px;
                }
            }
            .remove-task {
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                background-color: $purple;
                width: 35px;
                height: 35px;
                border-radius: 8px;
                color: $white;
                transition: all 0.1s ease-in-out;
                    &:hover {
                        opacity: 0.5;
                    }
            }
        }
        .task-list:nth-child(2n+1) {
            margin-right: 0;
        }
        .task-list:nth-child(2n) {
            margin-left: 0;
        }
    }

    // media
    @media screen and (max-width: 1145px) {
        .task {
            width: 90%;
        }
    }
    @media screen and (max-width: 625px) {
        .f14 {
            font-size: 12px;
        }
        .task {
            padding: 15px;
            .task-list { width: 80%; }
        }
    }

    @media screen and (max-width: 370px) {
        .task {
            .task-list {
                .task-item {
                    width: 65%;
                }
            }
        }
    }
</style>
