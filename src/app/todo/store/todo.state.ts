import { ITask } from '../models/task.interface';

export default class TodoState {
  Tasks: Array<ITask>;
}

export const initializeState = () => {
  return { Tasks: Array<ITask>() };
};
