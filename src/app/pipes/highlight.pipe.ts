import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlightJson',
  standalone: true
})
export class HighlightJsonPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    if (!value) return '';
    let json = value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    json = json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
      let cls = 'n'; // number
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'k'; // key
          const key = match.substring(0, match.lastIndexOf(':')).trim();
          return `<span class="${cls}">${key}</span>:`;
        } else {
          cls = 's'; // string
        }
      } else if (/true|false/.test(match)) {
        cls = 'b'; // boolean
      } else if (/null/.test(match)) {
        cls = 'z'; // null
      }
      return `<span class="${cls}">${match}</span>`;
    });
    return this.sanitizer.bypassSecurityTrustHtml(json);
  }
}

@Pipe({
  name: 'highlightCurl',
  standalone: true
})
export class HighlightCurlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    if (!value) return '';
    let curl = value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    
    // Highlight 'curl'
    curl = curl.replace(/^curl\b/g, '<span class="method">curl</span>');
    
    // Highlight strings in single quotes
    curl = curl.replace(/('[^']*')/g, '<span class="s">$1</span>');
    
    return this.sanitizer.bypassSecurityTrustHtml(curl);
  }
}
