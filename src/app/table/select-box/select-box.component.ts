import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
})
export class SelectBoxComponent implements OnInit {
  @Input() myTable;
  @Input() positionType: string;
  constructor() {
    console.log();
  }
  ngOnInit() {
  }

}
