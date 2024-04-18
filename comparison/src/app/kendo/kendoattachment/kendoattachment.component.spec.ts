import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoattachmentComponent } from './kendoattachment.component';

describe('KendoattachmentComponent', () => {
  let component: KendoattachmentComponent;
  let fixture: ComponentFixture<KendoattachmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendoattachmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendoattachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
