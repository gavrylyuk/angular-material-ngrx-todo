import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ITask } from 'src/app/todo/models/task.interface';
import { TaskService } from 'src/app/todo/services/task.service';
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
  ) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  handleOpenWindow(id: number, description: string) {
    this.descriptionWindow.open(DescriptionWindowComponent, {
      width: '50%',
      height: '35%',
      data: {
        id,
        description
      }
    });
  }

}
