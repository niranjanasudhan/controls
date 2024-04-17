import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendotabComponent } from './kendotab.component';

describe('KendotabComponent', () => {
  let component: KendotabComponent;
  let fixture: ComponentFixture<KendotabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendotabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendotabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
