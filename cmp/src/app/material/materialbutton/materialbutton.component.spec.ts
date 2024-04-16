import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialbuttonComponent } from './materialbutton.component';

describe('MaterialbuttonComponent', () => {
  let component: MaterialbuttonComponent;
  let fixture: ComponentFixture<MaterialbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
