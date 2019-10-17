import { Injectable } from '@angular/core';
import { TASKS } from '../../assets/tasks-mock';


@Injectable({
  providedIn: 'root'
})

export class TaskService {

  constructor() { }

  getTasks() {
    return TASKS;
  }

  addTask(newTask) {
    return TASKS.push(newTask);
  }

  editTask(task) {
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
