import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DirectivesModule } from '../modules/directives/directive.module';
import { DropdownSelectorModule } from '../widgets/dropdown-selector/dropdown-selector.module';
import { JobItemComponent } from '../widgets/job-item/job-item/job-item.component';
import { CareersRoutingModule } from './careers-routing.module';
import { CareersComponent } from './careers.component';

@NgModule({
  declarations: [CareersComponent, JobItemComponent],
  imports: [
    CommonModule,
    CareersRoutingModule,
    DirectivesModule,
    DropdownSelectorModule,
  ],
})
export class CareersModule {}
