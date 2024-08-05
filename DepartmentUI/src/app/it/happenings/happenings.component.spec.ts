import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappeningsComponent } from './happenings.component';

describe('HappeningsComponent', () => {
  let component: HappeningsComponent;
  let fixture: ComponentFixture<HappeningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HappeningsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HappeningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
