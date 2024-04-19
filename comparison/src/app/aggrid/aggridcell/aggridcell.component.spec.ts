import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridcellComponent } from './aggridcell.component';

describe('AggridcellComponent', () => {
  let component: AggridcellComponent;
  let fixture: ComponentFixture<AggridcellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggridcellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggridcellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
