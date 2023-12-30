import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoststatusComponent } from './coststatus.component';

describe('CoststatusComponent', () => {
  let component: CoststatusComponent;
  let fixture: ComponentFixture<CoststatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoststatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoststatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
