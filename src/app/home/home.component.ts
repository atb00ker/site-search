import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
// Site Search
import { ApiService } from '../api.service';
import { SiteCategory, Site } from '../app.interface';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public pageTitle: string;
  public selectedCategory: SiteCategory;
  public categories: SiteCategory[];
  public allSites: Site[];
  public filteredSites: Site[];
  private ngUnsubscribe = new Subject();

  constructor(private titleService: Title, private router: Router,
    private route: ActivatedRoute, private api: ApiService, private helper: HelperService) { }

  ngOnInit(): void {
    this.getSites();
    this.getCategories().then(categories => {
      this.route.queryParams.pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(params => {
          let catergoryParam = params['category'];
          this.selectedCategory = categories.find(category => category.tag == catergoryParam);
          if (catergoryParam && !this.selectedCategory) {
            this.selectedCategory = {
              title: this.helper.titleize(catergoryParam),
              tag: catergoryParam
            }
          }
          if (this.selectedCategory) {
            this.pageTitle = this.selectedCategory.title;
            this.titleService.setTitle(`Site Search | ${this.selectedCategory.title}`);
            this.filteredSites = this.allSites.filter(site =>
              site.tags.includes(this.selectedCategory.tag));
          } else {
            this.pageTitle = "Browse Categories...";
            this.titleService.setTitle("Site Search | Categories");
          }
        });
    });
  }


  getCategories(): Promise<SiteCategory[]> {
    return this.api.getCategories().then(
      response => this.categories = response,
      error => {
        console.error(error);
        return [];
      }
    );
  }

  getSites(): Promise<Site[]> {
    return this.api.getSites().then(
      response => {
        this.allSites = response;
        if (this.selectedCategory)
          this.filteredSites = this.allSites.filter(site =>
            site.tags.includes(this.selectedCategory.tag));
        else
          this.filteredSites = this.allSites;
        return response;
      },
      error => {
        console.error(error);
        return [];
      }
    );
  }

  selectCategory(category: void | string) {
    this.router.navigate([], { relativeTo: this.route, queryParams: { category: category } });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
