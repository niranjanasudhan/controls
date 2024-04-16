import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendotextboxComponent } from './kendotextbox.component';

describe('KendotextboxComponent', () => {
  let component: KendotextboxComponent;
  let fixture: ComponentFixture<KendotextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendotextboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendotextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
