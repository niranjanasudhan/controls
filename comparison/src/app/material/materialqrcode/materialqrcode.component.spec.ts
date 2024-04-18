import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialqrcodeComponent } from './materialqrcode.component';

describe('MaterialqrcodeComponent', () => {
  let component: MaterialqrcodeComponent;
  let fixture: ComponentFixture<MaterialqrcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialqrcodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialqrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
