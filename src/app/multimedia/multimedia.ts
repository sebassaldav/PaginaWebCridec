import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-multimedia',
  imports: [],
  templateUrl: './multimedia.html',
  styleUrl: './multimedia.scss',
})
export class Multimedia {

  constructor(private sanitizer: DomSanitizer){}

  getSafeUrl(url: string): SafeResourceUrl {
  return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
