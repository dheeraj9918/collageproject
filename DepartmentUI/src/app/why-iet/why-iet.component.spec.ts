import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyIetComponent } from './why-iet.component';

describe('WhyIetComponent', () => {
  let component: WhyIetComponent;
  let fixture: ComponentFixture<WhyIetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyIetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyIetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
