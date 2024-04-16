import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialiconComponent } from './materialicon.component';

describe('MaterialiconComponent', () => {
  let component: MaterialiconComponent;
  let fixture: ComponentFixture<MaterialiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialiconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
