import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-fix-table',
  templateUrl: './top-fix-table.component.html',
  styleUrls: ['../../../../node_modules/vue3-drag-table/lib/drag-table.css', './top-fix-table.component.css']
})
export class TopFixTableComponent implements OnInit {
  @Input() myTable: any;
  constructor() { }

  ngOnInit() {
  }

}
