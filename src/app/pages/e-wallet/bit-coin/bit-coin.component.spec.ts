import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitCoinComponent } from './bit-coin.component';

describe('BitCoinComponent', () => {
  let component: BitCoinComponent;
  let fixture: ComponentFixture<BitCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
