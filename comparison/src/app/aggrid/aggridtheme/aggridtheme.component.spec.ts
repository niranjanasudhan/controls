import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridthemeComponent } from './aggridtheme.component';

describe('AggridthemeComponent', () => {
  let component: AggridthemeComponent;
  let fixture: ComponentFixture<AggridthemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggridthemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggridthemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
