<template lang="pug">
.task
  .task-add
    h3.task-title.fw600.f20.mt-3 {{titleTask}}
    form.task-form(v-on:submit.prevent='')
      .form-group
        input.form-input(type='text' placeholder='Add task' v-model='newTask' required='')
        textarea.form-input(rows='3' placeholder='Add description'
        v-model='newDescription' required='')
        .input-group-append
          button.btn-submit.fw400(type='submit' v-on:click='addTask') Add
  hr
  transition-group(name='blink')
    .task-list(v-for='(taskItem, index) in taskItems' :key='index')
        .task-item
        span.task-title.block.fw600.f16 {{taskItem.title}}
        p.task-text.f14 {{taskItem.description}}
        .remove-task.f25(
            v-on:click='removeTask(index)') &times;
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import { TaskInterface } from '@/types/TaskInterface';
import TheSidebar from '@/components/TheSidebar.vue';

@Component
export default class Tasks extends Vue {
  titleTask: string = 'New task';

  newTask: string = '';

  newDescription: string = '';


  taskItems: TaskInterface[] = [
    {
      title: 'Copyright',
      description: 'Samanta Kwin write and publish an article about our team',
    },
    {
      title: 'Project manager',
      description: 'Minika Roil commented on Account for teams and personal in bottom style',
    },
    {
      title: 'Webdesign',
      description: 'Redesign our website',
    },
  ]

  addTask(): void {
    if ((this.newTask.length > 0) && (this.newDescription.length > 0)) {
      this.taskItems.push({
        title: this.newTask,
        description: this.newDescription,
      });
      this.newTask = '';
      this.newDescription = '';
    }
  }

  removeTask(index: number): void {
    this.taskItems.splice(index, 1);
  }
}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Sulphur+Point:400,500,600&display=swap');

    $gray: #5b5a5a;
    $gray-light: #909090;
    $pink: #f3c5cf;
    $pink-light: #f6c3be;
    $purple: #f088a0;
    $white: #ffffff;
    $dark-gray: #212529;
    $lg-gray: #6c757d;
    $br-lg-gray: #6c757d;
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

    .blink-enter-active, .blink-leave-active{
        animation: blink .3s ease-out;
        animation-iteration-count: 3;
    }
    @keyframes blink {
        50% {
            opacity: .5;
            background-color: rgba(255, 255, 255, 0.2);
        }
    }
    .task {
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
                .form-group {
                    width: 195px !important;
                    .form-input {
                        font-family: 'Open Sans', Helvetica, sans-serif;
                        border: none;
                        border-bottom: 1px solid $pink;
                        background: transparent;
                        border-radius: 0;
                        margin: 15px 0;
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
                            margin-bottom: 25px;
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
                transition: all 0.5s ease-in-out;
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
