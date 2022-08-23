import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { ClickOutsideDirective } from '../click-outside.directive';

@NgModule({
  declarations: [TestComponent, NavLinkComponent, ClickOutsideDirective],
  imports: [CommonModule, TestRoutingModule],
})
export class TestModule {}
