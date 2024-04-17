import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialaccordionComponent } from './materialaccordion.component';

describe('MaterialaccordionComponent', () => {
  let component: MaterialaccordionComponent;
  let fixture: ComponentFixture<MaterialaccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialaccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialaccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
