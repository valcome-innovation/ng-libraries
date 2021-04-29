import { BaseServerErrorFormComponent } from "./base-server-error-form.component";

describe('BaseServerErrorFormComponent', () => {

  let component: BaseServerErrorFormComponent<any, any>;

  beforeEach(() => {
    component = new BaseServerErrorFormComponent();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})
