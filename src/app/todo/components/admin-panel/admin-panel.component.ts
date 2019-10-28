import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/todo/models/task.interface';
import { TaskService } from 'src/app/todo/services/task.service';
import { MatDialog } from '@angular/material/dialog';
import { EditWindowComponent } from './edit-window/edit-window.component';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  pageTitle = 'To Do List';
  tasks: ITask[];

  constructor(
    public editWindow: MatDialog,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  handleClickEdit(task: ITask) {
    const modalWindow = this.editWindow.open(EditWindowComponent, {
      width: '50%',
      height: '35%',
      data: {
        id: task.id,
        title: task.title,
        description: task.description,
        complete: task.complete
      }
    });
    modalWindow.afterClosed().subscribe(result => {
      if (result) {
        this.taskService.editTask(result);
      }
    });
  }

  handleClickDelete(taskId: number) {
    this.taskService.deleteTask(taskId);
  }

  handleClickAdd() {
    const nextId = this.tasks.reduce((prev, current) => (prev.id > current.id) ? prev : current).id + 1;

    const modalWindow = this.editWindow.open(EditWindowComponent, {
      width: '50%',
      height: '35%',
      data: {
        id: nextId,
        title: '',
        description: '',
        complete: false
      }
    });
    modalWindow.afterClosed().subscribe(result => {
      if (result) {
        this.taskService.addTask(result);
      }
    });
  }

}
