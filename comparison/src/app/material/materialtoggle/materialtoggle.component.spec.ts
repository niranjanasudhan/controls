import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialtoggleComponent } from './materialtoggle.component';

describe('MaterialtoggleComponent', () => {
  let component: MaterialtoggleComponent;
  let fixture: ComponentFixture<MaterialtoggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialtoggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialtoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
