import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    //CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule
  ]
})
export class MaterialModule { }
