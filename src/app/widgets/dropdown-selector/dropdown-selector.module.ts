import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownSelectorComponent } from './dropdown-selector.component';
import { DirectivesModule } from 'src/app/modules/directives/directive.module';

@NgModule({
  declarations: [DropdownSelectorComponent],
  imports: [CommonModule, DirectivesModule],
  exports: [DropdownSelectorComponent],
})
export class DropdownSelectorModule {}
