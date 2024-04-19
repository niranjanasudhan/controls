import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridtoolpanelComponent } from './aggridtoolpanel.component';

describe('AggridtoolpanelComponent', () => {
  let component: AggridtoolpanelComponent;
  let fixture: ComponentFixture<AggridtoolpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggridtoolpanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggridtoolpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
