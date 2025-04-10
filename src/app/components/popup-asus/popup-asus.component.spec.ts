import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAsusComponent } from './popup-asus.component';

describe('PopupAsusComponent', () => {
  let component: PopupAsusComponent;
  let fixture: ComponentFixture<PopupAsusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupAsusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupAsusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
