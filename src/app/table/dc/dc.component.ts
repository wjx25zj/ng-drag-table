import { Component, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef, Input, OnInit, OnChanges } from '@angular/core';
@Component({
  selector: 'drag-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DcComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  dc: any;
  constructor(private cdRef: ChangeDetectorRef) {

  }
  ngOnInit() {
  }
  ngOnChanges() {
    // debugger
    if (this.dc && typeof this.dc.$subject) {
      this.dc.$subject.unsubscribe(this.ngUpdataView, this);
      this.dc.$subject.subscribe(this.ngUpdataView, this);
    }
  }
  ngUpdataView(msg: any) {
    this.cdRef.markForCheck();
  }
  ngOnDestroy() {
    this.cdRef.detach(); // try this
  }
}
