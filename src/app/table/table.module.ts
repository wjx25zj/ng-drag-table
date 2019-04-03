import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { LeftFixTableComponent } from './left-fix-table/left-fix-table.component';
import { FormsModule } from '@angular/forms';
import { TopFixTableComponent } from './top-fix-table/top-fix-table.component';
import { TopLeftFixTableComponent } from './top-left-fix-table/top-left-fix-table.component';
import { SelectBoxComponent } from './select-box/select-box.component';
import { DcComponent } from './dc/dc.component';
import { TdComponent } from './td/td.component';
import { ThComponent } from './th/th.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [DcComponent, TdComponent, ThComponent, TableComponent,
    LeftFixTableComponent, TopFixTableComponent,
    TopLeftFixTableComponent, SelectBoxComponent],

  exports: [TableComponent]
})
export class TableModule { }
