import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLeftFixTableComponent } from './top-left-fix-table.component';

describe('TopLeftFixTableComponent', () => {
  let component: TopLeftFixTableComponent;
  let fixture: ComponentFixture<TopLeftFixTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLeftFixTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLeftFixTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
