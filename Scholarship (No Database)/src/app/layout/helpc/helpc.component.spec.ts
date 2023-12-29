import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpcComponent } from './helpc.component';

describe('HelpcComponent', () => {
  let component: HelpcComponent;
  let fixture: ComponentFixture<HelpcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpcComponent]
    });
    fixture = TestBed.createComponent(HelpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
