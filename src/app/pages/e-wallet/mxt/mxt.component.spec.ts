import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MxtComponent } from './mxt.component';

describe('MxtComponent', () => {
  let component: MxtComponent;
  let fixture: ComponentFixture<MxtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MxtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
