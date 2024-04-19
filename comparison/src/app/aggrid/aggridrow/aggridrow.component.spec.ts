import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridrowComponent } from './aggridrow.component';

describe('AggridrowComponent', () => {
  let component: AggridrowComponent;
  let fixture: ComponentFixture<AggridrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggridrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggridrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
