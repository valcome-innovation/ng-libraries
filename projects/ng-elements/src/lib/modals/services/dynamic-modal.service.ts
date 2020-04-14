import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector, Type } from '@angular/core';
import { BaseDynamicModalComponent } from '../components/base-dynamic-modal.component';
import { ModalModule } from '../modal.module';

@Injectable({ providedIn: ModalModule })
export class DynamicModalService {

  public constructor(private componentFactoryResolver: ComponentFactoryResolver,
                     private appRef: ApplicationRef,
                     private injector: Injector) {
  }

  public async showModal(dynamicModalType: Type<BaseDynamicModalComponent>): Promise<any> {
    const componentRef = this.createModal(dynamicModalType);
    return this.onCloseModal(componentRef);
  }

  private onCloseModal(modalRef: ComponentRef<BaseDynamicModalComponent>): Promise<any> {
    return new Promise((resolve) => {
      modalRef.instance.modalClose.subscribe((value) => {
        this.destroyModal(modalRef);
        resolve(value);
      });
    });
  }

  private createModal(dynamicModalType: Type<BaseDynamicModalComponent>): ComponentRef<BaseDynamicModalComponent> {
    const factory = this.componentFactoryResolver.resolveComponentFactory(dynamicModalType);
    const componentRef = factory.create(this.injector);
    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    return componentRef;
  }

  private destroyModal(componentRef: ComponentRef<BaseDynamicModalComponent>): void {
    this.appRef.detachView(componentRef.hostView);
    componentRef.destroy();
  }
}
