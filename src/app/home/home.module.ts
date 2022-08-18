import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewsItemComponent } from '../news-item/news-item.component';

@NgModule({
  declarations: [HomeComponent, NewsItemComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
