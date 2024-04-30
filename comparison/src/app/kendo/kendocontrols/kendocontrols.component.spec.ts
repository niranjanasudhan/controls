import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendocontrolsComponent } from './kendocontrols.component';

describe('KendocontrolsComponent', () => {
  let component: KendocontrolsComponent;
  let fixture: ComponentFixture<KendocontrolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendocontrolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendocontrolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
