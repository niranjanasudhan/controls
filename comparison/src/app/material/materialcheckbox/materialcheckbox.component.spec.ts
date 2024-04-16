import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialcheckboxComponent } from './materialcheckbox.component';

describe('MaterialcheckboxComponent', () => {
  let component: MaterialcheckboxComponent;
  let fixture: ComponentFixture<MaterialcheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialcheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialcheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
