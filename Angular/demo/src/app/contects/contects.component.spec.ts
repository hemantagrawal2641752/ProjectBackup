import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContectsComponent } from './contects.component';

describe('ContectsComponent', () => {
  let component: ContectsComponent;
  let fixture: ComponentFixture<ContectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
