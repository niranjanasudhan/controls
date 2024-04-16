import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendotooltipComponent } from './kendotooltip.component';

describe('KendotooltipComponent', () => {
  let component: KendotooltipComponent;
  let fixture: ComponentFixture<KendotooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendotooltipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendotooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
