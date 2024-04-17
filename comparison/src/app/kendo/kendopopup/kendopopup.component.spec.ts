import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendopopupComponent } from './kendopopup.component';

describe('KendopopupComponent', () => {
  let component: KendopopupComponent;
  let fixture: ComponentFixture<KendopopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendopopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendopopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
