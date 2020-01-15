export interface TaskInterface {
  status: StatusTask,
  title: string,
  description: string,
  deadline: string,
}

export enum StatusTask {
  todo = 'Todo',
  inprogess = 'In progress',
  done = 'Done',
}
