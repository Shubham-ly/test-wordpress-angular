import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesModule } from '../modules/directives/directive.module';
import { FaqsComponent } from './faqs.component';
import { FaqsRoutingModule } from './faqs-routing.module';

@NgModule({
  declarations: [FaqsComponent],
  imports: [CommonModule, FaqsRoutingModule, DirectivesModule],
})
export class FaqsModule {}
