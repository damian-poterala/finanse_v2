import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingSalaryComponent } from './adding-salary.component';

describe('AddingSalaryComponent', () => {
  let component: AddingSalaryComponent;
  let fixture: ComponentFixture<AddingSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingSalaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
