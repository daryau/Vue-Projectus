<template lang="pug">
.task
  .task-add
    h3.task-title.fw500.f20.mt-3.mb-3 {{titleTask}}
    form.form.task-form(v-on:submit.prevent='')
      .input-group.flex-column.mt-3.mb-3
        input.form-control(type='text' placeholder='Add task' v-model='newTask' required='')
        textarea.form-control.mt-3.mb-3(rows='3' placeholder='Add description'
        v-model='newDescription' required='')
        .input-group-append
          button.btn.btn-outline-secondary.btn-submit(type='submit' v-on:click='addTask') Add
  hr.mb-5
  .task-list.d-flex.flex-wrap.align-items-center.justify-content-between(
      v-for='(taskItem, index) in taskItems' :key='index')
    .task-item
      span.task-title.block.fw600.f16.mb-3 {{taskItem.title}}
      p.task-text.f14 {{taskItem.description}}
    .remove-task.d-flex.align-items-center.justify-content-center.f25(
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
    $gray: #5b5a5a;
    $gray-light: #909090;
    $pink: #f3c5cf;
    $purple: #f088a0;
    $white: #ffffff;
    .task {
        padding: 25px;
        background: url('../assets/images/bg-task.jpg') no-repeat;
        background-size: cover;
        &-add {
            &-title{
                line-height: 16px;
                color: $gray;
            }
            .task-form {
                .input-group {
                    width: 195px !important;
                    .form-control {
                        border: none;
                        border-bottom: 1px solid $pink;
                        background: transparent;
                        border-radius: 0;
                    }
                    .input-group-append {
                        .btn-submit {
                            z-index: 1;
                        }
                    }
                }
            }
        }
        .task-list {
            width: 50%;
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
                .task-text {
                    color: $gray-light;
                    line-height: 20px;
                }
            }
            .remove-task {
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
            .task-list { width: 100%; }
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
