import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
// Site Search
import { ApiService } from '../api.service';
import { SiteCategory } from '../app.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pageTitle: string;
  public categories: SiteCategory[];

  constructor(private titleService: Title, private api: ApiService) {
    this.pageTitle = "Browse Categories...";
    this.titleService.setTitle("Site Search | Categories");
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.api.getCategories().then(
      response => this.categories = response,
      error => console.error(error)
    );
  }
}
