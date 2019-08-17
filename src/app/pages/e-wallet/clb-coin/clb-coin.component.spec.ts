import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClbCoinComponent } from './clb-coin.component';

describe('ClbCoinComponent', () => {
  let component: ClbCoinComponent;
  let fixture: ComponentFixture<ClbCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClbCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClbCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
