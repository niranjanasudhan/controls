import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialradiobuttonComponent } from './materialradiobutton.component';

describe('MaterialradiobuttonComponent', () => {
  let component: MaterialradiobuttonComponent;
  let fixture: ComponentFixture<MaterialradiobuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialradiobuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialradiobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
