import { Injectable } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
// Site Search
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class HelperService {
  public contactAuthor: string = environment.app.contactAuthor;
  public copySuccessFeedback = false;

  constructor(private clipboard: ClipboardService) { }

  titleize(slug) {
    // Convert input slug to title case
    var words = slug.split("-");
    return words.map(function (word) {
      return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    }).join(' ');
  }

  copyAuthorEmail() {
    this.clipboard.copyFromContent(this.contactAuthor);
    this.copySuccessFeedback = true;
    setTimeout(_ => this.copySuccessFeedback = false, 1000);
  }
}
