import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMyWorkComponent } from './app-my-work.component';

describe('AppMyWorkComponent', () => {
  let component: AppMyWorkComponent;
  let fixture: ComponentFixture<AppMyWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppMyWorkComponent]
    });
    fixture = TestBed.createComponent(AppMyWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
