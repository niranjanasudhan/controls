import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialpopupComponent } from './materialpopup.component';

describe('MaterialpopupComponent', () => {
  let component: MaterialpopupComponent;
  let fixture: ComponentFixture<MaterialpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialpopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
