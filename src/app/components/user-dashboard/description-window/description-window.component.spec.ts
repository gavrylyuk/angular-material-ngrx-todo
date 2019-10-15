import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionWindowComponent } from './description-window.component';

describe('DescriptionWindowComponent', () => {
  let component: DescriptionWindowComponent;
  let fixture: ComponentFixture<DescriptionWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
