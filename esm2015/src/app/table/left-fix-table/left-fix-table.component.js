/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class LeftFixTableComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
LeftFixTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-left-fix-table',
                template: "<div class=\"fix-left-table\" [scrollTop]=\"myTable.style.scrollTop\" [ngStyle]=\"myTable.style.leftTable\"\n  (keydown)=\"myTable.onKeyDown($event)\" (keyup)=\"myTable.onKeyUp($event)\">\n\n  <table *ngIf=\"myTable && myTable.$rowNumber[0] && myTable.$colNumber[0]\" class=\"my-table left-table\">\n    <thead>\n      <!-- TopIndexThead -->\n      <tr *ngIf=\"myTable.isShowColIndex\">\n        <!-- IndexTopLeft  -->\n        <th class=\"rowNumber\" tabindex=\"1\"\n          [ngStyle]=\"{padding:(myTable.$rowNumber[0]||myTable.$colNumber[0]||{}).style.padding,background:(myTable.$rowNumber[0]||myTable.$colNumber[0]||{}).style.background}\">\n          <div\n            [ngStyle]=\"{width:myTable.$rowNumber[0].style.width,height:myTable.$colNumber[0].style.height,lineHeight:myTable.$colNumber[0].style.height}\">\n            {{myTable.isTopLeftShow? myTable.topLeftValue:''}}\n          </div>\n        </th>\n        <th *ngFor=\"let th of myTable.theadLeftEntity.leafIndexList2; let i = index\" class=\"colNumber\"\n          [ngStyle]=\"myTable.$colNumber[i].style\">\n          <div [ngStyle]=\"myTable.$colNumber[i].cell.style\">\n            {{myTable.$colNumber[i].cell.content}}\n          </div>\n        </th>\n      </tr>\n\n      <!-- \u7B2C\u4E8C\u884C\u5F00\u59CB -->\n      <tr *ngFor=\"let th of myTable.$rowNumber; let i = index\">\n        <!-- rowIndexThead -->\n        <th *ngIf=\"myTable.isShowRowIndex\" class=\"rowNumber\" [ngStyle]=\"th.style\" tabindex=\"1\"\n          (mousedown)=\"th.onMouseDown($event)\" (mouseout)=\"th.onMouseOut($event)\" (mousemove)=\"th.onMouseMove($event)\"\n          (click)=\"th.onClick($event)\" (dragover)=\"th.dragOver($event)\" (drop)=\"th.drop($event)\"\n          (dragenter)=\"th.dragEnter($event)\" (dragleave)=\"th.dragLeave($event)\">\n          <div [ngStyle]=\"th.cell.style\" [attr.title]=th.cell.content>{{th.cell.content}}</div>\n        </th>\n        <!-- \u5185\u90E8TopLeft \u5224\u65AD-->\n        <th *ngIf=\"i===0 && myTable.$tableHeadLeft[0]&&myTable.$tableHeadTop[0]\" class=\"colNumber\" tabindex=\"1\"\n          (click)=\"myTable.onClick($event)\" [attr.colspan]=\"myTable.theadLeftEntity.side2\"\n          [attr.rowspan]=\"myTable.$tableHeadTop.length\" [ngStyle]=\"myTable.tableHeadTopLeft.style\">\n          <div [ngStyle]=\"myTable.tableHeadTopLeft.cell.style\">\n          </div>\n        </th>\n\n        <!-- \u4E3B\u8868\u91CC\u5DE6\u4FA7\u8868\u5934 -->\n        <th tabindex=\"1\" *ngFor=\"let th of myTable.$tableHeadLeft[i - myTable.theadTopEntity.side2]; let j = index\"\n          [ngStyle]=\"th.style\" (click)=\"th.onClick($event)\" (blur)=\"th.onBlur($event)\" [attr.draggable]=\"th.draggable\"\n          (dragstart)=\"th.dragStart($event)\" (dragover)=\"th.dragOver($event)\" (drop)=\"th.drop($event)\"\n          (dragleave)=\"th.dragLeave($event)\" (dragenter)=\"th.dragEnter($event)\" (dragend)=\"th.dragEnd($event)\"\n          (mousedown)=\"th.onMouseDown($event)\" (mousemove)=\"th.onMouseMove($event)\" (mouseout)=\"th.onMouseOut($event)\"\n          [attr.colspan]=\"th.span2\" [attr.rowspan]=\"th.span1\">\n          <svg *ngIf=\"th.treeContainer.show\" [ngStyle]=\"th.treeContainer.style\" viewBox=\"0 0 1024 1024\"\n            (click)=\"th.treeContainer.onClick($event)\">\n            <path *ngFor=\"let d of th.treeContainer.svg[th.treeContainer.$openStatus].paths\" [attr.d]=\"d\"></path>\n          </svg>\n          <ng-container *ngFor=\"let sc of th.selfContainers\">\n            <svg [ngStyle]=\"sc.style\" viewBox=\"0 0 1024 1024\" *ngIf=\"sc.show\" (click)=\"sc.onClick($event)\">\n              <path *ngFor=\"let d of sc.svg[sc.type].paths\" [attr.d]=\"d\"></path>\n            </svg>\n          </ng-container>\n          <div *ngIf=\"th.cell.displayClass[th.cell.status].displayType == 'text'\" [ngStyle]=\"th.cell.style\"\n            (dblclick)=\"th.cell.onDbClick()\" [attr.title]=\"th.cell.title\">\n\n            {{th.cell.content}}\n          </div>\n\n          <input *ngIf=\"th.cell.displayClass[th.cell.status].displayType == 'input'\"\n            (mouseover)=\"th.cell.onMouseOver($event)\" (blur)=\"th.cell.inputOnBlur($event,true)\"\n            [(ngModel)]=\"th.cell.value\" [ngStyle]=\"th.cell.style\" style=\"background-color:#fff;\" />\n\n          <button (click)=\"th.cell.onClick($event)\" *ngIf=\"th.cell.displayClass[th.cell.status].displayType == 'button'\"\n            [ngStyle]=\"th.cell.style\">{{th.cell.content}}</button>\n\n          <select tabindex=\"1\" *ngIf=\"th.cell.displayClass[th.cell.status].displayType == 'select'\"\n            [(ngModel)]=\"th.cell.value\" [ngStyle]=\"th.cell.style\" (change)=\"th.cell.onChange($event)\"\n            (blur)=\"th.cell.onBlur($event)\">\n            <option *ngFor=\"let option of th.cell.select.optionList\" [attr.value]=\"option.text\"\n              [attr.key]=\"option.value\">{{option.text}}</option>\n          </select>\n\n        </th>\n      </tr>\n    </thead>\n  </table>\n  <app-select-box [myTable]=\"myTable\" positionType=\"left\" *ngIf=\"myTable\"></app-select-box>\n</div>",
                styles: [".main-table{z-index:95}.fix-top-table{overflow:hidden;position:absolute;z-index:100}.index-table{z-index:101!important}.fix-left-table{z-index:100}.fix-top-left-table{position:absolute;z-index:102}.my-table{border:0 solid;border-left:1px solid #dedede;border-spacing:0;float:left!important;table-layout:fixed;width:auto!important}.my-table td,.my-table th{border:1px solid #dedede;border-width:0 1px 1px 0}.my-table tr:first-child td,.my-table tr:first-child th{border-top:1px solid #dedede}.clearfix:after,.clearfix:before{content:\" \";display:table}.clearfix:after{clear:both}"]
            }] }
];
/** @nocollapse */
LeftFixTableComponent.ctorParameters = () => [];
LeftFixTableComponent.propDecorators = {
    myTable: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LeftFixTableComponent.prototype.myTable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVmdC1maXgtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZHJhZy10YWJsZS8iLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGUvbGVmdC1maXgtdGFibGUvbGVmdC1maXgtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU96RCxNQUFNO0lBRUosaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLGdnS0FBOEM7O2FBRS9DOzs7OztzQkFFRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1sZWZ0LWZpeC10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9sZWZ0LWZpeC10YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlMy1kcmFnLXRhYmxlL2xpYi9kcmFnLXRhYmxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExlZnRGaXhUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIG15VGFibGU6IGFueTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=