import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { TopicComponent } from './topic/topic.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, TopicComponent, DetailComponent],
  imports: [BrowserModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
