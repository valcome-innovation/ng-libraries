export abstract class LocalStorage implements Storage {

  public abstract readonly length: number;

  public abstract clear(): void;

  public abstract getItem(key: string): string | null;

  public abstract key(index: number): string | null;

  public abstract removeItem(key: string): void;

  public abstract setItem(key: string, value: string): void;
}
