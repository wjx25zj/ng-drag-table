import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFixTableComponent } from './top-fix-table.component';

describe('TopFixTableComponent', () => {
  let component: TopFixTableComponent;
  let fixture: ComponentFixture<TopFixTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopFixTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFixTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
