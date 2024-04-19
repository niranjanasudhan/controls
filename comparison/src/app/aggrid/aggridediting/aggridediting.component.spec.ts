import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggrideditingComponent } from './aggridediting.component';

describe('AggrideditingComponent', () => {
  let component: AggrideditingComponent;
  let fixture: ComponentFixture<AggrideditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggrideditingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggrideditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
