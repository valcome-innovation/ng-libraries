import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[valAutocompleteContent]'
})
export class AutocompleteContentDirective {
  public constructor(public tpl: TemplateRef<any>) {
  }
}
