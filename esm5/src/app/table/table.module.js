/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { LeftFixTableComponent } from './left-fix-table/left-fix-table.component';
import { FormsModule } from '@angular/forms';
import { TopFixTableComponent } from './top-fix-table/top-fix-table.component';
import { TopLeftFixTableComponent } from './top-left-fix-table/top-left-fix-table.component';
import { SelectBoxComponent } from './select-box/select-box.component';
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
export { TableModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZHJhZy10YWJsZS8iLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGUvdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7OztnQkFDdEUsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFLENBQUMsY0FBYyxFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLHdCQUF3QixFQUFFLGtCQUFrQixDQUFDO29CQUN6SCxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7aUJBQzFCOztzQkFmRDs7U0FnQmEsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMZWZ0Rml4VGFibGVDb21wb25lbnQgfSBmcm9tICcuL2xlZnQtZml4LXRhYmxlL2xlZnQtZml4LXRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBUb3BGaXhUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vdG9wLWZpeC10YWJsZS90b3AtZml4LXRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvcExlZnRGaXhUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vdG9wLWxlZnQtZml4LXRhYmxlL3RvcC1sZWZ0LWZpeC10YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWxlY3RCb3hDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC1ib3gvc2VsZWN0LWJveC5jb21wb25lbnQnO1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtUYWJsZUNvbXBvbmVudCwgTGVmdEZpeFRhYmxlQ29tcG9uZW50LCBUb3BGaXhUYWJsZUNvbXBvbmVudCwgVG9wTGVmdEZpeFRhYmxlQ29tcG9uZW50LCBTZWxlY3RCb3hDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtUYWJsZUNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlTW9kdWxlIHsgfVxyXG4iXX0=