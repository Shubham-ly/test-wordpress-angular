import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safe',
})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(url: string, type: string = ''): any {
    if (type === 'resource')
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    1;
    return this.sanitizer.bypassSecurityTrustHtml(url);
  }
}
