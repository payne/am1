import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route2Component } from './route2.component';

describe('Route2Component', () => {
  let component: Route2Component;
  let fixture: ComponentFixture<Route2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Route2Component]
    });
    fixture = TestBed.createComponent(Route2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
