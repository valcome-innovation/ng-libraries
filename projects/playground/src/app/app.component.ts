import { AfterViewInit, Component } from '@angular/core';
import { DeviceService } from '../../../ng-screens/src/lib/services/device.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'playground';

  public constructor(public deviceService: DeviceService) {
  }

  public async ngAfterViewInit(): Promise<void> {
  }
}
