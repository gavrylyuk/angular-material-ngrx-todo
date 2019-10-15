import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/service/task.interface';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  title = 'To Do List';
  tasks: ITask[];

  constructor(taskService: TaskService) {
    this.tasks = taskService.getTasks();
  }

  ngOnInit() {
  }

}
