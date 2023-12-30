import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeStatusComponent } from './timestatus.component';

describe('timestatusComponent', () => {
  let component: TimeStatusComponent;
  let fixture: ComponentFixture<TimeStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimeStatusComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TimeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
