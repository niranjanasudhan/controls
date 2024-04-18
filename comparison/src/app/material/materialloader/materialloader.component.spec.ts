import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialloaderComponent } from './materialloader.component';

describe('MaterialloaderComponent', () => {
  let component: MaterialloaderComponent;
  let fixture: ComponentFixture<MaterialloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialloaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
