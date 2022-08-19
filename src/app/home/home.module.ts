import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewsItemComponent } from '../news-item/news-item.component';
import { DropdownSelectorComponent } from '../dropdown-selector/dropdown-selector.component';

@NgModule({
  declarations: [HomeComponent, NewsItemComponent, DropdownSelectorComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
