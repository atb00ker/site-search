// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
// Wordless SearchEngine
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  template: `
  <app-nav></app-nav>
  <router-outlet></router-outlet>
  `
})

export class AppComponent {
  title = 'Wordless Searchengine!';
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
