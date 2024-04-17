import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialmenuComponent } from './materialmenu.component';

describe('MaterialmenuComponent', () => {
  let component: MaterialmenuComponent;
  let fixture: ComponentFixture<MaterialmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
