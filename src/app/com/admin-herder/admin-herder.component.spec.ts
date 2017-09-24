import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHerderComponent } from './admin-herder.component';

describe('AdminHerderComponent', () => {
  let component: AdminHerderComponent;
  let fixture: ComponentFixture<AdminHerderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHerderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHerderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
