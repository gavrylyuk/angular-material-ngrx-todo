import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-description-window',
  templateUrl: './description-window.component.html',
  styleUrls: ['./description-window.component.css']
})
export class DescriptionWindowComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: object
  ) { }

  ngOnInit() {
  }

}
