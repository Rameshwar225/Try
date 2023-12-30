import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskoverviewComponent } from './riskoverview.component';

describe('RiskOverviewComponent', () => {
  let component: RiskoverviewComponent;
  let fixture: ComponentFixture<RiskoverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RiskoverviewComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RiskoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

