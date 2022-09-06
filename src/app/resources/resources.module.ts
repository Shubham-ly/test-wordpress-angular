import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DirectivesModule } from '../modules/directives/directive.module';
import { ResourceItemComponent } from '../widgets/resource-item/resource-item.component';
import { DropdownSelectorModule } from '../widgets/dropdown-selector/dropdown-selector.module';
import { ResourceRoutingModule } from './resources-routing.module';
import { ResourcesComponent } from './resources.component';

@NgModule({
  declarations: [ResourcesComponent, ResourceItemComponent],
  imports: [
    CommonModule,
    ResourceRoutingModule,
    DirectivesModule,
    DropdownSelectorModule,
  ],
})
export class ResourcesModule {}
