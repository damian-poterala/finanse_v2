import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfitComponent } from './edit-profit.component';

describe('EditProfitComponent', () => {
  let component: EditProfitComponent;
  let fixture: ComponentFixture<EditProfitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
