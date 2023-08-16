import { TestBed, waitForAsync } from '@angular/core/testing';
import { LocalMemoryStorage } from './local-memory.storage';
import { LocalNativeStorage } from './local-native.storage';

describe('LocalStorage', () => {

  let nativeStorage: LocalNativeStorage;
  let memoryStorage: LocalMemoryStorage;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        LocalNativeStorage,
        LocalMemoryStorage
      ]
    });

    nativeStorage = TestBed.inject(LocalNativeStorage);
    memoryStorage = TestBed.inject(LocalMemoryStorage);
  }));

  describe('NativeStorage, MemoryStorage', () => {

    [() => nativeStorage, () => memoryStorage].forEach(storage => {

      it('should create', () => {
        expect(storage()).toBeTruthy();
      });

      it('should set and get', () => {
        storage().setItem('key1', 'value1');

        const actual = storage().getItem('key1');

        expect(actual).toEqual('value1');
      });

      it('should set and remove', () => {
        storage().setItem('key1', 'value1');

        storage().removeItem('key1');
        const actual = storage().getItem('key1');

        expect(actual).toEqual(null);
      });

      it('should set and clear', () => {
        storage().setItem('key1', 'value1');
        storage().setItem('key2', 'value2');

        storage().clear();
        const actual1 = storage().getItem('key1');
        const actual2 = storage().getItem('key2');

        expect(actual1).toEqual(null);
        expect(actual2).toEqual(null);
      });

      // FLAKY test? localStorage key() does not return in same order?
      it('should get length and key', () => {
        storage().setItem('key2', 'value2');
        storage().setItem('key1', 'value1');

        const length = storage().length;
        const key = storage().key(1);

        expect(length).toEqual(2);
        expect(key).toEqual('key1');
      });

      it('should get empty key', () => {
        storage().setItem('key2', 'value2');
        storage().setItem('key1', 'value1');

        const key = storage().key(3);

        expect(key).toEqual(null);
      });
    });
  });
});
