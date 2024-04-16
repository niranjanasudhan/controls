import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendodialogsComponent } from './kendodialogs.component';

describe('KendodialogsComponent', () => {
  let component: KendodialogsComponent;
  let fixture: ComponentFixture<KendodialogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendodialogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendodialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
