import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendotoastersComponent } from './kendotoasters.component';

describe('KendotoastersComponent', () => {
  let component: KendotoastersComponent;
  let fixture: ComponentFixture<KendotoastersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendotoastersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendotoastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
