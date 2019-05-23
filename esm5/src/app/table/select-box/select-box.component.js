/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
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
export { SelectBoxComponent };
if (false) {
    /** @type {?} */
    SelectBoxComponent.prototype.myTable;
    /** @type {?} */
    SelectBoxComponent.prototype.positionType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1kcmFnLXRhYmxlLyIsInNvdXJjZXMiOlsic3JjL2FwcC90YWJsZS9zZWxlY3QtYm94L3NlbGVjdC1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7O0lBU2pGO1FBQ0UsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQ2Y7Ozs7SUFDRCxxQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBWEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLDZxQkFBMEM7aUJBQzNDOzs7OzswQkFFRSxLQUFLOytCQUNMLEtBQUs7OzZCQVJSOztTQU1hLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zZWxlY3QtYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC1ib3guY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RCb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBteVRhYmxlO1xuICBASW5wdXQoKSBwb3NpdGlvblR5cGU6IHN0cmluZztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coKTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=