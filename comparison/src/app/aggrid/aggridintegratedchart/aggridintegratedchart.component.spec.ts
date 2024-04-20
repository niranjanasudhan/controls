import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridintegratedchartComponent } from './aggridintegratedchart.component';

describe('AggridintegratedchartComponent', () => {
  let component: AggridintegratedchartComponent;
  let fixture: ComponentFixture<AggridintegratedchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggridintegratedchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggridintegratedchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
