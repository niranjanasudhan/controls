import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridmasterdetailComponent } from './aggridmasterdetail.component';

describe('AggridmasterdetailComponent', () => {
  let component: AggridmasterdetailComponent;
  let fixture: ComponentFixture<AggridmasterdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggridmasterdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggridmasterdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
