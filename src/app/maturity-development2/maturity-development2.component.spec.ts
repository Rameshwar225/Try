import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaturityDevelopment2Component } from './maturity-development2.component';

describe('MaturityDevelopment2Component', () => {
  let component: MaturityDevelopment2Component;
  let fixture: ComponentFixture<MaturityDevelopment2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaturityDevelopment2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaturityDevelopment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
