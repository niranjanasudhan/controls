import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialtooltipComponent } from './materialtooltip.component';

describe('MaterialtooltipComponent', () => {
  let component: MaterialtooltipComponent;
  let fixture: ComponentFixture<MaterialtooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialtooltipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialtooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
