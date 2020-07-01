import { Inject, Injectable } from '@angular/core';
import { Notyf } from 'notyf';
import { TOASTER_OPTIONS, ToasterModule } from './toaster.module';
import 'notyf/notyf.min.css';

@Injectable({ providedIn: ToasterModule })
export class ToasterService {
  public readonly toaster: Notyf;

  public constructor(@Inject(TOASTER_OPTIONS) options) {
    this.toaster = new Notyf(options);
  }
}
