import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendomenuComponent } from './kendomenu.component';

describe('KendomenuComponent', () => {
  let component: KendomenuComponent;
  let fixture: ComponentFixture<KendomenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendomenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendomenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
