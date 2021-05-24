import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HelperService {
  constructor() { }

  titleize(slug) {
    // Convert input slug to title case
    var words = slug.split("-");
    return words.map(function (word) {
      return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    }).join(' ');
  }
}
