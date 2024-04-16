import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendobuttonComponent } from './kendobutton.component';

describe('KendobuttonComponent', () => {
  let component: KendobuttonComponent;
  let fixture: ComponentFixture<KendobuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendobuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
