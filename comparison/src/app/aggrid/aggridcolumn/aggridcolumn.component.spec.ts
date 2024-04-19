import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridcolumnComponent } from './aggridcolumn.component';

describe('AggridcolumnComponent', () => {
  let component: AggridcolumnComponent;
  let fixture: ComponentFixture<AggridcolumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggridcolumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggridcolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
