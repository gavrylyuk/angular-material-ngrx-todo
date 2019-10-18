import { Injectable } from '@angular/core';
import { TASKS } from './tasks-mock';
import { ITask } from '../models/task.interface';


@Injectable({
  providedIn: 'root'
})

export class TaskService {

  constructor() { }

  getTasks() {
    return TASKS;
  }

  addTask(newTask: ITask) {
    return TASKS.push(newTask);
  }

  editTask(task: ITask) {
    TASKS.forEach((element, index) => {
      if (element.id === task.id) {
        TASKS[index] = task;
      }
    });
  }

  deleteTask(taskId: number) {

    TASKS.splice(TASKS.findIndex( i => {
      return i.id === taskId;
    }), 1);

    return TASKS;
  }

}
