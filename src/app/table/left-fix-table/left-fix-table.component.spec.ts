import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftFixTableComponent } from './left-fix-table.component';

describe('LeftFixTableComponent', () => {
  let component: LeftFixTableComponent;
  let fixture: ComponentFixture<LeftFixTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftFixTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftFixTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
