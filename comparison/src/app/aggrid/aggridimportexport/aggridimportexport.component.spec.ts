import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridimportexportComponent } from './aggridimportexport.component';

describe('AggridimportexportComponent', () => {
  let component: AggridimportexportComponent;
  let fixture: ComponentFixture<AggridimportexportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggridimportexportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggridimportexportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
