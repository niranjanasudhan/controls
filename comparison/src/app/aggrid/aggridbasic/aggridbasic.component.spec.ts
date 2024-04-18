import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridbasicComponent } from './aggridbasic.component';

describe('AggridbasicComponent', () => {
  let component: AggridbasicComponent;
  let fixture: ComponentFixture<AggridbasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggridbasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggridbasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
