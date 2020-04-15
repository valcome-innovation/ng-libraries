import { AfterViewInit, Component } from '@angular/core';
import { DynamicModalService } from '../../../ng-elements/src/lib/modals/services/dynamic-modal.service';
import { SimpleModalComponent } from '../../../ng-elements/src/lib/modals/components/simple-modal/simple-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'playground';

  public constructor(private dynamicModalService: DynamicModalService) {
  }

  async ngAfterViewInit(): Promise<void> {
    await this.dynamicModalService.showModal(SimpleModalComponent);
  }
}
