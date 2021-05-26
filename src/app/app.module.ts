// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// Third Part
import { ClipboardModule } from 'ngx-clipboard';
// Site Search
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CopyIconComponent } from './app.templates';
import { AboutComponent } from './about/about.component';


@Component({
  selector: 'app-root',
  template: `
  <app-nav></app-nav>
  <router-outlet></router-outlet>
  `
})

export class AppComponent {
  title = 'Site Search';
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CopyIconComponent,
    NavComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ClipboardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
