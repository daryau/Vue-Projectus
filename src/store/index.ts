import Vue from 'vue';
import Vuex from 'vuex';
import { TaskInterface, StatusTask } from '@/types/TaskInterface';

Vue.use(Vuex);

let nextTaskId = 0;

const taskItems: TaskInterface[] = [
  {
    id: nextTaskId += 1,
    status: StatusTask.todo,
    deadline: '12.09.2020',
    title: 'Copyright',
    description: 'Samanta write and publish an article',
  },
  {
    id: nextTaskId += 1,
    status: StatusTask.inprogess,
    deadline: '2020-06-01',
    title: 'Project manager',
    description: 'Minika Roil commented on Account for teams and personal in bottom style',
  },
  {
    id: nextTaskId += 1,
    status: StatusTask.done,
    deadline: '2019-12-31',
    title: 'Webdesign',
    description: 'Redesign our website',
  },
];
export default new Vuex.Store({
  state: {
    taskItems,
    nextTaskId,
  },

  getters: {
    getTaskItems: state => state.taskItems,
    getNextTaskId: state => state.nextTaskId,
    getTaskById: state => (id:number) => state.taskItems.find(taskItem => taskItem.id === id),
  },

  actions: {
    addTask(context, taskItem: TaskInterface) {
      context.commit('addTask', taskItem);
    },
    removeTask(context, taskItemIndex:number) {
      context.commit('removeTask', taskItemIndex);
    },
    updateStatusTask(context, { idTask, status }) {
      context.commit('updateStatusTask', { idTask, status });
    },
  },

  mutations: {
    addTask(state, taskItem: TaskInterface) {
      state.taskItems.push(taskItem);
      state.nextTaskId += 1;
    },
    removeTask(state, index: number) {
      state.taskItems.splice(index, 1);
    },
    updateStatusTask(state, { idTask, status }) {
      for (let i = 0; i < taskItems.length; i += 1) {
        /* eslint-disable */
        if (idTask == taskItems[i].id) {
          taskItems[i].status = status;
          break;
        }
      }
    },
  },
});
