import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendodateinputsComponent } from './kendodateinputs.component';

describe('KendodateinputsComponent', () => {
  let component: KendodateinputsComponent;
  let fixture: ComponentFixture<KendodateinputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendodateinputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendodateinputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
