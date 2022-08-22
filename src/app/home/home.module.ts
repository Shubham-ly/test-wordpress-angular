import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewsItemComponent } from '../news-item/news-item.component';
import { DropdownSelectorComponent } from '../dropdown-selector/dropdown-selector.component';
import { ClickOutsideDirective } from '../click-outside.directive';

@NgModule({
  declarations: [
    HomeComponent,
    NewsItemComponent,
    DropdownSelectorComponent,
    ClickOutsideDirective,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
