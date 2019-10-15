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
    console.log(task);
  }

  deleteTask(taskId) {}

}
