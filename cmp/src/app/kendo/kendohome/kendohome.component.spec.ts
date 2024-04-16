import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendohomeComponent } from './kendohome.component';

describe('KendohomeComponent', () => {
  let component: KendohomeComponent;
  let fixture: ComponentFixture<KendohomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendohomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
