import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { DirectivesModule } from '../modules/directives/directive.module';

@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule, PostRoutingModule, DirectivesModule],
})
export class PostModule {}
