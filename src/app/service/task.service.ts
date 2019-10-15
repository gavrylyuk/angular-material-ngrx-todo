import { Injectable } from '@angular/core';
import { TASKS } from './tasks-mock';


@Injectable({
  providedIn: 'root'
})

export class TaskService {

  constructor() { }

  getTasks() {
    return TASKS;
  }

  addTask(
    id: number,
    title: string,
    description: string,
    comolete: boolean
  ) {
    return TASKS.push({
      id,
      title,
      description,
      complete: false
    });
  }

  editTask(task) {
    TASKS.forEach((element, index) => {
      if(element.id === task.id) {
        TASKS[index] = task;
      }
    });
  }

  deleteTask(taskId) {}

}
