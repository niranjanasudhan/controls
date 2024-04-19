import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridselectionComponent } from './aggridselection.component';

describe('AggridselectionComponent', () => {
  let component: AggridselectionComponent;
  let fixture: ComponentFixture<AggridselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggridselectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggridselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
