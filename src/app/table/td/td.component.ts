import { Component, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef, Input, OnInit, OnChanges } from '@angular/core';
@Component({
  selector: 'drag-td',
  templateUrl: './td.component.html',
  styleUrls: ['./td.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TdComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  td: any;
  constructor(private cdRef: ChangeDetectorRef) {

  }
  ngOnInit() {
  }
  ngOnChanges() {
    // debugger
    if (this.td && typeof this.td.$subject) {
      this.td.$subject.unsubscribe(this.ngUpdataView, this);
      this.td.$subject.subscribe(this.ngUpdataView, this);
    }
  }
  ngUpdataView(msg: any) {
    if (msg.ev_type === 'setContainerData') {

    }
    this.cdRef.markForCheck();
  }
  ngOnDestroy() {
    this.cdRef.detach(); // try this
  }
}
