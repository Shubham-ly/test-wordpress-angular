import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewsItemComponent } from '../widgets/news-item/news-item.component';
import { DropdownSelectorComponent } from '../widgets/dropdown-selector/dropdown-selector.component';
import { DirectivesModule } from '../modules/directives/directive.module';

@NgModule({
  declarations: [NewsComponent, NewsItemComponent, DropdownSelectorComponent],
  imports: [CommonModule, HomeRoutingModule, DirectivesModule],
})
export class HomeModule {}
