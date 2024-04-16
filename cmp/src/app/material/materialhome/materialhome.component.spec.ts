import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialhomeComponent } from './materialhome.component';

describe('MaterialhomeComponent', () => {
  let component: MaterialhomeComponent;
  let fixture: ComponentFixture<MaterialhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
