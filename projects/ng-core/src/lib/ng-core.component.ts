import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-core',
  template: `
    <p>
      ng-core works!
    </p>
  `,
  styles: []
})
export class NgCoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
