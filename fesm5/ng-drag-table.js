import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, Input, NgModule } from '@angular/core';
export { TableCom, DragTable } from 'vue3-drag-table/lib/drag-table.umd.min';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TableComponent = /** @class */ (function () {
    function TableComponent() {
    }
    /**
     * @return {?}
     */
    TableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-drag-table',
                    template: "<div>\n  <app-left-fix-table *ngIf=\"myTable.hasLeftFixedTable\" [myTable]=\"myTable\"></app-left-fix-table>\n  <app-top-fix-table *ngIf=\"myTable.hasTopFixedTable\" [myTable]=\"myTable\"></app-top-fix-table>\n  <app-top-left-fix-table *ngIf=\"myTable.hasLeftFixedTable && myTable.hasTopFixedTable\" [myTable]=\"myTable\">\n  </app-top-left-fix-table>\n  <!-- \u4E3B\u8868 -->\n  <div (keydown)=\"myTable.onKeyDown($event)\" (keyup)=\"myTable.onKeyUp($event)\" [ngStyle]=\"myTable.style.mainTable\"\n    [scrollTop]=\"myTable.style.scrollTop\" (scroll)=\"myTable.onScroll($event)\" class=\"main-table\">\n    <table *ngIf=\"myTable && myTable.$rowNumber[0] && myTable.$colNumber[0]\" class=\"my-table\" cellspacing=\"0\"\n      cellpadding=\"0\" border=\"0\">\n\n\n      <!-- TopIndexThead -->\n      <tr *ngIf=\"myTable.isShowColIndex\">\n        <th *ngIf=\"myTable.isShowRowIndex\" class=\"rowNumber\" tabindex=\"1\"\n          [ngStyle]=\"{width:myTable.$rowNumber[0].style.width,height:myTable.$colNumber[0].style.height}\">\n          <div\n            [ngStyle]=\"{width:myTable.$rowNumber[0].style.width,height:myTable.$colNumber[0].style.height,lineHeight:myTable.$colNumber[0].style.height}\">\n            {{myTable.isTopLeftShow? myTable.topLeftValue:''}}\n          </div>\n        </th>\n        <th class=\"colNumber\" *ngFor=\"let th of myTable.$colNumber; let i = index\" (dragover)=\"th.dragOver($event)\"\n          (drop)=\"th.drop($event)\" (dragenter)=\"th.dragEnter($event)\" (dragleave)=\"th.dragLeave($event)\"\n          (mousedown)=\"th.onMouseDown($event)\" (mousemove)=\"th.onMouseMove($event)\" (mouseout)=\"th.onMouseOut($event)\"\n          [ngStyle]=\"th.style\">\n          <div [ngStyle]=\"th.cell.style\">{{th.cell.content}}</div>\n        </th>\n      </tr>\n\n      <!-- \u7B2C\u4E8C\u884C\u5F00\u59CB -->\n      <tr *ngFor=\"let th of myTable.$rowNumber; let i = index\">\n        <ng-template [ngIf]=\"i < myTable.$tableHeadTop.length\" [ngIfElse]=\"tbody\">\n          <!-- rowIndexTh -->\n          <th *ngIf=\"myTable.isShowRowIndex\" (dragover)=\"th.dragOver($event)\" (drop)=\"th.drop($event)\"\n            (dragenter)=\"th.dragEnter($event)\" (dragleave)=\"th.dragLeave($event)\" (mousedown)=\"th.onMouseDown($event)\"\n            (mousemove)=\"th.onMouseMove($event)\" (mouseout)=\"th.onMouseOut($event)\" class=\"rowNumber\">\n            <div [ngStyle]=\"th.cell.style\">\n              {{ myTable.hasLeftFixedTable ?'':th.cell.content}}\n            </div>\n          </th>\n          <!-- TopLeft  -->\n          <th class=\"colNumber\" tabindex=\"1\" *ngIf=\"i===0 && myTable.$tableHeadLeft[0] && myTable.$tableHeadTop[0]\"\n            [attr.colspan]=\"myTable.theadLeftEntity.side2\" [attr.rowspan]=\"myTable.theadTopEntity.side2\"\n            [ngStyle]=\"myTable.tableHeadTopLeft.style\">\n            <div [ngStyle]=\"myTable.tableHeadTopLeft.cell.style\">\n            </div>\n          </th>\n          <!-- topTh -->\n          <th *ngFor=\"let th of myTable.$tableHeadTop[i]; let i = index\" [attr.colspan]=\"th.span1\"\n            [attr.rowspan]=\"th.span2\" [ngStyle]=\"th.style\" (click)=\"th.onClick($event)\" [attr.draggable]=\"th.draggable\"\n            (dragstart)=\"th.dragStart($event)\" (dragend)=\"th.dragEnd($event)\" (dragover)=\"th.dragOver($event)\"\n            (drop)=\"th.drop($event)\" (dragenter)=\"th.dragEnter($event)\" (dragleave)=\"th.dragLeave($event)\"\n            (mousedown)=\"th.onMouseDown($event)\" (mousemove)=\"th.onMouseMove($event)\" (mouseout)=\"th.onMouseOut($event)\"\n            tabindex=\"1\">\n            <svg *ngIf=\"th.treeContainer.show\" [ngStyle]=\"th.treeContainer.style\" viewBox=\"0 0 1024 1024\"\n              (click)=\"th.treeContainer.onClick($event)\">\n              <path *ngFor=\"let d of th.treeContainer.svg[th.treeContainer.$openStatus].paths\" [attr.d]=\"d\"></path>\n            </svg>\n            <ng-container *ngFor=\"let sc of th.selfContainers\">\n              <svg [ngStyle]=\"sc.style\" viewBox=\"0 0 1024 1024\" *ngIf=\"sc.show\" (click)=\"sc.onClick($event)\">\n                <path *ngFor=\"let d of sc.svg[sc.type].paths\" [attr.d]=\"d\"></path>\n              </svg>\n            </ng-container>\n\n            <div [ngStyle]=\"th.cell.style\" (dblclick)=\"th.cell.onDbClick($event)\"\n              *ngIf=\"th.cell.displayClass[th.cell.status].displayType == 'text'\" [attr.title]=\"th.cell.title\">\n              {{th.cell.content}}\n            </div>\n            <div *ngIf=\"th.cell.displayClass[th.cell.status].displayType == 'input'\">\n              <input [ngStyle]=\"th.cell.style\" (mouseover)=\"th.cell.onMouseOver($event)\"\n                (blur)=\"th.cell.inputOnBlur($event,true)\" [(ngModel)]=\"th.cell.value\" />\n            </div>\n            <div *ngIf=\"th.cell.displayClass[th.cell.status].displayType == 'button'\">\n              <button (click)=\"th.cell.onClick($event)\">{{th.cell.content}}</button>\n            </div>\n\n            <select tabindex=\"1\" *ngIf=\"th.cell.displayClass[th.cell.status].displayType == 'select'\"\n              [(ngModel)]=\"th.cell.value\" [ngStyle]=\"th.cell.style\" (change)=\"th.cell.onChange($event)\"\n              (blur)=\"th.cell.onBlur($event)\">\n              <option *ngFor=\"let option of th.cell.select.optionList\" [attr.value]=\"option.text\"\n                [attr.key]=\"option.value\">{{option.text}}</option>\n            </select>\n          </th>\n        </ng-template>\n\n        <ng-template #tbody>\n           <!-- rowIndexThead -->\n          <th *ngIf=\"myTable.isShowRowIndex\" class=\"rowNumber\" [ngStyle]=\"th.style\" (mousedown)=\"th.onMouseDown($event)\"\n            (mouseout)=\"th.onMouseOut($event)\" (mousemove)=\"th.onMouseMove($event)\" (drop)=\"th.drop($event)\"\n            (dragenter)=\"th.dragEnter($event)\" (dragleave)=\"th.dragLeave($event)\">\n            <div [ngStyle]=\"th.cell.style\">\n              {{th.cell.content}}\n            </div>\n          </th>\n          <!-- \u4E3B\u8868\u91CC\u5DE6\u4FA7\u8868\u5934 -->\n          <th *ngFor=\"let th of myTable.$tableHeadLeft[i - myTable.$tableHeadTop.length]; let j = index\" tabindex=\"1\" [ngStyle]=\"th.style\" \n            (click)=\"th.onClick($event)\" (blur)=\"th.onBlur($event)\"\n            [attr.draggable]=\"th.draggable\"\n\n            (dragstart)=\"th.dragStart($event)\"\n            (dragover)=\"th.dragOver($event)\"\n            (drop)=\"th.drop($event)\" \n            (dragleave)=\"th.dragLeave($event)\" \n            (dragenter)=\"th.dragEnter($event)\"\n            (dragend)=\"th.dragEnd($event)\"\n\n            (mousedown)=\"th.onMouseDown($event)\" (mousemove)=\"th.onMouseMove($event)\"\n            (mouseout)=\"th.onMouseOut($event)\" [attr.colspan]=\"th.span2\" [attr.rowspan]=\"th.span1\">\n            <svg *ngIf=\"th.treeContainer.show\" [ngStyle]=\"th.treeContainer.style\" viewBox=\"0 0 1024 1024\"\n              (click)=\"th.treeContainer.onClick($event)\">\n              <path *ngFor=\"let d of th.treeContainer.svg[th.treeContainer.$openStatus].paths\" [attr.d]=\"d\"></path>\n            </svg>\n            <ng-container *ngFor=\"let sc of th.selfContainers\">\n              <svg [ngStyle]=\"sc.style\" viewBox=\"0 0 1024 1024\" *ngIf=\"sc.show\" (click)=\"sc.onClick($event)\">\n                <path *ngFor=\"let d of sc.svg[sc.type].paths\" [attr.d]=\"d\"></path>\n              </svg>\n            </ng-container>\n            <div [ngStyle]=\"th.cell.style\" (dblclick)=\"th.cell.onDbClick()\" [attr.title]=\"th.cell.title\"\n              *ngIf=\"th.cell.displayClass[th.cell.status].displayType == 'text'\">\n              {{th.cell.content}}\n            </div>\n\n            <input *ngIf=\"th.cell.displayClass[th.cell.status].displayType == 'input'\"\n              (mouseover)=\"th.cell.onMouseOver($event)\" (blur)=\"th.cell.inputOnBlur($event,true)\"\n              [(ngModel)]=\"th.cell.value\" [ngStyle]=\"th.cell.style\" style=\"background-color:#fff;\" />\n\n            <button (click)=\"th.cell.onClick($event)\"\n              *ngIf=\"th.cell.displayClass[th.cell.status].displayType == 'button'\"\n              [ngStyle]=\"th.cell.style\">{{th.cell.content}}</button>\n\n            <select tabindex=\"1\" *ngIf=\"th.cell.displayClass[th.cell.status].displayType == 'select'\"\n              [(ngModel)]=\"th.cell.value\" [ngStyle]=\"th.cell.style\" (change)=\"th.cell.onChange($event)\"\n              (blur)=\"th.cell.onBlur($event)\">\n              <option *ngFor=\"let option of th.cell.select.optionList\" [attr.value]=\"option.text\"\n                [attr.key]=\"option.value\">{{option.text}}</option>\n            </select>\n          </th>\n          <td *ngFor=\"let td of myTable.$tableBody[i - myTable.$tableHeadTop.length]; let j = index\"  tabindex=\"1\" [ngStyle]=\"td.style\" (click)=\"td.onClick($event)\" (mousedown)=\"td.onMouseDown($event)\"\n            (blur)=\"td.onBlur($event)\" (paste)=\"td.onPaste($event)\" \n            >\n            <div [ngStyle]=\"td.cell.style\" (dblclick)=\"td.cell.onDbClick($event)\"\n              *ngIf=\"td.cell.displayClass[td.cell.status].displayType == 'text'\">{{td.cell.content}}\n            </div>\n\n            <input type=\"text\" (input)=\"td.cell.onInput($event)\" (mouseup)=\"td.cell.onMouseUp($event)\"\n              [ngStyle]=\"td.cell.style\" *ngIf=\"td.cell.displayClass[td.cell.status].displayType == 'input'\"\n              (mouseover)=\"td.cell.onMouseOver($event)\" (focus)=\"td.cell.onFocus($event)\"\n              (blur)=\"td.cell.inputOnBlur($event,true)\" (keydown)=\"td.cell.onKeyDown($event)\"\n              [(ngModel)]=\"td.cell.value\" />\n\n            <select *ngIf=\"td.cell && td.cell.displayClass[td.cell.status].displayType == 'select'\" tabindex=\"1\"\n              [(ngModel)]=\"td.cell.value\" [ngStyle]=\"td.cell.style\" (blur)=\"td.cell.onBlur($event)\"\n              (mouseover)=\"td.cell.onMouseOver($event)\" (change)=\"td.cell.onChange($event)\">\n              <option *ngFor=\"let option of td.cell.select.optionList\" [attr.key]=\"option.value\"\n                [attr.value]=\"option.text\">{{option.text}}</option>\n            </select>\n          </td>\n        </ng-template>\n\n      </tr>\n    </table>\n    <app-select-box [myTable]=\"myTable\" positionType=\"main\" *ngIf=\"myTable\"></app-select-box>\n  </div>\n</div>",
                    styles: [".main-table{z-index:95}.fix-top-table{overflow:hidden;position:absolute;z-index:100}.index-table{z-index:101!important}.fix-left-table{z-index:100}.fix-top-left-table{position:absolute;z-index:102}.my-table{border:0 solid;border-left:1px solid #dedede;border-spacing:0;float:left!important;table-layout:fixed;width:auto!important}.my-table td,.my-table th{border:1px solid #dedede;border-width:0 1px 1px 0}.my-table tr:first-child td,.my-table tr:first-child th{border-top:1px solid #dedede}.clearfix:after,.clearfix:before{content:\" \";display:table}.clearfix:after{clear:both}"]
                }] }
    ];
    /** @nocollapse */
    TableComponent.ctorParameters = function () { return []; };
    TableComponent.propDecorators = {
        myTable: [{ type: Input }]
    };
    return TableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LeftFixTableComponent = /** @class */ (function () {
    function LeftFixTableComponent() {
    }
    /**
     * @return {?}
     */
    LeftFixTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    LeftFixTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-left-fix-table',
                    template: "<div class=\"fix-left-table\" [scrollTop]=\"myTable.style.scrollTop\" [ngStyle]=\"myTable.style.leftTable\"\n  (keydown)=\"myTable.onKeyDown($event)\" (keyup)=\"myTable.onKeyUp($event)\">\n\n  <table *ngIf=\"myTable && myTable.$rowNumber[0] && myTable.$colNumber[0]\" class=\"my-table left-table\">\n    <thead>\n      <!-- TopIndexThead -->\n      <tr *ngIf=\"myTable.isShowColIndex\">\n        <!-- IndexTopLeft  -->\n        <th class=\"rowNumber\" tabindex=\"1\"\n          [ngStyle]=\"{padding:(myTable.$rowNumber[0]||myTable.$colNumber[0]||{}).style.padding,background:(myTable.$rowNumber[0]||myTable.$colNumber[0]||{}).style.background}\">\n          <div\n            [ngStyle]=\"{width:myTable.$rowNumber[0].style.width,height:myTable.$colNumber[0].style.height,lineHeight:myTable.$colNumber[0].style.height}\">\n            {{myTable.isTopLeftShow? myTable.topLeftValue:''}}\n          </div>\n        </th>\n        <th *ngFor=\"let th of myTable.theadLeftEntity.leafIndexList2; let i = index\" class=\"colNumber\"\n          [ngStyle]=\"myTable.$colNumber[i].style\">\n          <div [ngStyle]=\"myTable.$colNumber[i].cell.style\">\n            {{myTable.$colNumber[i].cell.content}}\n          </div>\n        </th>\n      </tr>\n\n      <!-- \u7B2C\u4E8C\u884C\u5F00\u59CB -->\n      <tr *ngFor=\"let th of myTable.$rowNumber; let i = index\">\n        <!-- rowIndexThead -->\n        <th *ngIf=\"myTable.isShowRowIndex\" class=\"rowNumber\" [ngStyle]=\"th.style\" tabindex=\"1\"\n          (mousedown)=\"th.onMouseDown($event)\" (mouseout)=\"th.onMouseOut($event)\" (mousemove)=\"th.onMouseMove($event)\"\n          (click)=\"th.onClick($event)\" (dragover)=\"th.dragOver($event)\" (drop)=\"th.drop($event)\"\n          (dragenter)=\"th.dragEnter($event)\" (dragleave)=\"th.dragLeave($event)\">\n          <div [ngStyle]=\"th.cell.style\" [attr.title]=th.cell.content>{{th.cell.content}}</div>\n        </th>\n        <!-- \u5185\u90E8TopLeft \u5224\u65AD-->\n        <th *ngIf=\"i===0 && myTable.$tableHeadLeft[0]&&myTable.$tableHeadTop[0]\" class=\"colNumber\" tabindex=\"1\"\n          (click)=\"myTable.onClick($event)\" [attr.colspan]=\"myTable.theadLeftEntity.side2\"\n          [attr.rowspan]=\"myTable.$tableHeadTop.length\" [ngStyle]=\"myTable.tableHeadTopLeft.style\">\n          <div [ngStyle]=\"myTable.tableHeadTopLeft.cell.style\">\n          </div>\n        </th>\n\n        <!-- \u4E3B\u8868\u91CC\u5DE6\u4FA7\u8868\u5934 -->\n        <th tabindex=\"1\" *ngFor=\"let th of myTable.$tableHeadLeft[i - myTable.theadTopEntity.side2]; let j = index\"\n          [ngStyle]=\"th.style\" (click)=\"th.onClick($event)\" (blur)=\"th.onBlur($event)\" [attr.draggable]=\"th.draggable\"\n          (dragstart)=\"th.dragStart($event)\" (dragover)=\"th.dragOver($event)\" (drop)=\"th.drop($event)\"\n          (dragleave)=\"th.dragLeave($event)\" (dragenter)=\"th.dragEnter($event)\" (dragend)=\"th.dragEnd($event)\"\n          (mousedown)=\"th.onMouseDown($event)\" (mousemove)=\"th.onMouseMove($event)\" (mouseout)=\"th.onMouseOut($event)\"\n          [attr.colspan]=\"th.span2\" [attr.rowspan]=\"th.span1\">\n          <svg *ngIf=\"th.treeContainer.show\" [ngStyle]=\"th.treeContainer.style\" viewBox=\"0 0 1024 1024\"\n            (click)=\"th.treeContainer.onClick($event)\">\n            <path *ngFor=\"let d of th.treeContainer.svg[th.treeContainer.$openStatus].paths\" [attr.d]=\"d\"></path>\n          </svg>\n          <ng-container *ngFor=\"let sc of th.selfContainers\">\n            <svg [ngStyle]=\"sc.style\" viewBox=\"0 0 1024 1024\" *ngIf=\"sc.show\" (click)=\"sc.onClick($event)\">\n              <path *ngFor=\"let d of sc.svg[sc.type].paths\" [attr.d]=\"d\"></path>\n            </svg>\n          </ng-container>\n          <div *ngIf=\"th.cell.displayClass[th.cell.status].displayType == 'text'\" [ngStyle]=\"th.cell.style\"\n            (dblclick)=\"th.cell.onDbClick()\" [attr.title]=\"th.cell.title\">\n\n            {{th.cell.content}}\n          </div>\n\n          <input *ngIf=\"th.cell.displayClass[th.cell.status].displayType == 'input'\"\n            (mouseover)=\"th.cell.onMouseOver($event)\" (blur)=\"th.cell.inputOnBlur($event,true)\"\n            [(ngModel)]=\"th.cell.value\" [ngStyle]=\"th.cell.style\" style=\"background-color:#fff;\" />\n\n          <button (click)=\"th.cell.onClick($event)\" *ngIf=\"th.cell.displayClass[th.cell.status].displayType == 'button'\"\n            [ngStyle]=\"th.cell.style\">{{th.cell.content}}</button>\n\n          <select tabindex=\"1\" *ngIf=\"th.cell.displayClass[th.cell.status].displayType == 'select'\"\n            [(ngModel)]=\"th.cell.value\" [ngStyle]=\"th.cell.style\" (change)=\"th.cell.onChange($event)\"\n            (blur)=\"th.cell.onBlur($event)\">\n            <option *ngFor=\"let option of th.cell.select.optionList\" [attr.value]=\"option.text\"\n              [attr.key]=\"option.value\">{{option.text}}</option>\n          </select>\n\n        </th>\n      </tr>\n    </thead>\n  </table>\n  <app-select-box [myTable]=\"myTable\" positionType=\"left\" *ngIf=\"myTable\"></app-select-box>\n</div>",
                    styles: [".main-table{z-index:95}.fix-top-table{overflow:hidden;position:absolute;z-index:100}.index-table{z-index:101!important}.fix-left-table{z-index:100}.fix-top-left-table{position:absolute;z-index:102}.my-table{border:0 solid;border-left:1px solid #dedede;border-spacing:0;float:left!important;table-layout:fixed;width:auto!important}.my-table td,.my-table th{border:1px solid #dedede;border-width:0 1px 1px 0}.my-table tr:first-child td,.my-table tr:first-child th{border-top:1px solid #dedede}.clearfix:after,.clearfix:before{content:\" \";display:table}.clearfix:after{clear:both}"]
                }] }
    ];
    /** @nocollapse */
    LeftFixTableComponent.ctorParameters = function () { return []; };
    LeftFixTableComponent.propDecorators = {
        myTable: [{ type: Input }]
    };
    return LeftFixTableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TopFixTableComponent = /** @class */ (function () {
    function TopFixTableComponent() {
    }
    /**
     * @return {?}
     */
    TopFixTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TopFixTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-top-fix-table',
                    template: "<!-- \u4E0A\u6D4B\u56FA\u5B9A\u8868\u5934 -->\n<div class=\"fix-top-table\" [scrollLeft]=\"myTable.style.scrollLeft\" [ngStyle]=\"myTable.style.topTable\"\n  (keydown)=\"myTable.onKeyDown($event)\" (keyup)=\"myTable.onKeyUp($event)\">\n  <table *ngIf=\"myTable && myTable.$rowNumber[0] && myTable.$colNumber[0]\" class=\"my-table\" cellspacing=\"0\"\n    cellpadding=\"0\" border=\"0\">\n    <thead>\n      <!-- TopThead -->\n      <tr *ngIf=\"myTable.isShowColIndex\">\n        <!-- TopIndexThead -->\n        <th class=\"rowNumber\" tabindex=\"1\" *ngIf=\"myTable.isShowRowIndex\"\n          [ngStyle]=\"{padding:myTable.$rowNumber[0].style.padding,background:myTable.$rowNumber[0].style.background}\">\n          <div\n            [ngStyle]=\"{width:myTable.$rowNumber[0].style.width,height:myTable.$colNumber[0].style.height,lineHeight:myTable.$colNumber[0].style.height}\">\n            {{myTable.isTopLeftShow? myTable.topLeftValue:''}}\n          </div>\n        </th>\n\n        <th class=\"colNumber\" tabindex=\"1\" *ngFor=\"let th of myTable.$colNumber; let i = index\" [ngStyle]=\"th.style\"\n          (mousedown)=\"th.onMouseDown($event)\" (mouseout)=\"th.onMouseOut($event)\" (mousemove)=\"th.onMouseMove($event)\"\n          (click)=\"th.onClick($event)\" (dragover)=\"th.dragOver($event)\" (drop)=\"th.drop($event)\"\n          (dragenter)=\"th.dragEnter($event)\" (dragleave)=\"th.dragLeave($event)\">\n          <div [ngStyle]=\"th.cell.style\">{{th.cell.content}}</div>\n        </th>\n      </tr>\n      <!-- TopThead -->\n      <tr *ngFor=\"let tr of myTable.$tableHeadTop; let i = index\">\n        <!-- rowIndexTh -->\n        <th *ngIf=\"myTable.isShowRowIndex\" tabindex=\"1\" class=\"rowNumber\" [ngStyle]=\"myTable.$rowNumber[i].style\"\n          (mousedown)=\"myTable.$rowNumber[i].onMouseDown($event)\"\n          (mousemove)=\"myTable.$rowNumber[i].onMouseMove($event)\" (mouseout)=\"myTable.$rowNumber[i].onMouseOut($event)\"\n          (drop)=\"myTable.$rowNumber[i].drop($event)\" (dragenter)=\"myTable.$rowNumber[i].dragEnter($event)\"\n          (dragleave)=\"myTable.$rowNumber[i].dragLeave($event)\" (dragover)=\"myTable.$rowNumber[i].dragOver($event)\">\n\n          <div [ngStyle]=\"myTable.$rowNumber[i].cell.style\">{{myTable.$rowNumber[i].cell.content}}</div>\n        </th>\n        <th class=\"colNumber\" tabindex=\"1\" *ngIf=\"i===0 && myTable.$tableHeadLeft[0] && myTable.$tableHeadTop[0]\"\n          [attr.colspan]=\"myTable.theadLeftEntity.side2\" [attr.rowspan]=\"myTable.$tableHeadTop.length\"\n          [ngStyle]=\"myTable.tableHeadTopLeft.style\">\n          <div [ngStyle]=\"myTable.tableHeadTopLeft.cell.style\">\n          </div>\n        </th>\n        <!-- \u4E0A\u6D4B\u56FA\u5B9A\u8868\u5934 -->\n        <th [ngStyle]=\"th.style\" class=\"top-th\" *ngFor=\"let th of tr; let j = index\" [attr.key]=\"th.id +j\" tabindex=\"1\"\n          (blur)=\"th.onBlur($event)\" (click)=\"th.onClick($event)\" [attr.draggable]=\"th.draggable\"\n          (dragstart)=\"th.dragStart($event)\" (dragend)=\"th.dragEnd($event)\" (dragover)=\"th.dragOver($event)\"\n          (drop)=\"th.drop($event)\" (dragenter)=\"th.dragEnter($event)\" (dragleave)=\"th.dragLeave($event)\"\n          (mousedown)=\"th.onMouseDown($event)\" (mousemove)=\"th.onMouseMove($event)\" (mouseout)=\"th.onMouseOut($event)\"\n          [attr.colspan]=\"th.span1\" [attr.rowspan]=\"th.span2\">\n          <svg *ngIf=\"th.treeContainer.show\" [ngStyle]=\"th.treeContainer.style\" viewBox=\"0 0 1024 1024\"\n            (click)=\"th.treeContainer.onClick($event)\">\n            <path *ngFor=\"let d of th.treeContainer.svg[th.treeContainer.$openStatus].paths\" [attr.d]=\"d\"></path>\n          </svg>\n          <ng-container *ngFor=\"let sc of th.selfContainers\">\n            <svg [ngStyle]=\"sc.style\" viewBox=\"0 0 1024 1024\" *ngIf=\"sc.show\" (click)=\"sc.onClick($event)\">\n              <path *ngFor=\"let d of sc.svg[sc.type].paths\" [attr.d]=\"d\"></path>\n            </svg>\n          </ng-container>\n          <div (dblclick)=\"th.cell.onDbClick()\" [ngStyle]=\"th.cell.style\"\n            *ngIf=\"th.cell.displayClass[th.cell.status].displayType == 'text'\" [attr.title]=\"th.cell.title\">\n            {{th.cell.content}}\n          </div>\n\n          <input *ngIf=\"th.cell.displayClass[th.cell.status].displayType == 'input'\" [ngStyle]=\"th.cell.style\"\n            (mouseover)=\"th.cell.onMouseOver($event)\" (blur)=\"th.cell.inputOnBlur($event,true)\"\n            [(ngModel)]=\"th.cell.value\" />\n\n          <button *ngIf=\"th.cell.displayClass[th.cell.status].displayType == 'button'\" [ngStyle]=\"th.cell.style\"\n            (click)=\"th.cell.onClick($event)\">{{th.cell.content}}</button>\n\n        </th>\n      </tr>\n    </thead>\n  </table>\n  <app-select-box [myTable]=\"myTable\" positionType=\"top\" *ngIf=\"myTable\"></app-select-box>\n</div>",
                    styles: [".main-table{z-index:95}.fix-top-table{overflow:hidden;position:absolute;z-index:100}.index-table{z-index:101!important}.fix-left-table{z-index:100}.fix-top-left-table{position:absolute;z-index:102}.my-table{border:0 solid;border-left:1px solid #dedede;border-spacing:0;float:left!important;table-layout:fixed;width:auto!important}.my-table td,.my-table th{border:1px solid #dedede;border-width:0 1px 1px 0}.my-table tr:first-child td,.my-table tr:first-child th{border-top:1px solid #dedede}.clearfix:after,.clearfix:before{content:\" \";display:table}.clearfix:after{clear:both}"]
                }] }
    ];
    /** @nocollapse */
    TopFixTableComponent.ctorParameters = function () { return []; };
    TopFixTableComponent.propDecorators = {
        myTable: [{ type: Input }]
    };
    return TopFixTableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TopLeftFixTableComponent = /** @class */ (function () {
    function TopLeftFixTableComponent() {
    }
    /**
     * @return {?}
     */
    TopLeftFixTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TopLeftFixTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-top-left-fix-table',
                    template: "<div class=\"fix-top-left-table\">\n  <table *ngIf=\"myTable && myTable.$rowNumber[0] && myTable.$colNumber[0]\" class=\"my-table left-top-table\"\n    cellspacing=\"0\" cellpadding=\"0\" border=\"0\">\n    <thead>\n      <!-- TopIndexThead -->\n      <tr *ngIf=\"myTable.isShowColIndex && myTable.isShowRowIndex\">\n        <th tabindex=\"1\" class=\"rowNumber\"\n          [ngStyle]=\"{padding:myTable.$rowNumber[0].style.padding,background:myTable.$rowNumber[0].style.background}\">\n          <div\n            [ngStyle]=\"{width:myTable.$rowNumber[0].style.width, height:myTable.$colNumber[0].style.height,lineHeight:myTable.$colNumber[0].style.height}\">\n            {{myTable.isTopLeftShow? myTable.topLeftValue:''}}\n          </div>\n        </th>\n        <th *ngFor=\"let th of myTable.theadLeftEntity.$leafIndexList2; let i = index\" tabindex=\"1\" class=\"colNumber\"\n          [ngStyle]=\"myTable.$colNumber[i].style\" (mousedown)=\"myTable.$colNumber[i].onMouseDown($event)\"\n          (mouseout)=\"myTable.$colNumber[i].onMouseOut($event)\" (mousemove)=\"myTable.$colNumber[i].onMouseMove($event)\"\n          (click)=\"myTable.$colNumber[i].onClick($event)\" (dragover)=\"myTable.$colNumber[i].dragOver($event)\"\n          (drop)=\"myTable.$colNumber[i].drop($event)\" (dragenter)=\"myTable.$colNumber[i].dragEnter($event)\"\n          (dragleave)=\"myTable.$colNumber[i].dragLeave($event)\">\n          <div [ngStyle]=\"myTable.$colNumber[i].cell.style\">\n            {{myTable.$colNumber[i].cell.content}}\n          </div>\n        </th>\n\n      </tr>\n\n      <!-- \u7B2C\u4E8C\u884C\u5F00\u59CB -->\n      <ng-container *ngFor=\"let tr of myTable.$tableHeadTop; let i = index\">\n        <tr *ngIf=\"myTable.isShowRowIndex\">\n          <!-- rowIndexTh -->\n          <th [ngStyle]=\"myTable.$rowNumber[i].style\" class=\"rowNumber\" tabindex=\"1\"\n            (click)=\"myTable.$rowNumber[i].onClick($event)\" \n            (dragover)=\"myTable.$rowNumber[i].dragOver($event)\"\n            (drop)=\"myTable.$rowNumber[i].drop($event)\" \n            (dragenter)=\"myTable.$rowNumber[i].dragEnter($event)\"\n            (dragleave)=\"myTable.$rowNumber[i].dragLeave($event)\"\n            \n            (mousedown)=\"myTable.$rowNumber[i].onMouseDown($event)\"\n            (mouseout)=\"myTable.$rowNumber[i].onMouseOut($event)\"\n            (mousemove)=\"myTable.$rowNumber[i].onMouseMove($event)\">\n            <div [attr.title]=\"myTable.$rowNumber[i].cell.content\" [ngStyle]=\"myTable.$rowNumber[i].cell.style\">\n              {{myTable.$rowNumber[i].cell.content}}\n            </div>\n          </th>\n\n          <th class=\"colNumber\" tabindex=\"1\" *ngIf=\"i === 0 && myTable.$tableHeadLeft[0] && myTable.$tableHeadTop[0]\"\n            [attr.colspan]=\"myTable.theadLeftEntity.side2\" [attr.rowspan]=\"myTable.$tableHeadTop.length\"\n            [ngStyle]=\"myTable.tableHeadTopLeft.style\" style=\"border-width: 1px;\">\n            <div [ngStyle]=\"myTable.tableHeadTopLeft.cell.style\">\n            </div>\n          </th>\n        </tr>\n      </ng-container>\n    </thead>\n  </table>\n  <app-select-box [myTable]=\"myTable\" positionType=\"top-left\" *ngIf=\"myTable\"></app-select-box>\n</div>",
                    styles: [".main-table{z-index:95}.fix-top-table{overflow:hidden;position:absolute;z-index:100}.index-table{z-index:101!important}.fix-left-table{z-index:100}.fix-top-left-table{position:absolute;z-index:102}.my-table{border:0 solid;border-left:1px solid #dedede;border-spacing:0;float:left!important;table-layout:fixed;width:auto!important}.my-table td,.my-table th{border:1px solid #dedede;border-width:0 1px 1px 0}.my-table tr:first-child td,.my-table tr:first-child th{border-top:1px solid #dedede}.clearfix:after,.clearfix:before{content:\" \";display:table}.clearfix:after{clear:both}"]
                }] }
    ];
    /** @nocollapse */
    TopLeftFixTableComponent.ctorParameters = function () { return []; };
    TopLeftFixTableComponent.propDecorators = {
        myTable: [{ type: Input }]
    };
    return TopLeftFixTableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SelectBoxComponent = /** @class */ (function () {
    function SelectBoxComponent() {
        console.log();
    }
    /**
     * @return {?}
     */
    SelectBoxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SelectBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-select-box',
                    template: "<div style=\"position:absolute;display:contents\">\n  <ng-container *ngFor=\"let val of myTable.$selectBoxEntity.selectList; let key = index\">\n    <div *ngIf=\"val.position.table === myTable.position.table && val.selectBoxType === positionType\" [attr.key]=\"key\"\n      [ngStyle]=\"{\n          position: 'absolute',\n          top:val.style.top+'px',\n          left:val.style.left+'px'\n          }\">\n      <span>\n        <div [ngStyle]=\"val.topStyle\"></div>\n        <div [ngStyle]=\"val.rightStyle\"></div>\n        <div [ngStyle]=\"val.bottomStyle\"></div>\n        <div [ngStyle]=\"val.leftStyle\"></div>\n      </span>\n    </div>\n  </ng-container>\n</div>"
                }] }
    ];
    /** @nocollapse */
    SelectBoxComponent.ctorParameters = function () { return []; };
    SelectBoxComponent.propDecorators = {
        myTable: [{ type: Input }],
        positionType: [{ type: Input }]
    };
    return SelectBoxComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TableModule = /** @class */ (function () {
    function TableModule() {
    }
    TableModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule
                    ],
                    declarations: [TableComponent, LeftFixTableComponent, TopFixTableComponent, TopLeftFixTableComponent, SelectBoxComponent],
                    exports: [TableComponent]
                },] }
    ];
    return TableModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { TableModule, LeftFixTableComponent as ɵb, SelectBoxComponent as ɵe, TableComponent as ɵa, TopFixTableComponent as ɵc, TopLeftFixTableComponent as ɵd };

//# sourceMappingURL=ng-drag-table.js.map