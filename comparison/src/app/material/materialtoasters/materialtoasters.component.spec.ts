import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialtoastersComponent } from './materialtoasters.component';

describe('MaterialtoastersComponent', () => {
  let component: MaterialtoastersComponent;
  let fixture: ComponentFixture<MaterialtoastersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialtoastersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialtoastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
