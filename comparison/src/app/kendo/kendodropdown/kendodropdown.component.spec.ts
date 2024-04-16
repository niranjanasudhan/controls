import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendodropdownComponent } from './kendodropdown.component';

describe('KendodropdownComponent', () => {
  let component: KendodropdownComponent;
  let fixture: ComponentFixture<KendodropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendodropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendodropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
