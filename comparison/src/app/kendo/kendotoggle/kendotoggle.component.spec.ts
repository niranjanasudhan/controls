import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendotoggleComponent } from './kendotoggle.component';

describe('KendotoggleComponent', () => {
  let component: KendotoggleComponent;
  let fixture: ComponentFixture<KendotoggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendotoggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendotoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
