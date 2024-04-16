import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoprogressbarComponent } from './kendoprogressbar.component';

describe('KendoprogressbarComponent', () => {
  let component: KendoprogressbarComponent;
  let fixture: ComponentFixture<KendoprogressbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendoprogressbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendoprogressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
