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
