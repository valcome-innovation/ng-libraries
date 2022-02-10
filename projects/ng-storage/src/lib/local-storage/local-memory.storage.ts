import { LocalStorage } from './local.storage';

export class LocalMemoryStorage extends LocalStorage {

  private memory = new Map<string, string>();

  public get length(): number {
    return this.memory.size;
  }

  public clear(): void {
    this.memory.clear();
  }

  public getItem(key: string): string | null {
    return this.memory.get(key) ?? null;
  }

  public key(index: number): string | null {
    if (this.memory.size > index) {
      let i = 0;

      for (const key of this.memory.keys()) {
        if (index === i) {
          return key;
        }

        i++;
      }
    }

    return null;
  }

  public removeItem(key: string): void {
    this.memory.delete(key);
  }

  public setItem(key: string, value: string): void {
    this.memory.set(key, value);
  }
}
