import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendochatComponent } from './kendochat.component';

describe('KendochatComponent', () => {
  let component: KendochatComponent;
  let fixture: ComponentFixture<KendochatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendochatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendochatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
