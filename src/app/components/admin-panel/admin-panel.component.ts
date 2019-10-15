import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/service/task.interface';
import { TaskService } from 'src/app/service/task.service';
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
  ) {
    this.tasks = taskService.getTasks();
  }

  ngOnInit() {
  }

  handleOpenWindow(task: ITask) {
    const modalWindow = this.editWindow.open(EditWindowComponent, {
      data: {
        id: task.id,
        title: task.title,
        description: task.description,
        complete: task.complete
      }
    });
    modalWindow.afterClosed().subscribe(result => {

      this.taskService.editTask(result);
    });
  }

}
