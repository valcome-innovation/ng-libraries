import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorage } from './local-storage/local.storage';
import { LocalMemoryStorage } from './local-storage/local-memory.storage';
import { LocalNativeStorage } from './local-storage/local-native.storage';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: LocalStorage,
      useFactory: StorageModule.provideLocalStorage
    }
  ]
})
export class StorageModule {

  private static readonly FEATURE_TEST_KEY = 'localStorageFeatureTestKey';
  private static readonly FEATURE_TEST_VALUE = 'localStorageFeatureTestValue';

  public static provideLocalStorage(): LocalStorage {
    if (StorageModule.hasNativeLocalStorageSupport()) {
      return new LocalNativeStorage();
    } else {
      return new LocalMemoryStorage();
    }
  }

  private static hasNativeLocalStorageSupport(): boolean {
    try {
      localStorage.setItem(StorageModule.FEATURE_TEST_KEY, StorageModule.FEATURE_TEST_VALUE);
      return StorageModule.FEATURE_TEST_VALUE === localStorage.getItem(StorageModule.FEATURE_TEST_KEY);
    } catch {
      return false;
    }
  }
}
