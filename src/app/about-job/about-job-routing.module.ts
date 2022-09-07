import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutJobComponent } from './about-job.component';

const routes: Routes = [{ path: '', component: AboutJobComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutJobRoutingModule {}
