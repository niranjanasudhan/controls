import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendowizardComponent } from './kendowizard.component';

describe('KendowizardComponent', () => {
  let component: KendowizardComponent;
  let fixture: ComponentFixture<KendowizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendowizardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendowizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
