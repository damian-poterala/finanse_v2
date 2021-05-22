import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingProfitComponent } from './adding-profit.component';

describe('AddingProfitComponent', () => {
  let component: AddingProfitComponent;
  let fixture: ComponentFixture<AddingProfitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingProfitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingProfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
