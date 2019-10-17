import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ITask } from 'src/app/models/task.interface';
import { TaskService } from 'src/app/service/task.service';
import { DescriptionWindowComponent } from './description-window/description-window.component';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  title = 'To Do';
  tasks: ITask[];

  columns: string[] = ['Number', 'Title', 'Description', 'Complete'];


  constructor(
    public descriptionWindow: MatDialog,
    private taskService: TaskService,
  ) {
    this.tasks = taskService.getTasks();
  }

  ngOnInit() {
  }

  handleOpenWindow(id: number, description: string) {
    this.descriptionWindow.open(DescriptionWindowComponent, {
      data: {
        id,
        description
      }
    });
  }

}
