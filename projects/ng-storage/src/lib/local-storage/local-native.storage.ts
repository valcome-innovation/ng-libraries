import { Injectable } from '@angular/core';
import { LocalStorage } from './local.storage';

@Injectable({ providedIn: 'root' })
export class LocalNativeStorage extends LocalStorage {

  public get length(): number {
    return localStorage.length;
  }

  public clear(): void {
    localStorage.clear();
  }

  public getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  public key(index: number): string | null {
    return localStorage.key(index); // Returns weird orders
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  public setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
}
