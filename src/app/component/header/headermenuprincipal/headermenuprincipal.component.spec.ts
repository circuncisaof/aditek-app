import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadermenuprincipalComponent } from './headermenuprincipal.component';

describe('HeadermenuprincipalComponent', () => {
  let component: HeadermenuprincipalComponent;
  let fixture: ComponentFixture<HeadermenuprincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadermenuprincipalComponent]
    });
    fixture = TestBed.createComponent(HeadermenuprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
