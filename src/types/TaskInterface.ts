export interface TaskInterface {
  id: number;
  status: StatusTask,
  deadline: string,
  title: string,
  description: string,
}
// eslint-disable-next-line import/prefer-default-export
export enum StatusTask {
  todo = 'Todo',
  inprogess = 'In progress',
  done = 'Done',
}
