import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridstylingComponent } from './gridstyling.component';

describe('GridstylingComponent', () => {
  let component: GridstylingComponent;
  let fixture: ComponentFixture<GridstylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridstylingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridstylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
