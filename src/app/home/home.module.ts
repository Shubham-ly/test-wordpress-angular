import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewsItemComponent } from '../news-item/news-item.component';
import { DropdownSelectorComponent } from '../dropdown-selector/dropdown-selector.component';
import { DirectivesModule } from '../modules/directives/directive.module';

@NgModule({
  declarations: [HomeComponent, NewsItemComponent, DropdownSelectorComponent],
  imports: [CommonModule, HomeRoutingModule, DirectivesModule],
})
export class HomeModule {}
