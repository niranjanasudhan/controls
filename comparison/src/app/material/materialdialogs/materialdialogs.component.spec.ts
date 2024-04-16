import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialdialogsComponent } from './materialdialogs.component';

describe('MaterialdialogsComponent', () => {
  let component: MaterialdialogsComponent;
  let fixture: ComponentFixture<MaterialdialogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialdialogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialdialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
