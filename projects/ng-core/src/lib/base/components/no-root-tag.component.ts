import { OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { BaseComponent } from './base.component';

export class NoRootTagComponent extends BaseComponent implements OnInit {

  @ViewChild(TemplateRef, { static: true })
  public template: TemplateRef<void>;

  public constructor(private vcRef: ViewContainerRef) {
    super();
  }

  public ngOnInit(): void {
    this.vcRef.createEmbeddedView(this.template);
  }
}
