import { LocalStorage } from './local-storage/local.storage';
import { TestBed } from '@angular/core/testing';
import { NgStorageModule } from './ng-storage.module';
import { LocalNativeStorage } from './local-storage/local-native.storage';
import { LocalMemoryStorage } from './local-storage/local-memory.storage';

describe('NgStorageModule', () => {

  let localStorageSpy: jasmine.Spy;

  afterEach(() => localStorageSpy?.and.callThrough());

  it('should inject LocalNativeStorage', () => {
    const storage = injectLocalStorage();

    expect(storage).toBeInstanceOf(LocalNativeStorage);
  });

  it('should inject LocalMemoryStorage (empty response)', () => {
    localStorageSpy = spyOn(window.localStorage, 'getItem').and.returnValue(null);

    const storage = injectLocalStorage();

    expect(storage).toBeInstanceOf(LocalMemoryStorage);
  });

  it('should inject LocalMemoryStorage (throw Error)', () => {
    localStorageSpy = spyOn(window.localStorage, 'setItem').and.throwError(new Error('AHHHH'));

    const storage = injectLocalStorage();

    expect(storage).toBeInstanceOf(LocalMemoryStorage);
  });
});

function injectLocalStorage(): LocalStorage {
  TestBed.configureTestingModule({
    imports: [
      NgStorageModule
    ]
  });

  return TestBed.inject(LocalStorage);
}
