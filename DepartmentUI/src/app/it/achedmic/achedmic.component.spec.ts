import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchedmicComponent } from './achedmic.component';

describe('AchedmicComponent', () => {
  let component: AchedmicComponent;
  let fixture: ComponentFixture<AchedmicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchedmicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchedmicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
