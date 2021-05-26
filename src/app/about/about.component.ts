import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  public contactAuthorText: string = environment.app.contactAuthorText;
  public dataJsonUrl: string = environment.app.dataJsonUrl;
  public codeUrl: string = environment.app.codeUrl;
  public createCloneUrl: string = environment.app.createCloneUrl;
  constructor() { }

  ngOnInit(): void {
  }

}
