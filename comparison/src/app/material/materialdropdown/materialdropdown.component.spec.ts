import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialdropdownComponent } from './materialdropdown.component';

describe('MaterialdropdownComponent', () => {
  let component: MaterialdropdownComponent;
  let fixture: ComponentFixture<MaterialdropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialdropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialdropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
