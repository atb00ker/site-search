import { Component } from '@angular/core';
import { AppRoutes } from '../app-routing.module';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  public isCollapsed = true;
  public HOME_PATH: string = '/' + AppRoutes.home;
  public ABOUT_PATH: string = '/' + AppRoutes.about;
}
