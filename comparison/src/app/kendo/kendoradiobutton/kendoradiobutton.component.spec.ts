import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoradiobuttonComponent } from './kendoradiobutton.component';

describe('KendoradiobuttonComponent', () => {
  let component: KendoradiobuttonComponent;
  let fixture: ComponentFixture<KendoradiobuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendoradiobuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendoradiobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
