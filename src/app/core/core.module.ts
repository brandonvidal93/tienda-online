import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';

import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    NavbarComponent,
  ],
})
export class CoreModule { }
