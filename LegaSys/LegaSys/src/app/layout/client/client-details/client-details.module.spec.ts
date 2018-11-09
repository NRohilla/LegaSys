import { ClientDetailsModule } from './client-details.module';

describe('ClientDetailsModule', () => {
  let clientDetailsModule: ClientDetailsModule;

  beforeEach(() => {
    clientDetailsModule = new ClientDetailsModule();
  });

  it('should create an instance', () => {
    expect(clientDetailsModule).toBeTruthy();
  });
});
