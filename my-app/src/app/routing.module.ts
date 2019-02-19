import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicComponent } from './topic/topic.component';
import { DetailComponent } from './detail/detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'topic',component: TopicComponent},
  {path: 'detail/:id',component: DetailComponent},
  { path: 'home', component: HomeComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
