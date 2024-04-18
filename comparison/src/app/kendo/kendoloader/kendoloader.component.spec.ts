import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoloaderComponent } from './kendoloader.component';

describe('KendoloaderComponent', () => {
  let component: KendoloaderComponent;
  let fixture: ComponentFixture<KendoloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendoloaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendoloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
