import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendobadgesComponent } from './kendobadges.component';

describe('KendobadgesComponent', () => {
  let component: KendobadgesComponent;
  let fixture: ComponentFixture<KendobadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendobadgesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendobadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
