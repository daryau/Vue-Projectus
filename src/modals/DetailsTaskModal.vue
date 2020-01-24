<template lang="pug">
  transition(name='modal-fade')
    .modal-backdrop
      .modal(role='dialog' aria-labelledby='modalTitle' aria-describedby='modalDescription')
        header#modalTitle.modal-header
          h2 Task details:
          button.btn-close(type='button' @click="$emit('close')" aria-label='Close modal')
            | x
        section#modalDescription.modal-body
            div.details {{ title }} {{ detailsTask.title }}
            div.details  {{ deadline }}
              span.fw600 {{ detailsTask.deadline }}
            div.details {{ status }}  {{ detailsTask.status }}
            div.details {{ description }} {{ detailsTask.description }}
        footer.modal-footer
          button.btn.btn-modal Edit
          button.btn.btn-cancel(type='btn-details' @click="$emit('close')" aria-label='Close modal')
           |Cancel
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator';
import { TaskInterface, StatusTask } from '@/types/TaskInterface';

@Component
export default class DetailsTaskModal extends Vue {
  status: string = 'Status: ';

  deadline: string = 'Deadline: ';

  title: string = 'Title: ';

  description: string = 'Description: ';

  @Prop(Object) readonly detailsTask: TaskInterface;
}
</script>

 <style lang="scss" scoped>
  .details {
    font-size: 12px;
    padding: 5px 0;
    line-height: 1.5;
  }
  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }
  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
  .modal-backdrop {
    font-family: 'Muli', sans-serif;
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
      background: url('../assets/images/bg-kanban.jpg') no-repeat;
      background-size: auto;
      width: 300px;
      border-radius: 25px 5px;
      box-shadow: 2px 2px 20px 1px;
      overflow-x: auto;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      position: relative;
        &::before {
          position: absolute;
          content: '';
          background: url('../assets/images/ic-task.png') no-repeat;
          right: 0;
          width: 90px;
          height: 50px;
          bottom: 69px;
          background-size: contain;
        }

      .modal-header{
        font-size: 16px;
        text-align: center;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 15px 10px;
        border-bottom: 1px solid #f7f6f3;
        .btn-close {
          color: #ffffff;
          width: 28px;
          height: 28px;
          border: 1px dashed #888fdc;
          border-radius: 50px;
          font-size: 16px;
          cursor: pointer;
          background: linear-gradient(90deg, #9ea7fc 17%, #6eb4f7 83%);
          transition: all .5s ease-in-out;
          &:hover {
            color: #6c757d;
            background: #ffffff;
            border: 1px dashed #6c757d;
          }
        }
      }
      .modal-body {
        font-size: 13px;
        padding: 20px 15px;
      }
      .modal-footer {
        margin: 15px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        .btn {
          text-align: center;
          vertical-align: middle;
          cursor: pointer;
          background-color: transparent;
          border: 1px solid transparent;
          padding: 10px;
          border-radius: 5px;
          color: #6c757d;
          border-color: #6c757d;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          -webkit-transition: all .2s ease-in-out;
          transition: all .2s ease-in-out;
          margin: 15px 0
        }
        .btn-modal {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          border-top-left-radius: 5px;
          margin-right: 5px;
          background: linear-gradient(90deg, #9ea7fc 17%, #6eb4f7 83%);
          color: #ffffff;
          border: 1px dashed transparent;
          transition: all .5s ease-in-out;
          &:hover {
            background: linear-gradient(90deg, #6eb4f7 17%, #9ea7fc 83%)
          }
        }
        .btn-cancel {
          display: flex;
          justify-content: flex-end;
          &:hover {
            color: #888fdc;
            border: 1px solid #888fdc;
          }
        }
      }
    }
  }
</style>
