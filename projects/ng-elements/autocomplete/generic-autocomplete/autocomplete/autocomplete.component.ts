import { Component, ContentChild, ContentChildren, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AutocompleteOptionComponent } from './autocomplete-option.component';
import { AutocompleteContentDirective } from './autocomplete-content.directive';

@Component({
  selector: 'val-autocomplete',
  template: `
    <ng-template #root>
      <div class="autocomplete">
        <ng-container *ngTemplateOutlet="content.tpl"></ng-container>
      </div>
    </ng-template>
  `,
  exportAs: 'valAutocomplete'
})
export class AutocompleteComponent {

  @ViewChild('root')
  public rootTemplate!: TemplateRef<any>;

  @ContentChild(AutocompleteContentDirective)
  public content!: AutocompleteContentDirective;

  @ContentChildren(AutocompleteOptionComponent)
  public options!: QueryList<AutocompleteOptionComponent>;

  public optionsClick(): Observable<any> {
    return this.options.changes.pipe(
      switchMap(options => {
        const clicks$ = options.map((option: any) => option.click$);

        return merge(...clicks$);
      })
    );
  }
}
