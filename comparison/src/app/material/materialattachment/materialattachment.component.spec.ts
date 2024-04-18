import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialattachmentComponent } from './materialattachment.component';

describe('MaterialattachmentComponent', () => {
  let component: MaterialattachmentComponent;
  let fixture: ComponentFixture<MaterialattachmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialattachmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialattachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
