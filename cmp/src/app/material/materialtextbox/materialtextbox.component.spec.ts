import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialtextboxComponent } from './materialtextbox.component';

describe('MaterialtextboxComponent', () => {
  let component: MaterialtextboxComponent;
  let fixture: ComponentFixture<MaterialtextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialtextboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialtextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
