import { ResourceModule } from './resource.module';

describe('ResourceModule', () => {
  let resourceModule: ResourceModule;

  beforeEach(() => {
    resourceModule = new ResourceModule();
  });

  it('should create an instance', () => {
    expect(resourceModule).toBeTruthy();
  });
});
