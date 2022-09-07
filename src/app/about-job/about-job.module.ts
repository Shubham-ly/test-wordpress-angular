import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesModule } from '../modules/directives/directive.module';
import { AboutJobComponent } from './about-job.component';
import { AboutJobRoutingModule } from './about-job-routing.module';

@NgModule({
  declarations: [AboutJobComponent],
  imports: [CommonModule, AboutJobRoutingModule, DirectivesModule],
})
export class AboutJobModule {}
