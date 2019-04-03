import { Component, OnInit } from '@angular/core';
import { DragTable, BaseTable, SubjectMsgInterface } from 'vue3-drag-table/lib/drag-table.umd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dragTable: DragTable = new DragTable('test');
  table: BaseTable;
  a = 0;
  lastEv = null;
  list = [
    { title: '物料号', id: 'wlh', canSum: false },
    { title: '单价', id: 'dj', canSum: true },
    { title: '地方' },
    { title: '我的名字特别长' }
  ];
  ngOnInit() {
    this.table = this.dragTable.createTable({
      id: 'table',
      // isShowColIndex: false,
      // isShowRowIndex: false,
      // hasLeftFixedTable: false,
      // hasTopFixedTable: false,
      isOverflowX: true,
      isOverflowY: true,
      maxWidth: '1000px',
      maxHeight: '600px',
    });
    // this.table.initTable(1, 1);

    for (let index = 0; index < 20; index++) {
      this.table.theadAdd({
        type: 'left',
        sourceContainerData: {
          id: 'left' + index,
          cell: {
            value: 'left' + index
          }
        },
        targetParentPosition: []
      });
      this.table.theadAdd({
        type: 'top',
        sourceContainerData: {
          id: 'top' + index,
          cell: {
            value: 'top' + index
          }
        },
        targetParentPosition: []
      });
    }
    this.table.render();
    this.table.$subject.subscribe(this.onChange, this);
  }

  dragStart(ev: any, item: any) {
    this.a++;
    const data = {
      operationType: 'add',
      containerData: {
        cell: {
          value: 'test' + this.a,
        },
        id: item.id + this.a
      }
    };
    console.log(data);
    ev.dataTransfer.setData('dragStartData', JSON.stringify(data));
  }
  onChange(msg: SubjectMsgInterface) {
    // console.log(msg);
    if (msg.ev_type !== this.lastEv) {
      if (msg.event) {
        console.log(msg.ev_type + ':' + msg.event.target.tagName);
      }
    }
    console.log(msg);
    this.lastEv = msg.ev_type;
  }
}
