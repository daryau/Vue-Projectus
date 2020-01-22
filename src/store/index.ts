import Vue from 'vue';
import Vuex from 'vuex';
import { TaskInterface, StatusTask } from '@/types/TaskInterface';

Vue.use(Vuex);

const taskItems: TaskInterface[] = [
  {
    status: StatusTask.todo,
    deadline: '12.09.2020',
    title: 'Copyright',
    description: 'Samanta write and publish an article',
  },
  {
    status: StatusTask.inprogess,
    deadline: '2020-06-01',
    title: 'Project manager',
    description: 'Minika Roil commented on Account for teams and personal in bottom style',
  },
  {
    status: StatusTask.done,
    deadline: '2019-12-31',
    title: 'Webdesign',
    description: 'Redesign our website',
  },
];
export default new Vuex.Store({
  state: {
    taskItems,
  },

  getters: {
    getTaskItems: state => state.taskItems,
  },

  actions: {
    addTask(context, taskItem: TaskInterface) {
      context.commit('addTask', taskItem);
    },
    removeTask(context, taskItemIndex:number) {
      context.commit('removeTask', taskItemIndex);
    },
  },

  mutations: {
    addTask(state, taskItem: TaskInterface) {
      state.taskItems.push(taskItem);
    },
    removeTask(state, index: number) {
      state.taskItems.splice(index, 1);
    },
  },
});
