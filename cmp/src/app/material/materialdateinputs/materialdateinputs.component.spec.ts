import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialdateinputsComponent } from './materialdateinputs.component';

describe('MaterialdateinputsComponent', () => {
  let component: MaterialdateinputsComponent;
  let fixture: ComponentFixture<MaterialdateinputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialdateinputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialdateinputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
