import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewsItemComponent } from '../widgets/news-item/news-item.component';
import { DirectivesModule } from '../modules/directives/directive.module';
import { DropdownSelectorModule } from '../widgets/dropdown-selector/dropdown-selector.module';

@NgModule({
  declarations: [NewsComponent, NewsItemComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DirectivesModule,
    DropdownSelectorModule,
  ],
})
export class HomeModule {}
