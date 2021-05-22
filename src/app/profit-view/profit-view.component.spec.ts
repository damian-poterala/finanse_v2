import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitViewComponent } from './profit-view.component';

describe('ProfitViewComponent', () => {
  let component: ProfitViewComponent;
  let fixture: ComponentFixture<ProfitViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfitViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
