import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector,
  Type
} from '@angular/core';
import { BaseDynamicModalComponent } from '../components/base-dynamic-modal.component';
import { ModalModule } from '../modal.module';

@Injectable({ providedIn: ModalModule })
export class DynamicModalService {

  public constructor(private componentFactoryResolver: ComponentFactoryResolver,
                     private appRef: ApplicationRef,
                     private injector: Injector) {
  }

  /**
   * Displays a modal and waits until it gets closed by the user.
   */
  public async showModal<T>(dynamicModalType: Type<BaseDynamicModalComponent>, config?: T): Promise<any> {
    const componentRef = this.createModal(dynamicModalType, config);
    return this.onCloseModal(componentRef);
  }

  /**
   * Displays the modal without waiting until it closes again, but rather returns the instance.
   */
  public showModalAndProceed<T, K extends BaseDynamicModalComponent>(dynamicModalType: Type<K>, config?: T): ComponentRef<K> {
    const componentRef = this.createModal(dynamicModalType, config);
    this.onCloseModal(componentRef);

    return componentRef;
  }

  private destroyModal(componentRef: ComponentRef<BaseDynamicModalComponent>): void {
    this.appRef.detachView(componentRef.hostView);
    componentRef.destroy();
  }

  private onCloseModal(modalRef: ComponentRef<BaseDynamicModalComponent>): Promise<any> {
    return new Promise((resolve) => {
      modalRef.instance.modalClose.subscribe((value: any) => {
        this.destroyModal(modalRef);
        resolve(value);
      });
    });
  }

  private createModal<K extends BaseDynamicModalComponent>(dynamicModalType: Type<K>, config?: any): ComponentRef<K> {
    const factory = this.componentFactoryResolver.resolveComponentFactory(dynamicModalType);
    const componentRef = factory.create(this.injector);
    componentRef.instance.config = config;
    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    return componentRef;
  }
}
