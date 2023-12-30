import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityOverviewComponent } from './quality-overview.component';

describe('QualityOverviewComponent', () => {
  let component: QualityOverviewComponent;
  let fixture: ComponentFixture<QualityOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualityOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
