import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Developmentmaturity1Component } from './developmentmaturity1.component';

describe('Developmentmaturity1Component', () => {
  let component: Developmentmaturity1Component;
  let fixture: ComponentFixture<Developmentmaturity1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Developmentmaturity1Component]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Developmentmaturity1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
