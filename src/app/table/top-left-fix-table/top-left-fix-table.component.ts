import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-left-fix-table',
  templateUrl: './top-left-fix-table.component.html',
  styleUrls: ['../../../../node_modules/vue3-drag-table/lib/drag-table.css', './top-left-fix-table.component.css']
})
export class TopLeftFixTableComponent implements OnInit {
  @Input() myTable: any;
  constructor() { }

  ngOnInit() {
  }

}
