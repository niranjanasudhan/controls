import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoheaderComponent } from './kendoheader.component';

describe('KendoheaderComponent', () => {
  let component: KendoheaderComponent;
  let fixture: ComponentFixture<KendoheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendoheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendoheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
