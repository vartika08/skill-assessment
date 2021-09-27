import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatternRoutingModule } from './pattern-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StringPatternComponent } from './string-pattern/string-pattern.component';

@NgModule({
  declarations: [StringPatternComponent],

  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    PatternRoutingModule,
  ],
})
export class PatternModule {}
