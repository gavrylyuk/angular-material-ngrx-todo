import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/todo/services/auth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  handleClickUserButton() {
    this.authService.login();
  }

  handleClickAdminButton() {
    this.authService.loginAdmin();
  }
}
