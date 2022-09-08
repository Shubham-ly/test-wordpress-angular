import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'news-events',
    loadChildren: () =>
      import('./news-events/news.module').then((m) => m.HomeModule),
  },
  {
    path: 'news-events/post/:id',
    loadChildren: () => import('./post/post.module').then((m) => m.PostModule),
  },
  {
    path: 'resources',
    loadChildren: () =>
      import('./resources/resources.module').then((m) => m.ResourcesModule),
  },
  {
    path: 'careers',
    loadChildren: () =>
      import('./careers/careers.module').then((m) => m.CareersModule),
  },
  {
    path: 'careers/about/:id',
    loadChildren: () =>
      import('./about-job/about-job.module').then((m) => m.AboutJobModule),
  },
  {
    path: 'faqs',
    loadChildren: () => import('./faqs/faqs.module').then((m) => m.FaqsModule),
  },
  {
    path: ':slug',
    loadChildren: () => import('./test/test.module').then((m) => m.TestModule),
  },
  {
    path: '',
    loadChildren: () => import('./test/test.module').then((m) => m.TestModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
