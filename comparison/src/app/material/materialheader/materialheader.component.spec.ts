import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialheaderComponent } from './materialheader.component';

describe('MaterialheaderComponent', () => {
  let component: MaterialheaderComponent;
  let fixture: ComponentFixture<MaterialheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
