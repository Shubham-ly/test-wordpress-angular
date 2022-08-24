import { NgModule } from '@angular/core';
import { ClickOutsideDirective } from './click-outside/click-outside.directive';
import { SafePipe } from '../../safe.pipe';

@NgModule({
  imports: [],
  declarations: [ClickOutsideDirective, SafePipe],
  exports: [ClickOutsideDirective, SafePipe],
})
export class DirectivesModule {}
