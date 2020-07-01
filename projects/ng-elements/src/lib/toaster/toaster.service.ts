import { Inject, Injectable } from '@angular/core';
import { ModalModule } from '../modals/modal.module';
import { INotyfOptions, Notyf } from 'notyf';
import { TOASTER_OPTIONS } from './toaster.module';
import 'notyf/notyf.min.css';

@Injectable({ providedIn: ModalModule })
export class ToasterService {
  public readonly toaster: Notyf;

  public constructor(@Inject(TOASTER_OPTIONS) options: Partial<INotyfOptions>) {
    this.toaster = new Notyf(options);
  }
}
