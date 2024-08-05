import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBotComponent } from './angular-bot.component';

describe('AngularBotComponent', () => {
  let component: AngularBotComponent;
  let fixture: ComponentFixture<AngularBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularBotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
