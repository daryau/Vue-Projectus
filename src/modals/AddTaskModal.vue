<template lang="pug">
  transition(name='modal-fade')
    .modal-backdrop
      .modal(role='dialog' aria-labelledby='modalTitle' aria-describedby='modalDescription')
        header#modalTitle.modal-header
            h3.task-title.fw600.f20.mt-3 {{titleTask}}
            button.btn-close(type='button' @click="$emit('close')" aria-label='Close modal') Х
        section#modalDescription.modal-body
            form.task-form(v-on:submit.prevent='addTask')
                .form-group
                    input.form-input(type='text' placeholder='Add task' v-model='newTask' required)
                    textarea.form-input(rows='3' placeholder='Add description'
                    v-model='newDescription' required)
                    input.form-input(type='date' v-model='deadline' required)
                    .input-group-append
                     .task-add
                        button.btn-submit.fw400(type='submit') Add
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import { TaskInterface, StatusTask } from '@/types/TaskInterface';

@Component
export default class AddTask extends Vue {
  titleTask: string = 'Add task';

  deadline: string = '';

  newTask: string = '';

  newDescription: string = '';

  addTask() {
    const id = this.$store.getters.getNextTaskId + 1;
    // eslint-disable-next-line max-len
    if ((this.newTask.length > 0) && (this.newDescription.length > 0) && (this.deadline.length > 0)) {
      const taskItem: TaskInterface = {
        id,
        status: StatusTask.todo,
        deadline: this.deadline,
        title: this.newTask,
        description: this.newDescription,
      };
      this.newTask = '';
      this.newDescription = '';
      this.$store.dispatch('addTask', taskItem);
      this.$emit('close');
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

  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }
  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;

    .modal {
      width: 300px;
      border-radius: 25px 5px;
      background: #FFFFFF;
      box-shadow: 2px 2px 20px 1px;
      overflow-x: auto;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding: 25px;
        .modal-header {
            font-size: 16px;
            text-align: center;
            font-weight: 600;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .task-title{
                line-height: 16px;
                color: $gray;
                position: relative;
                margin-left: 30px;
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
            .btn-close {
            color: #ffffff;
            width: 28px;
            height: 28px;
            border: 1px dashed #888fdc;
            border-radius: 50px;
            font-size: 16px;
            cursor: pointer;
            background: linear-gradient(138.6789deg, #c781ff 17%, #e57373 83%);
            transition: all .5s ease-in-out;
                &:hover {
                    color: #6c757d;
                    background: #ffffff;
                    border: 1px dashed #6c757d;
                }
            }
        }
        .modal-body {
            .task-form {
                .form-group {
                    text-align: center;
                    margin-top: 15px;
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
    }
}
</style>
