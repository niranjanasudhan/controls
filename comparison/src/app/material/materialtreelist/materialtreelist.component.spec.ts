import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialtreelistComponent } from './materialtreelist.component';

describe('MaterialtreelistComponent', () => {
  let component: MaterialtreelistComponent;
  let fixture: ComponentFixture<MaterialtreelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialtreelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialtreelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
