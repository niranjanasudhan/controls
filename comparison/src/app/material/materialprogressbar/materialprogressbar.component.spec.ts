import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialprogressbarComponent } from './materialprogressbar.component';

describe('MaterialprogressbarComponent', () => {
  let component: MaterialprogressbarComponent;
  let fixture: ComponentFixture<MaterialprogressbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialprogressbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialprogressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
