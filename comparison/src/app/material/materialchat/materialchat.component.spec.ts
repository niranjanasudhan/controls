import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialchatComponent } from './materialchat.component';

describe('MaterialchatComponent', () => {
  let component: MaterialchatComponent;
  let fixture: ComponentFixture<MaterialchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialchatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
