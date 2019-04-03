import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-fix-table',
  templateUrl: './left-fix-table.component.html',
  styleUrls: ['../../../../node_modules/vue3-drag-table/lib/drag-table.css']
})
export class LeftFixTableComponent implements OnInit {
  @Input() myTable: any;
  lastTime = 0;
  constructor() { }

  ngOnInit() {
  }
  // trackByIndex(index, item) {
  //   return item.id;
  // }
  // ngAfterContentChecked() {
  //   const nowTime = new Date().getMilliseconds();
  //   console.log(nowTime - this.lastTime);
  //   this.lastTime = nowTime;
  // }
}
