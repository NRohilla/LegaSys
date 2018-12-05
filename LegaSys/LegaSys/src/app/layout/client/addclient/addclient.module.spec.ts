import { AddclientModule } from './addclient.module';

describe('AddclientModule', () => {
  let addclientModule: AddclientModule;

  beforeEach(() => {
    addclientModule = new AddclientModule();
  });

  it('should create an instance', () => {
    expect(addclientModule).toBeTruthy();
  });
});
