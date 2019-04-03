import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'drag-th',
  templateUrl: './th.component.html',
  styleUrls: ['./th.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThComponent {
  @Input()
  th: any;
}
