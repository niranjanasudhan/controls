import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendotreelistComponent } from './kendotreelist.component';

describe('KendotreelistComponent', () => {
  let component: KendotreelistComponent;
  let fixture: ComponentFixture<KendotreelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendotreelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendotreelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
