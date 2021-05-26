import { Component } from '@angular/core';
import { HelperService } from './helper.service';

@Component({
    selector: 'email-copy-icon',
    template: `
    <button (click)="helper.copyAuthorEmail()" class="clipboard-button">
        <svg *ngIf="!helper.copySuccessFeedback" xmlns="http://www.w3.org/2000/svg" width="15"
              height="15" viewBox="0 0 24 24">
            <path
                d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
        </svg>
        <svg *ngIf="helper.copySuccessFeedback" xmlns="http://www.w3.org/2000/svg" width="15" height="15"
              viewBox="0 0 24 24">
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
        </svg>
    </button>`,
})
export class CopyIconComponent {
    constructor(public helper: HelperService) { }
}
