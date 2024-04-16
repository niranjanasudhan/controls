import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendocheckboxComponent } from './kendocheckbox.component';

describe('KendocheckboxComponent', () => {
  let component: KendocheckboxComponent;
  let fixture: ComponentFixture<KendocheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendocheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendocheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
