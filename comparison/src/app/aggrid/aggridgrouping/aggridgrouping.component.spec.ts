import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridgroupingComponent } from './aggridgrouping.component';

describe('AggridgroupingComponent', () => {
  let component: AggridgroupingComponent;
  let fixture: ComponentFixture<AggridgroupingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggridgroupingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggridgroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
