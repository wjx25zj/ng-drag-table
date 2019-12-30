/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class TopLeftFixTableComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TopLeftFixTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-top-left-fix-table',
                template: "<div class=\"fix-top-left-table\">\n  <table *ngIf=\"myTable && myTable.$rowNumber[0] && myTable.$colNumber[0]\" class=\"my-table left-top-table\"\n    cellspacing=\"0\" cellpadding=\"0\" border=\"0\">\n    <thead>\n      <!-- TopIndexThead -->\n      <tr *ngIf=\"myTable.isShowColIndex && myTable.isShowRowIndex\">\n        <th tabindex=\"1\" class=\"rowNumber\"\n          [ngStyle]=\"{padding:myTable.$rowNumber[0].style.padding,background:myTable.$rowNumber[0].style.background}\">\n          <div\n            [ngStyle]=\"{width:myTable.$rowNumber[0].style.width, height:myTable.$colNumber[0].style.height,lineHeight:myTable.$colNumber[0].style.height}\">\n            {{myTable.isTopLeftShow? myTable.topLeftValue:''}}\n          </div>\n        </th>\n        <th *ngFor=\"let th of myTable.theadLeftEntity.$leafIndexList2; let i = index\" tabindex=\"1\" class=\"colNumber\"\n          [ngStyle]=\"myTable.$colNumber[i].style\" (mousedown)=\"myTable.$colNumber[i].onMouseDown($event)\"\n          (mouseout)=\"myTable.$colNumber[i].onMouseOut($event)\" (mousemove)=\"myTable.$colNumber[i].onMouseMove($event)\"\n          (click)=\"myTable.$colNumber[i].onClick($event)\" (dragover)=\"myTable.$colNumber[i].dragOver($event)\"\n          (drop)=\"myTable.$colNumber[i].drop($event)\" (dragenter)=\"myTable.$colNumber[i].dragEnter($event)\"\n          (dragleave)=\"myTable.$colNumber[i].dragLeave($event)\">\n          <div [ngStyle]=\"myTable.$colNumber[i].cell.style\">\n            {{myTable.$colNumber[i].cell.content}}\n          </div>\n        </th>\n\n      </tr>\n\n      <!-- \u7B2C\u4E8C\u884C\u5F00\u59CB -->\n      <ng-container *ngFor=\"let tr of myTable.$tableHeadTop; let i = index\">\n        <tr *ngIf=\"myTable.isShowRowIndex\">\n          <!-- rowIndexTh -->\n          <th [ngStyle]=\"myTable.$rowNumber[i].style\" class=\"rowNumber\" tabindex=\"1\"\n            (click)=\"myTable.$rowNumber[i].onClick($event)\" \n            (dragover)=\"myTable.$rowNumber[i].dragOver($event)\"\n            (drop)=\"myTable.$rowNumber[i].drop($event)\" \n            (dragenter)=\"myTable.$rowNumber[i].dragEnter($event)\"\n            (dragleave)=\"myTable.$rowNumber[i].dragLeave($event)\"\n            \n            (mousedown)=\"myTable.$rowNumber[i].onMouseDown($event)\"\n            (mouseout)=\"myTable.$rowNumber[i].onMouseOut($event)\"\n            (mousemove)=\"myTable.$rowNumber[i].onMouseMove($event)\">\n            <div [attr.title]=\"myTable.$rowNumber[i].cell.content\" [ngStyle]=\"myTable.$rowNumber[i].cell.style\">\n              {{myTable.$rowNumber[i].cell.content}}\n            </div>\n          </th>\n\n          <th class=\"colNumber\" tabindex=\"1\" *ngIf=\"i === 0 && myTable.$tableHeadLeft[0] && myTable.$tableHeadTop[0]\"\n            [attr.colspan]=\"myTable.theadLeftEntity.side2\" [attr.rowspan]=\"myTable.$tableHeadTop.length\"\n            [ngStyle]=\"myTable.tableHeadTopLeft.style\" style=\"border-width: 1px;\">\n            <div [ngStyle]=\"myTable.tableHeadTopLeft.cell.style\">\n            </div>\n          </th>\n        </tr>\n      </ng-container>\n    </thead>\n  </table>\n  <app-select-box [myTable]=\"myTable\" positionType=\"top-left\" *ngIf=\"myTable\"></app-select-box>\n</div>",
                styles: [".main-table{z-index:95}.fix-top-table{overflow:hidden;position:absolute;z-index:100}.index-table{z-index:101!important}.fix-left-table{z-index:100}.fix-top-left-table{position:absolute;z-index:102}.my-table{border:0 solid;border-left:1px solid #dedede;border-spacing:0;float:left!important;table-layout:fixed;width:auto!important}.my-table td,.my-table th{border:1px solid #dedede;border-width:0 1px 1px 0}.my-table tr:first-child td,.my-table tr:first-child th{border-top:1px solid #dedede}.clearfix:after,.clearfix:before{content:\" \";display:table}.clearfix:after{clear:both}"]
            }] }
];
/** @nocollapse */
TopLeftFixTableComponent.ctorParameters = () => [];
TopLeftFixTableComponent.propDecorators = {
    myTable: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TopLeftFixTableComponent.prototype.myTable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLWxlZnQtZml4LXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWRyYWctdGFibGUvIiwic291cmNlcyI6WyJzcmMvYXBwL3RhYmxlL3RvcC1sZWZ0LWZpeC10YWJsZS90b3AtbGVmdC1maXgtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU96RCxNQUFNO0lBRUosaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLDByR0FBa0Q7O2FBRW5EOzs7OztzQkFFRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC10b3AtbGVmdC1maXgtdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9wLWxlZnQtZml4LXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUzLWRyYWctdGFibGUvbGliL2RyYWctdGFibGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVG9wTGVmdEZpeFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbXlUYWJsZTogYW55O1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==