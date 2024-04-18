import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridcolumnfilterComponent } from './aggridcolumnfilter.component';

describe('AggridcolumnfilterComponent', () => {
  let component: AggridcolumnfilterComponent;
  let fixture: ComponentFixture<AggridcolumnfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggridcolumnfilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggridcolumnfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
