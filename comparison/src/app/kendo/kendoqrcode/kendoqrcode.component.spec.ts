import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoqrcodeComponent } from './kendoqrcode.component';

describe('KendoqrcodeComponent', () => {
  let component: KendoqrcodeComponent;
  let fixture: ComponentFixture<KendoqrcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendoqrcodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendoqrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
