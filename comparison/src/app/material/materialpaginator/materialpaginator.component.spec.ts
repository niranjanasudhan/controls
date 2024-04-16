import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialpaginatorComponent } from './materialpaginator.component';

describe('MaterialpaginatorComponent', () => {
  let component: MaterialpaginatorComponent;
  let fixture: ComponentFixture<MaterialpaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialpaginatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialpaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
