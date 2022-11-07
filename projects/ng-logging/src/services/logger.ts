export type ExtraLoggingData = Record<string, any>;

export abstract class Logger {

  public abstract log(message: string): void;
  public abstract log(message: string, extra?: ExtraLoggingData): void;

  public abstract info(message: string): void;
  public abstract info(message: string, extra?: ExtraLoggingData): void;

  public abstract warn(message: string): void;
  public abstract warn(message: string, extra?: ExtraLoggingData): void;

  public abstract error(message: string): void;
  public abstract error(message: string, extra?: ExtraLoggingData): void;

  public abstract exception(error: any): void;
  public abstract exception(error: any, extra?: ExtraLoggingData): void;
}
