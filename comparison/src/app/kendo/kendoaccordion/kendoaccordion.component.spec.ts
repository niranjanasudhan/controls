import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoaccordionComponent } from './kendoaccordion.component';

describe('KendoaccordionComponent', () => {
  let component: KendoaccordionComponent;
  let fixture: ComponentFixture<KendoaccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendoaccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendoaccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
