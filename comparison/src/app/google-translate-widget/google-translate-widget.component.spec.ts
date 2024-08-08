import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleTranslateWidgetComponent } from './google-translate-widget.component';

describe('GoogleTranslateWidgetComponent', () => {
  let component: GoogleTranslateWidgetComponent;
  let fixture: ComponentFixture<GoogleTranslateWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleTranslateWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleTranslateWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
