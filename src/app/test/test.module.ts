import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { DirectivesModule } from '../modules/directives/directive.module';

@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule, TestRoutingModule, DirectivesModule],
})
export class TestModule {}
