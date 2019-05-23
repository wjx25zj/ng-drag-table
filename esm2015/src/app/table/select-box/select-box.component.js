/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SelectBoxComponent {
    constructor() {
        console.log();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SelectBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-select-box',
                template: "<div style=\"position:absolute;display:contents\">\n  <ng-container *ngFor=\"let val of myTable.$selectBoxEntity.selectList; let key = index\">\n    <div *ngIf=\"val.position.table === myTable.position.table && val.selectBoxType === positionType\" [attr.key]=\"key\"\n      [ngStyle]=\"{\n          position: 'absolute',\n          top:val.style.top+'px',\n          left:val.style.left+'px'\n          }\">\n      <span>\n        <div [ngStyle]=\"val.topStyle\"></div>\n        <div [ngStyle]=\"val.rightStyle\"></div>\n        <div [ngStyle]=\"val.bottomStyle\"></div>\n        <div [ngStyle]=\"val.leftStyle\"></div>\n      </span>\n    </div>\n  </ng-container>\n</div>"
            }] }
];
/** @nocollapse */
SelectBoxComponent.ctorParameters = () => [];
SelectBoxComponent.propDecorators = {
    myTable: [{ type: Input }],
    positionType: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SelectBoxComponent.prototype.myTable;
    /** @type {?} */
    SelectBoxComponent.prototype.positionType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1kcmFnLXRhYmxlLyIsInNvdXJjZXMiOlsic3JjL2FwcC90YWJsZS9zZWxlY3QtYm94L3NlbGVjdC1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFNbkYsTUFBTTtJQUdKO1FBQ0UsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQ2Y7Ozs7SUFDRCxRQUFRO0tBQ1A7OztZQVhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQiw2cUJBQTBDO2FBQzNDOzs7OztzQkFFRSxLQUFLOzJCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2VsZWN0LWJveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWxlY3QtYm94LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Qm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbXlUYWJsZTtcbiAgQElucHV0KCkgcG9zaXRpb25UeXBlOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKCk7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19