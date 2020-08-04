import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightSearch'
})
export class HighlightSearchPipe implements PipeTransform {
  transform(value: string, search: string): string {
    const valueStr = value + ''; // Ensure numeric values are converted to strings
    search = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return valueStr.replace(
      new RegExp('(?![^&;]+;)(?!<[^<>]*)(' + search + ')(?![^<>]*>)(?![^&;]+;)', 'gi'),
      '<strong class="highlight-search">$1</strong>'
    );
  }
}
