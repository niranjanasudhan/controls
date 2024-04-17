import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialtabComponent } from './materialtab.component';

describe('MaterialtabComponent', () => {
  let component: MaterialtabComponent;
  let fixture: ComponentFixture<MaterialtabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialtabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
