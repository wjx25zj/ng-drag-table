import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'ng-drag-table',
  templateUrl: './table.component.html',
  styleUrls: ['../../../node_modules/vue3-drag-table/lib/drag-table.css', './table.component.css']
})
export class TableComponent implements OnInit {
  @Input() myTable: any;
  constructor() { }

  ngOnInit() {
  }


}
