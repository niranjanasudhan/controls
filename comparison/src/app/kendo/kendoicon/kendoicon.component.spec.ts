import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoiconComponent } from './kendoicon.component';

describe('KendoiconComponent', () => {
  let component: KendoiconComponent;
  let fixture: ComponentFixture<KendoiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendoiconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendoiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
