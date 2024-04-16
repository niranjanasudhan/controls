import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialwizardComponent } from './materialwizard.component';

describe('MaterialwizardComponent', () => {
  let component: MaterialwizardComponent;
  let fixture: ComponentFixture<MaterialwizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialwizardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialwizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
